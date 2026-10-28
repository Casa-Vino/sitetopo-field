SiteTopo Field – web app files (SiteTopo 3D v2.4)
==================================================

These files are the SiteTopo 3D program set up as a web app for the phone. Put them on GitHub Pages
(or any static web host) and open the link on the phone: it installs to the home screen, works with no
signal, and updates itself when you upload a newer copy. Only the program goes on the web – your site
records, photos and client details stay on the phone until you save a package.

Files (all of them go in the top level of the repository, keeping the icons folder):
  index.html            the program (opens in the Field screen on a phone, the full program on a computer)
  sw.js                 the offline helper (service worker) – keeps the app and saved maps on the phone
  manifest.webmanifest  name and icons for the home-screen app
  icons\                app icons
  README.txt            this file

First upload (GitHub, in the browser)
  1. github.com › + (top right) › New repository › name: sitetopo-field › Public › Create repository.
  2. On the new repository page click "uploading an existing file" (or Add file › Upload files).
  3. Open this folder in File Explorer, select everything inside it (Ctrl+A – the files and the icons
     folder, not the folder itself) and drag them onto the GitHub page. Click "Commit changes".
  4. Settings › Pages › Build and deployment › Source: "Deploy from a branch", Branch: main, folder: / (root) › Save.
  5. After a minute or two the address shows at the top of the Pages screen:
       https://casa-vino.github.io/sitetopo-field/

On the phone (Android, Chrome)
  - Open the address above, then ⋮ › "Add to Home screen" › Install. Open "SiteTopo" from the home screen.
  - Allow location when asked, with "precise" location: Settings › Apps › Chrome › Permissions › Location ›
    "Use precise location" on (otherwise the app only gets about ±2 km). Outdoors expect about ±3–5 m.
  - Settings (⚙) › "Protect storage" so Android never clears the records.
  - Before a site with poor signal: open the site while you have signal and tap "Save map for offline".
  - External GPS receiver: set its app as the phone's location source ("mock location" in Developer
    options); the accuracy chip at the top then shows the receiver's accuracy.

Updating later (new version from Claude)
  - Repository › Add file › Upload files › drag in the new files (same names – they replace the old ones)
    › Commit changes. On the phone the app offers "Update now" the next time it is opened with signal
    (or Settings › Check for update). Records are kept.

Logging test holes (v1.6)
  - Hole › "+ Layer": one step at a time – Depth, Horizon, Colour (Munsell page: tap the chip, the name fills in),
    Texture, Structure, Moisture, Consistency (with "changes deeper to"), Extras, Class. A tap moves on by itself;
    the tabs along the top jump to any step. "Same as above" copies that step from the layer above.
  - 🎤 (top right) or "Say a layer": say it the way you write it – "0.23 to 0.32, A2, dark brown, 10YR 3/3, silty mud,
    weak structure, massive, very wet" – check what it understood, then Apply (or Apply + next layer). Chrome's
    microphone needs signal; the keyboard's microphone (Gboard) works without it once its offline English pack is
    downloaded (Gboard settings › Voice typing › Offline speech recognition).
  - Your own words ("Silty mud", "Sand rich phase", "Sandstone interval"…) become buttons and are understood by voice.
  - The description is written like the reports: "Very Dark Brown. 10YR 2/2. Sandy loam. Weak structure. Soft -> firm.
    Roots throughout." – change the wording on the Class step if needed.
  - Hold any button on the log screen (about half a second) to see what it means – key numbers (clay %, ribbon length,
    shear strength …), what to look for, how to test, and the source (Australian Soil and Land Survey Field Handbook,
    AS 1726:2017). Holding doesn't pick it. Hold one of your own words to write its definition for the team.
    Settings › Soil terms lists everything, with "Save as a training sheet" for printing.
  - Hole › "Copy table for Word" (or "Report table") gives the report's soil profile table; every hole is also in
    "<site> - soil profiles.html" in the package and on Google Drive.

Checks while you log (v2.1)
  - A new DCP asks which test hole it is at – the nearest one first (from the phone's position). The DCP screen and
    the site list say when a DCP is not linked, or is linked to a hole that isn't the nearest ("Link to TH2 (2.8 m)").
  - The hole screen flags an end-of-hole depth that doesn't match the bottom of the log, with one-tap fixes
    ("EOH = 1.4 m" or "Extend last layer to 1.6 m").
  - A hole or DCP recorded outside the lot you picked on the LIST is flagged ("Outside the lot boundary – 6 m away").

Paper log sheets (v2.1)
  - Print "Field log sheet v2 - soil description.pdf" (black squares in the four corners). Fill it in by hand as usual.
  - Site › Paper sheets › "📄 Scan a sheet": lay the sheet flat in even light, all four corner squares in the picture
    (or "From photos" for pictures already taken). The page is straightened and recognised (page 1, 2 or the DCP page),
    any way up. Ticked boxes and circled Y / N show green; orange means check it – tap a box to change it ("Zoom"
    makes them bigger).
  - Choose the hole the log rows are for (or "+ New test hole") and Save. Ticks fill only empty fields (site details,
    method, refusal, structure, moisture, consistency, origin); rows with writing become layers in order. The
    straightened sheet is kept as a photo of the hole. Each layer then shows its strip of the sheet above the picks
    (tap it to zoom), so the handwriting can be typed in beside it; each DCP shows its column of the DCP page.
  - Handwriting with Claude: "Package for Claude" makes "<site> - sheets for Claude.zip". Give it to Claude (Cowork)
    and ask: "Transcribe these SiteTopo field sheets into a SiteTopo transcription file." Open the file Claude returns
    with "Open a transcription…" (or "Open a site file…", or drop it on SiteTopo 3D): every change is listed – fill empty
    fields only, or use the sheet's values – and a copy of the site is kept under Earlier versions first.

On a computer (v2.3)
  - The same index.html is the full SiteTopo 3D on a computer. New in v2.3: the "Library" button – every logged site
    from one file (SiteTopo site library - all sites.json), shown on the map, switched on or off, opened in 3D with the
    sites around it. v2.2 added step 6 › Coastal hazards & tides.

What's here (v2.4)
  - In the full program (map or 3D view), tap the ground: a card lists everything shown there – coastal bands, DEA
    shorelines with their years, shoreline change, services, the landslide planning map, the parcel, nearby holes and
    DCPs (tap one for its log), and the ground level, slope and coordinates.

Site library on the phone (v2.3.1)
  - Save "SiteTopo site library - all sites.json" to the phone (e.g. Downloads). On the Field screen tap "Site library"
    (or "Open a site file…") › Open file… › choose it. It is kept on the phone for next time, separate from your site
    records – it is never uploaded to Google Drive or anywhere else. Never put the library file in the GitHub
    repository: the repository is public.
  - The list: search (ID, address, suburb, firm, "class H2"…), filter own / other firms / phone records, the eye
    switches a site on or off. Tap a site to see it on the map; "Open" shows it with the logged sites within 400 m
    (the list closes so the map can be seen – the header's "Library" button brings it back). Tap a hole or DCP on
    the map for its log card; step 3 › Build surface, then "3D view", for the 3D picture.
  - Phone screens: the header buttons now scroll sideways, and the library and hole cards fill the map.

Your records are safe
  - Every tap is saved on the phone within half a second ("Saved on this phone 10:42:13" at the top).
  - With Google Drive connected, the site also backs itself up a minute after you stop (at least every 4 minutes while
    you work, and straight away when the app goes into the background).
  - Site › "Earlier versions…": copies kept on the phone (when opened, every few minutes, before anything is deleted);
    Restore brings one back. Settings › "Recover a deleted site" brings back a deleted site's logs.

Getting the records to the laptop – Google Drive upload (set up once)
  - On the laptop: SiteTopo 3D › Field › ⚙ › "Google Drive upload" and follow its four steps (copy the script
    into script.google.com, deploy it as a Web app, paste its address, scan the code with the phone).
  - Install Google Drive for desktop on the laptop; then Field › "Link the uploads folder…" → your Drive
    folder SiteTopo3D (uploads go there, one folder per site).
  - Phone: a site › "Upload to Google Drive", or "Upload all" on the site list. Each site goes record first (logs,
    DCP counts, positions – on Drive within seconds), then the photos (about 5 seconds each on 4G). Keep SiteTopo
    open until the bar finishes – the screen stays on. If you close it, the rest goes later by itself, and at
    the latest when you next open the app with signal. With no signal the files wait on the phone.
  - Laptop: Field › "Uploads from the phone" lists new and updated sites, and sites still arriving › Import.
    Photos that arrive after the import show as "more photos arrived" › Add photos. Then "Show in SiteTopo 3D"
    or "Save to job folder…" (never overwrites a file – a second copy gets "(2)").
  Without Google Drive: site › "Save package (.zip)" (to Downloads), copy it to the laptop and drop it on SiteTopo 3D.
