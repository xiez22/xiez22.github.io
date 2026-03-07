# Zhe Xie — Academic Homepage

A pure static HTML/CSS/JS academic personal homepage, ready for deployment on **GitHub Pages** (or any static hosting service).

---

## File Structure

```
zhe-xie-homepage/
├── index.html      # Main page
├── style.css       # All styles
├── script.js       # Active nav + footer year
├── cv.pdf          # ← Place your CV PDF here (see below)
└── README.md       # This file
```

---

## How to Add Your CV

Place your CV PDF file in this folder and name it **`cv.pdf`**.  
The "Curriculum Vitae (PDF)" link in the sidebar will automatically point to it.

---

## Deploy to GitHub Pages

### Method 1 — Upload via GitHub Web UI (simplest)

1. Go to [github.com](https://github.com) and create a new repository named **`<your-username>.github.io`**  
   (e.g., `zhexie.github.io`).  
   If you already have a `<username>.github.io` repo, you can also use any other repo name and deploy to a subdirectory.

2. Click **Add file → Upload files**, then drag and drop all files in this folder.

3. Go to **Settings → Pages**, set **Source** to `main` branch, root `/`, and click **Save**.

4. Your site will be live at `https://<your-username>.github.io` within a minute.

---

### Method 2 — Git command line

```bash
# 1. Initialize a git repo in this folder
cd zhe-xie-homepage
git init
git add .
git commit -m "Initial academic homepage"

# 2. Create a GitHub repo named <username>.github.io, then push
git remote add origin https://github.com/<username>/<username>.github.io.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Pages in repo Settings → Pages → Source: main / root
```

---

### Method 3 — Deploy to a subdirectory (project page)

If you want the site at `https://<username>.github.io/homepage/`:

1. Create a repo named `homepage` (or any name).
2. Push all files to the `main` branch.
3. Enable GitHub Pages in **Settings → Pages → Source: main / root**.

---

## Customization

All content is in `index.html`. Each section is clearly commented:

| Section | Comment marker |
|---------|---------------|
| About | `<!-- ── About ── -->` |
| News | `<!-- ── News ── -->` |
| Publications | `<!-- ── Publications ── -->` |
| Experience | `<!-- ── Experience ── -->` |
| Honors | `<!-- ── Honors ── -->` |

To add a new publication, copy an existing `<div class="pub-entry">` block and update the content.

---

## Fonts

The page loads fonts from Google Fonts CDN. If you need to work fully offline, download the fonts and update the `<link>` tag in `index.html` accordingly.

---

## License

Feel free to use and modify for personal academic use.
