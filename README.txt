DRASHTI LIMBASIYA — PORTFOLIO WEBSITE
======================================
Updated: November 2026

HOW TO OPEN LOCALLY
--------------------
1. Extract this folder (if zipped) to any location on your computer.
2. Open index.html directly in any modern web browser (Chrome, Firefox, Edge).
   No local server is required — the site uses only HTML, CSS and JavaScript.

FILES INCLUDED
--------------
index.html                    — Main portfolio page (10 sections)
style.css                     — Light-theme stylesheet
script.js                     — Navigation, animations, mobile menu
DRASHTI LIMBASIYA.pdf         — Resume (linked from About and Contact sections)
assets/
  electrohub/
    electrohub_home.png       — ElectroHub home dashboard preview
    electrohub_products.png   — ElectroHub product listing & detail preview
    electrohub_cart_profile.png — ElectroHub cart, orders & profile preview
  smart-parking/
    parking_dashboard.png     — Smart Parking admin dashboard preview
    parking_booking.png       — Smart Parking booking management preview
    parking_payment.png       — Smart Parking QR payment & reports preview
  garage/
    (Patel Auto Garage previews are rendered as live HTML/CSS mockups — no image files needed)
README.txt                    — This file

PORTFOLIO SECTIONS
------------------
01 — Home / Hero
02 — About Me
03 — Skills & Technologies
04 — ElectroHub (Project Overview)
05 — ElectroHub (UI Previews)
06 — Smart Parking (Project Overview)
07 — Smart Parking (UI Previews)
08 — Patel Auto Garage (Project Overview)
09 — Patel Auto Garage (UI Previews)
10 — Education / Resume / Contact

Total sections: 10

PUBLISHING TO GITHUB PAGES
---------------------------
Follow these steps to publish or update your portfolio on GitHub Pages:

Step 1 — If you already have a GitHub Pages repository:
  - Open your existing repository at https://github.com/<your-username>/<repo-name>

Step 2 — Upload/replace files:
  Option A (GitHub website):
    a. Go to your repository on github.com
    b. Click "Add file" → "Upload files"
    c. Drag all the files from this folder (index.html, style.css, script.js,
       DRASHTI LIMBASIYA.pdf, and the entire assets/ folder)
    d. Scroll down, write a commit message like "Portfolio redesign – light theme"
    e. Click "Commit changes"

  Option B (Git command line):
    a. Clone your repo:  git clone https://github.com/<username>/<repo>.git
    b. Replace all files in the cloned folder with the new files
    c. Run:
         git add .
         git commit -m "Portfolio redesign – light theme"
         git push origin main

Step 3 — Enable GitHub Pages (first time only):
    a. Go to your repository → Settings → Pages
    b. Under "Source", select "Deploy from a branch"
    c. Select branch: main (or master) and folder: / (root)
    d. Click Save
    e. Your site will be live at: https://<username>.github.io/<repo-name>/

Step 4 — Wait 1–2 minutes, then open your GitHub Pages URL.

IMPORTANT NOTES
---------------
- The resume PDF filename must remain exactly "DRASHTI LIMBASIYA.pdf"
  (with a space) or update the href in index.html to match your filename.
- All image paths use forward slashes and are relative — they will work on
  all operating systems after extracting the ZIP.
- The Patel Auto Garage UI previews are built with HTML and CSS directly
  in the page — no image files are needed for that section.

PERSONAL DETAILS IN THIS PORTFOLIO
------------------------------------
Name     : Drashti Limbasiya
Email    : drashtidhirubhailimbasiya@gmail.com
Phone    : +91 97120 25741
Location : Surat, Gujarat, India
Degree   : Bachelor of Computer Applications (BCA) — VNSGU

WHAT WAS UPDATED
----------------
- Full light theme redesign (white/soft-green palette)
- New clean typography using Inter + Manrope fonts
- 10-section single-page layout
- AI-generated UI preview images for ElectroHub and Smart Parking (6 images)
- HTML/CSS live mockups for Patel Auto Garage (3 screens: dashboard, billing, reports)
- Responsive design for desktop, tablet and mobile
- Hamburger menu with smooth animation
- Active nav link tracking on scroll
- Smooth fade-in animations for cards
- All personal details preserved from original portfolio
- Resume PDF link preserved
