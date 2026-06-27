# Michael Chua — Portfolio

A clean, minimal personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## File Structure

```
portfolio/
├── index.html                  # Main entry point
├── assets/
│   ├── css/
│   │   ├── main.css            # Root variables, reset, utilities, animations
│   │   ├── nav.css             # Navigation bar + mobile menu
│   │   ├── components.css      # Buttons, cards, tags, badges
│   │   └── sections.css        # Hero, about, experience, projects, contact
│   ├── js/
│   │   ├── main.js             # Nav toggle, scroll-spy, reveal animations
│   │   └── projects.js         # Project data + dynamic card rendering
│   └── fonts/                  # (optional) self-hosted fonts
├── images/
│   ├── projects/               # ← Drop project screenshots here (.png or .jpg)
│   │   ├── diabetic-readmission.png
│   │   └── melissa-nav.png
│   └── profile/                # ← Drop your headshot here
│       └── michael.jpg
└── content/
    └── Michael_resume_2026.pdf # ← Drop your resume PDF here for the download link
```

## Adding a Project

1. Take a screenshot of your project (1280×720 recommended).
2. Save it to `images/projects/your-project-name.png`.
3. Open `assets/js/projects.js` and add a new object to the `PROJECTS` array:

```js
{
  id: "your-project-name",
  title: "Your Project Title",
  description: "A short description of what the project does.",
  image: "images/projects/your-project-name.png",
  imagePlaceholder: "🤖",   // shown if image fails to load
  tags: ["Python", "React"],
  links: [
    { label: "GitHub", url: "https://github.com/michaelclsss/your-repo" },
    { label: "Live Demo", url: "https://your-demo.com" }
  ]
}
```

4. Save — the card appears automatically. No HTML changes needed.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo named `michaelclsss.github.io` (or any repo).
2. Go to **Settings → Pages → Source: main branch / root**.
3. Your site will be live at `https://michaelclsss.github.io`.

## Customisation Cheatsheet

| What to change       | Where                          |
|----------------------|--------------------------------|
| Colors & fonts       | `assets/css/main.css` `:root`  |
| Nav links            | `index.html` `<nav>`           |
| Hero text            | `index.html` `#hero`           |
| About / skills       | `index.html` `#about`          |
| Experience           | `index.html` `#experience`     |
| Projects             | `assets/js/projects.js`        |
| Contact links        | `index.html` `#contact`        |
