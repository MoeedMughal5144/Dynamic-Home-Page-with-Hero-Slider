# Nexus Portfolio — Dynamic Home Page with Hero Slider

A modern, fully responsive portfolio homepage featuring an animated hero slider,
custom cursor, scroll-reveal effects, and a scrolling services ticker.

Built with pure **HTML5 · CSS3 · Vanilla JavaScript** — zero dependencies, zero build tools.

---

## 📁 Folder Structure

```
nexus-portfolio/
│
├── index.html              ← Main HTML page (entry point)
│
├── css/
│   ├── variables.css       ← Design tokens (colors, fonts, spacing)
│   ├── base.css            ← Reset, body, cursor, footer
│   ├── nav.css             ← Navigation bar styles
│   ├── hero.css            ← Hero section, slides, buttons
│   ├── slider.css          ← Dots, arrows, counter, progress bar
│   ├── sections.css        ← Services strip + projects grid
│   ├── animations.css      ← Keyframes + page loader + scroll reveal
│   └── responsive.css      ← Tablet & mobile breakpoints
│
├── js/
│   ├── data.js             ← Slide content array (edit to add slides)
│   ├── loader.js           ← Intro loader animation
│   ├── cursor.js           ← Custom two-layer magnetic cursor
│   ├── slider.js           ← Full slider logic (autoplay, nav, keyboard)
│   └── reveal.js           ← IntersectionObserver scroll reveal
│
├── images/                 ← (Optional) place local images here
├── assets/                 ← (Optional) fonts, icons, favicons
└── README.md               ← This guide
```

---

## 🚀 How to Run (Step by Step)

### Option 1 — Open Directly in Browser (Simplest)

No installation needed.

1. Download or unzip the project folder.
2. Open **File Explorer** (Windows) or **Finder** (Mac).
3. Navigate into the `nexus-portfolio/` folder.
4. Double-click `index.html`.
5. It opens in your default browser — done!

> ⚠️ Google Fonts load from the internet, so you need an internet connection
> for the correct fonts to appear. The page still works offline with fallback fonts.

---

### Option 2 — Live Server via VS Code (Recommended for Development)

Hot-reload so the browser refreshes every time you save a file.

**Step 1 — Install VS Code**
Download from https://code.visualstudio.com and install it.

**Step 2 — Install the Live Server extension**
- Open VS Code.
- Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac).
- Search for **Live Server** by Ritwick Dey.
- Click **Install**.

**Step 3 — Open the project**
- In VS Code: `File → Open Folder → select nexus-portfolio/`

**Step 4 — Start Live Server**
- Right-click `index.html` in the Explorer panel.
- Click **"Open with Live Server"**.
- Your browser opens automatically at `http://127.0.0.1:5500`

---

### Option 3 — Python Local Server (No installs if Python is present)

**Check if Python is installed:**
```bash
python --version
# or
python3 --version
```

**Run the server:**
```bash
# Navigate to the project folder
cd path/to/nexus-portfolio

# Python 3
python3 -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

Open your browser and go to: `http://localhost:8080`

---

### Option 4 — Node.js `serve` Package

**Install serve globally (one-time):**
```bash
npm install -g serve
```

**Run:**
```bash
cd path/to/nexus-portfolio
serve .
```

Open the URL shown in the terminal (usually `http://localhost:3000`).

---

### Option 5 — Deploy to GitHub Pages (Free Hosting)

1. Create a free account at https://github.com
2. Create a new repository (e.g. `nexus-portfolio`).
3. Upload all project files to the repository root.
4. Go to **Settings → Pages**.
5. Under **Source**, select `main` branch → `/ (root)`.
6. Click **Save**.
7. Your site is live at: `https://yourusername.github.io/nexus-portfolio`

---

### Option 6 — Deploy to Netlify (Drag & Drop, Free)

1. Go to https://netlify.com and sign up.
2. On the dashboard click **"Add new site → Deploy manually"**.
3. Drag and drop the entire `nexus-portfolio/` folder onto the upload zone.
4. Netlify gives you a live URL instantly (e.g. `https://your-site.netlify.app`).

---

## ✏️ How to Customize

### Change Slide Content
Edit `js/data.js` — each object in the `SLIDES_DATA` array is one slide:
```js
{
  tag:   "Your Category",
  title: "Your Title <em>Highlighted</em>",
  desc:  "Your description text.",
  image: "https://your-image-url.jpg",  // or a local path like "images/slide1.jpg"
  alt:   "Alt text for accessibility",
  cta:   { label: "Button Text", href: "#your-link" },
  ghost: { label: "Secondary",   href: "#your-link" }
}
```

### Change Colors / Theme
Edit `css/variables.css` — change the CSS custom properties:
```css
--accent:  #e8ff47;   /* Change to any color for the highlight */
--bg:      #09090c;   /* Page background */
--text:    #f0ede8;   /* Main text color */
```

### Change Auto-play Speed
In `js/slider.js`, find and edit:
```js
const INTERVAL = 4800; // milliseconds (4800ms = 4.8 seconds)
```

### Add More Project Cards
In `index.html`, copy any `<article class="project-card">` block and paste it
inside `.projects-grid`. Update the image, title, tag, and description.

---

## ✅ Features Checklist

| Feature                          | Status |
|----------------------------------|--------|
| Full-width hero slider           | ✅     |
| Auto-rotate every 4.8 seconds    | ✅     |
| Prev / Next arrow buttons        | ✅     |
| Dot / indicator navigation       | ✅     |
| Keyboard arrow key navigation    | ✅     |
| Animated progress bar            | ✅     |
| Slide counter (01 / 05)          | ✅     |
| Pause on hover                   | ✅     |
| Smooth fade + parallax effect    | ✅     |
| CTA buttons with hover effects   | ✅     |
| Custom magnetic cursor           | ✅     |
| Page intro loader animation      | ✅     |
| Scroll-reveal for project cards  | ✅     |
| Scrolling services ticker        | ✅     |
| Responsive (desktop/tablet/mobile) | ✅   |
| Semantic HTML5 + ARIA labels     | ✅     |
| Alt text on all images           | ✅     |
| Zero external dependencies       | ✅     |
| No build tools required          | ✅     |

---

## 🌐 Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge.
Requires JavaScript enabled for slider and cursor functionality.

---

## 📄 License

Free to use for personal and commercial projects.
