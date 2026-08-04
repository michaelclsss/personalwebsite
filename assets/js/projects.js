/* ============================================================
   Projects Data
   assets/js/projects.js

   To add a new project:
   1. Add a screenshot to images/projects/your-project.png
   2. Copy one of the objects below and fill in your details
   3. Save — the page will render it automatically
   ============================================================ */

const PROJECTS = [
  {
    id: "diabetic-readmission",
    title: "Diabetic Readmission Risk Dashboard",
    description:
      "End-to-end ML pipeline predicting 30-day hospital readmission risk on the UCI " +
      "130-Hospital dataset (101,766 encounters) using Random Forest with SMOTE oversampling " +
      "for class imbalance.",
    image: "images/projects/diabetic-readmission.png",  // replace with your screenshot
    imagePlaceholder: "🏥",
    tags: ["Python", "scikit-learn", "pandas", "SMOTE", "seaborn", "joblib"],
    links: [
      // for github links ETC
    ]
  },
  {
    id: "melissa-nav",
    title: "Melissa API Navigation Tool",
    description:
      "Datathon team project — a customizable route optimization platform solving the " +
      "Traveling Salesman Problem for 340+ real-world locations. Features an interactive " +
      "web dashboard for real-time visualizations and analytics.",
    image: "images/projects/melissa_project.png",           // replace with your screenshot
    imagePlaceholder: "🗺️",
    tags: ["Python", "JavaScript", "OR-Tools", "folium", "osmnx", "Melissa API"],
    links: [
    ]
  },
  {
    id: "f1-analytics",
    title: "F1 Telemetry Analytics",
    description:
      "Developed a native desktop GUI for comparing two Formula 1 drivers" +
      "It loads session telemetry, aligns laps by distance, and displays" +
      "overlapping and side-by-side Matplotlib charts inside a PySide6 application.",
    image: "images/projects/F1.jpg",           // replace with your screenshot
    tags: ["Python", "FastF1", "Pandas", "Matplotlib", "Numpy", "Arcade", "PySide6", "Pyglet"],
    links: [
    ]
  },
  {
    id: "stock-pp",
    title: "Stock Price Predictor",
    description:
      "Developed a stock price prediction app using machine learning" +
      "(HistGradientBoosting), technical indicators, and a Tkinter GUI " +
      "to visualize actual vs. predicted prices with forecast and performance metrics (RMSE, MAPE) by numpy.",
    image: "images/projects/stock_pic.png",           // replace with your screenshot
    imagePlaceholder: "🗺️",
    tags: ["Python", "Yfinance", "Pandas", "Numpy", "SKlearn", "tkinter"],
    links: [
    ]
  },
  {
    id: "webcrawler-pp",
    title: "ICS Web Crawler",
    description:
      "Developed a web crawler using a spacetime cache server to receive requests for scraping and analyzing ICS data from specific ICS sources.",
    image: "images/projects/web_crawler.png",           // replace with your screenshot
    tags: ["Python", "Cbor", "Requests", "tkinter"],
    links: [
    ]
  },
];

/* ── Render projects into #projects-grid ── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  PROJECTS.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';

    // Image — tries real image first, falls back to emoji placeholder
    const imageHTML = `
      <div class="project-image">
        <img
          src="${project.image}"
          alt="${project.title} screenshot"
          loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\\'project-image-placeholder\\'>${project.imagePlaceholder}</div>'"
        />
      </div>`;

    // Tags
    const tagsHTML = project.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join('');

    // Links
    const linksHTML = project.links
      .map(l => `<a href="${l.url}" class="project-link" target="_blank" rel="noopener">⟶ ${l.label}</a>`)
      .join('');

    card.innerHTML = `
      ${imageHTML}
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">${linksHTML}</div>
      </div>`;

    grid.appendChild(card);
  });

  // Add-project placeholder at the end
  const addCard = document.createElement('div');
  addCard.className = 'project-card add-project';
  // addCard.innerHTML = `
  //   <div class="add-icon">＋</div>
  //   <div class="add-label">Drop your screenshot in<br><code>images/projects/</code><br>and add an entry in<br><code>assets/js/projects.js</code></div>`;
  // grid.appendChild(addCard);
}

document.addEventListener('DOMContentLoaded', renderProjects);
