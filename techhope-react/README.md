# TechHope · React Rewrite

A React (Vite) version of the TechHope site, split into clean components with improved styling and a simple interactive timeline.

## Structure
- `src/App.jsx`: Page shell and section composition
- `src/components/Header.jsx`: Sticky navbar
- `src/components/Hero.jsx`: Hero section with gradient highlight and placeholder image area
- `src/components/Background.jsx`: Background section with interactive timeline
- `src/components/Project.jsx`: About the project (two cards)
- `src/components/Findings.jsx`: Findings grid with placeholder cards
- `src/components/CTA.jsx`: Call-to-action banner
- `src/components/Footer.jsx`: Footer with quick links
- `src/data/timeline.js`: Placeholder timeline events
- `src/styles.css`: Global styles (ported and refined)

## Getting started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Open the URL printed in your terminal (typically http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Adding images & assets
- Hero main image: Replace the `.hero-card-placeholder` in `Hero.jsx` with an `<img src="/path/to/your-image.jpg" alt="..." />` or a custom illustration component.
- Findings cards: Add plots/screenshots inside each `article.finding-card`.
- Timeline: Replace entries in `src/data/timeline.js` with your curated dates, titles, summaries, and credible links.

## Notes
- Smooth-scrolling for navbar anchors is enabled via CSS (`html { scroll-behavior: smooth; }`).
- Gradient text highlight uses `background-clip: text` with the WebKit-prefixed fallback.
- All section IDs match the navbar links for in-page navigation.
