# 🏋️ IronForge Gym Website

A fully responsive, production-grade gym website built with **React 18**, **Tailwind CSS 3**, and **GSAP 3**.

---
## ✨ Features

- **Smooth GSAP animations** — hero entrance timeline + scroll-triggered reveals on every section
- **Responsive layout** — mobile-first, works on all screen sizes
- **Animated marquee ticker** — CSS infinite scroll band
- **Working contact form** — React state with success feedback
- **Custom scrollbar**, font pairing (Bebas Neue + Barlow), brand color system
- **Clean folder structure** — components, hooks, data, styles all separated

---

## 📂 Project Structure

```
ironforge/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Sticky nav with mobile drawer
│   │   │   └── Footer.jsx        # Multi-column footer
│   │   ├── sections/
│   │   │   ├── Hero.jsx          # Full-screen hero with GSAP timeline
│   │   │   ├── About.jsx         # Stats grid + feature tags
│   │   │   ├── Programs.jsx      # 6-card program grid
│   │   │   ├── Marquee.jsx       # Infinite scroll ticker
│   │   │   ├── Trainers.jsx      # Coach cards
│   │   │   ├── Pricing.jsx       # 3-tier pricing cards
│   │   │   └── Contact.jsx       # Contact form + info panel
│   │   └── ui/
│   │       ├── Button.jsx        # Reusable button (primary / outline)
│   │       └── SectionLabel.jsx  # Reusable section eyebrow label
│   ├── data/
│   │   └── index.js              # All site content / constants
│   ├── hooks/
│   │   ├── useGSAP.js            # GSAP helper hooks (mount + scroll)
│   │   └── useScrolled.js        # Navbar scroll detection
│   ├── styles/
│   │   └── index.css             # Tailwind + custom CSS utilities
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

## to run the command 

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| Vite | 5.4 | Build tool |
| Tailwind CSS | 3.4 | Utility styling |
| GSAP | 3.12 | Animations |
| Google Fonts | — | Bebas Neue + Barlow |

---

## 🎨 Design System

- **Primary color:** `#FF5000` (brand orange)
- **Display font:** Bebas Neue
- **Body font:** Barlow / Barlow Condensed
- **Theme:** Dark industrial — black base, zinc surfaces, orange accents

---

## 📝 Customisation

- **Content** — edit `src/data/index.js` (programs, trainers, pricing, etc.)
- **Colors** — change `--brand` in `src/styles/index.css` and `tailwind.config.js`
- **Animations** — tweak timing in `src/hooks/useGSAP.js`
- **Fonts** — swap the Google Fonts `<link>` in `index.html` and update `tailwind.config.js`
