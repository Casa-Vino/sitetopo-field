/* SiteTopo Field service worker: the app works with no signal, updates itself, and keeps map tiles.
   Built from src/sw.js – the build id below changes with every build, so each new upload is picked up. */
const BUILD = '2026-10-16-f401ab4969';
const SHELL = 'shell-' + BUILD;
const SHELL_FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png'];
const BROWSE = 'tiles-browse';
const BROWSE_MAX = 4000;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_FILES.map((u) => new Request(u, { cache: 'reload' })))));
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('shell-') && k !== SHELL) await caches.delete(k);
    await self.clients.claim();
  })());
});

const isTile = (u) => /\/MapServer\/tile\/\d+\/\d+\/\d+/.test(u.pathname);

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate') {
      // the app page: from the cache (works offline), the network only if it is missing
      e.respondWith((async () => (await caches.match('./index.html', { cacheName: SHELL })) || (await caches.match('./', { cacheName: SHELL })) || fetch(req))());
      return;
    }
    e.respondWith((async () => (await caches.match(req, { cacheName: SHELL, ignoreSearch: true })) || fetch(req))());
    return;
  }
  if (isTile(url)) e.respondWith(tile(req));
  // everything else (LIST queries, searches) goes straight to the network
});

let trimTimer = null;
async function tile(req) {
  const hit = await caches.match(req.url);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok && (res.type === 'cors' || res.type === 'basic')) {
    const c = await caches.open(BROWSE);
    await c.put(req.url, res.clone());
    clearTimeout(trimTimer);
    trimTimer = setTimeout(trim, 5000);
  }
  return res;
}
async function trim() {
  const c = await caches.open(BROWSE);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - BROWSE_MAX; i++) await c.delete(keys[i]);
}

self.addEventListener('message', (e) => {
  const m = e.data || {};
  if (m.type === 'skipWaiting') { self.skipWaiting(); return; }
  if (m.type === 'prefetch') e.waitUntil(prefetch(m, e.ports[0]));
});
async function prefetch({ urls, cache }, port) {
  const post = (x) => { try { port && port.postMessage(x); } catch (err) { /* page gone */ } };
  try {
    const c = await caches.open(cache);
    let done = 0, ok = 0, failed = 0, bytes = 0;
    const queue = [...urls];
    const worker = async () => {
      while (queue.length) {
        const u = queue.shift();
        try {
          let res = await c.match(u);
          if (!res) {
            const old = await caches.match(u);
            if (old) { await c.put(u, old.clone()); res = old; } else {
              const r = await fetch(u, { mode: 'cors', credentials: 'omit' });
              if (r.ok) { await c.put(u, r.clone()); res = r; }
            }
          }
          if (res) { ok++; const b = res.headers.get('content-length'); if (b) bytes += +b; } else failed++;
        } catch (err) { failed++; }
        done++;
        if (done % 8 === 0 || done === urls.length) post({ type: 'progress', done, total: urls.length, ok, failed });
      }
    };
    await Promise.all(Array.from({ length: 6 }, worker));
    post({ type: 'done', total: urls.length, ok, failed, bytes });
  } catch (err) {
    post({ type: 'error', message: err && err.message });
  }
}
