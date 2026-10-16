SiteTopo Field – web app files (SiteTopo 3D v1.4.0)
====================================================

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
  - Allow location when asked. Settings (⚙) › "Protect storage" so Android never clears the records.
  - Before a site with poor signal: open the site while you have signal and tap "Save map for offline".
  - External GPS receiver: set its app as the phone's location source ("mock location" in Developer
    options); the accuracy chip at the top then shows the receiver's accuracy.

Updating later (new version from Claude)
  - Repository › Add file › Upload files › drag in the new files (same names – they replace the old ones)
    › Commit changes. On the phone the app offers "Update now" the next time it is opened with signal
    (or Settings › Check for update). Records are kept.

Getting the records to the laptop
  - Site screen › "Save package (.zip)" – goes to the phone's Downloads. Send it to the laptop (Quick Share,
    Google Drive, email or USB) and drop it on SiteTopo 3D: the site, test holes, logs and DCPs load in
    step 1 and step 6. In SiteTopo 3D › Field › the site › "Save to job folder…" writes the photos and
    tables into the job folder (it never overwrites a file – a second copy gets "(2)").
