# Mohamed Elsayed — Portfolio

A premium static portfolio website for **Mohamed Elsayed**, Video Editor & Motion Designer. Built with pure HTML5, CSS3, and vanilla JavaScript — no frameworks, no build tools.

Works locally by double-clicking `index.html` and deploys directly to **GitHub Pages**.

---

## Project Structure

```
Mohamed-Portfolio/
├── index.html          # Main page
├── README.md           # This file
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # All JavaScript
└── images/
    ├── design-01.jpg   # Visual design work 1
    ├── design-02.jpg   # Visual design work 2
    └── design-03.jpg   # Visual design work 3
```

---

## Replace Photoshop / Design Images

1. Prepare your design images (recommended: 1200×900 px or similar 4:3 ratio).
2. Save them as JPG files.
3. Replace the files in the `images/` folder:
   - `images/design-01.jpg`
   - `images/design-02.jpg`
   - `images/design-03.jpg`
4. Keep the same filenames so no code changes are needed.

To change alt text, edit the `<img>` tags in the **VISUAL DESIGN** section of `index.html`.

---

## Change YouTube Videos

### Showreel

Find the showreel iframe in `index.html` (search for `SHOWREEL`). Replace the video ID in the embed URL:

```
https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1
```

The hero preview uses the same showreel — update both if you change it.

### Reels (YouTube Shorts)

Find the **REELS** section in `index.html`. Each reel uses this embed format:

```
https://www.youtube.com/embed/SHORT_ID?rel=0&modestbranding=1
```

Extract the short ID from your YouTube Shorts URL and replace it in the corresponding iframe `src`.

---

## Change Contact Information

In `index.html`, search for the **Contact** section and update:

- Email address in the text and `mailto:` links
- Phone number in the text and `tel:` link

Also update the `GET IN TOUCH →` button `href` if you change the email.

---

## Upload to GitHub

1. Create a new repository on GitHub (e.g. `Mohamed-Portfolio`).
2. Upload all project files maintaining the folder structure.
3. Make sure `index.html` is in the **root** of the repository.

Using Git from the command line:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Mohamed-Portfolio.git
git push -u origin main
```

---

## Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select the **main** branch and **/ (root)** folder.
5. Click **Save**.

Your site will be live at:

```
https://YOUR_USERNAME.github.io/Mohamed-Portfolio/
```

It may take a few minutes to deploy.

---

## Local Preview

Double-click `index.html` to open it in your browser. No server or npm required.

All asset paths are relative (`css/style.css`, `js/script.js`, `images/...`) so the site works with both `file://` and GitHub Pages.
