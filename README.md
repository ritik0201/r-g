# R&G Consultancy Services – Corporate Portal Homepage

A production-ready, high-conviction single-page homepage for **R&G Consultancy Services** engineered to match the approved Google Stitch design specifications.

Built with **React 18+**, **TypeScript**, **Vite**, **Tailwind CSS v4** (CSS-first `@theme` configuration), **Lucide React**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Installation
Navigate into the project directory and install dependencies:
```bash
cd rg-consultancy
npm install
```
*(Alternatively, from the root workspace directory, run `npm run dev` or `npm run build` which delegates directly).*

### 2. Development Server
Start the local Vite dev server with hot module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Type Checking
Runs strict TypeScript compilation (`tsc -b`) and Vite production bundling:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

## 📁 Folder Structure

```
rg-consultancy/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, vector assets, logos
│   ├── components/
│   │   ├── common/          # Reusable UI primitives
│   │   │   ├── Button.tsx           # Variant-driven button (primary, secondary, ghost)
│   │   │   ├── Card.tsx             # Theme-styled card with hover elevations
│   │   │   ├── Badge.tsx            # Status, eyebrow, and pill badges
│   │   │   ├── SectionHeading.tsx   # Eyebrow, title, subtext heading block
│   │   │   ├── Container.tsx        # Responsive layout container
│   │   │   ├── Section.tsx          # Semantic section with background variants
│   │   │   ├── Reveal.tsx           # Framer motion whileInView wrapper
│   │   │   └── index.ts             # Barrel export
│   │   ├── layout/          # Global layout chrome
│   │   │   ├── Navbar.tsx           # Sticky nav with scroll spy & animated mobile drawer
│   │   │   └── Footer.tsx           # Enterprise footer with legal, contact, and partner links
│   │   └── sections/        # Homepage sections in exact Stitch sequence
│   │       ├── Hero.tsx                 # 3-line headline, CTAs, trust signals, operational preview
│   │       ├── Pillars.tsx              # 4 core execution pillars on lavender background
│   │       ├── Expertise.tsx            # Toolkit capabilities with interactive pill chips
│   │       ├── IntegratedApproach.tsx   # Full-width lavender banner with gold quote badge
│   │       ├── Credentials.tsx          # 3 stats with gold top accents and count-up animation
│   │       ├── CaseStudies.tsx          # Jewelite, Basco Games, MetricAI cards with hover zoom
│   │       ├── Partners.tsx             # Strategic Alliance Network (SimplifyIT, Talent Corner, Mikado)
│   │       └── ContactCTA.tsx           # High-impact lavender panel with gold CTA
│   ├── data/                # 100% typed static content (Zero inline strings in JSX)
│   │   ├── site.ts          # Company name, legal name, tagline, phone, email, address, links
│   │   ├── navigation.ts    # Main navigation links and section anchor IDs
│   │   ├── hero.ts          # Headline lines, description, CTAs, trust signals, dashboard metrics
│   │   ├── pillars.ts       # 4 execution pillars, taglines, icon mappings
│   │   ├── expertise.ts     # Capabilities toolkit and icon mappings
│   │   ├── approach.ts      # Integrated lifecycle quote banner content
│   │   ├── credentials.ts   # Numerical stats with suffixes and labels
│   │   ├── caseStudies.ts   # Project metadata, tags, image URLs, and descriptions
│   │   └── partners.ts      # Alliance network partner cards and CTA copy
│   ├── types/               # TypeScript interfaces for site, sections, and components
│   ├── hooks/               # Custom hooks (useScrollSpy, useMobileMenu)
│   ├── lib/                 # Utility helpers (cn class merger) and Framer Motion variants
│   ├── pages/
│   │   └── Home.tsx         # Composes sections in exact required sequence
│   ├── styles/
│   │   └── theme.css        # Centralized Tailwind v4 @theme design system
│   ├── App.tsx              # Root app component (Navbar + Home + Footer)
│   ├── main.tsx             # React DOM entry point
│   └── index.css            # Root stylesheet importing theme.css
├── index.html               # HTML5 template loading Playfair Display & DM Sans fonts
├── vite.config.ts           # Vite + Tailwind v4 plugin + path aliases (@/)
├── tsconfig.json            # TypeScript configuration
└── eslint.config.js         # ESLint configuration
```

---

## 🎨 Centralized Design System (`theme.css`)

All colors, fonts, shadows, borders, radii, and spacing scales are defined in `src/styles/theme.css` using Tailwind CSS v4's CSS-first `@theme` block.

**Changing a token value in `theme.css` restyles the entire website instantly with zero component edits.**

### Key Design Tokens

| Token Family | Variable | Default Value | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | `--color-navy-900` | `#0B1F3A` | Display headings, primary dark buttons, brand mark |
| **Brand Gold** | `--color-gold-500` | `#C9A227` | Primary action button, eyebrows, quote badge, accents |
| **Lavender Surface** | `--color-lavender-100` | `#F3F4FF` | Pillars section ground, contact CTA panel, active tags |
| **Headings Font** | `--font-heading` | `'Playfair Display', serif` | Display headings and section titles |
| **Body Font** | `--font-body` | `'DM Sans', sans-serif` | Body copy, navigation links, and badges |
| **Card Radius** | `--radius-card` | `1rem` (16px) | Card containers |
| **Button Radius** | `--radius-button` | `0.5rem` (8px) | Interactive buttons |
| **Ambient Shadow** | `--shadow-card` | `0 4px 20px 0 rgba(11, 31, 58, 0.05)` | Elevation level 1 |
| **Hover Shadow** | `--shadow-card-hover` | `0 12px 32px 0 rgba(11, 31, 58, 0.10)` | Card lift interaction |

### How to Restyle the Site
To switch brand colors or typography, simply update the CSS custom properties in `src/styles/theme.css`:
```css
@theme {
  --color-primary: #0F172A;   /* Change primary dark tone */
  --color-accent: #E8B93A;    /* Change accent gold */
  --font-heading: 'Cinzel', serif; /* Change heading typography */
}
```

---

## 📝 How to Edit Content (`src/data/`)

Every section component is strictly decoupled from raw strings. To update text, numbers, or links:

1. **Company Contact & Legal:** Edit [`src/data/site.ts`](file:///c:/Users/ritik/Coding/Projects/rg-consultancy/src/data/site.ts)
   - Phone: `+91-9321253357`
   - Email: `info@rgcs.com`
   - Address: `203/204 Rajhans Annex, Naupada, Thane 400602`
2. **Hero Copy & Metrics:** Edit [`src/data/hero.ts`](file:///c:/Users/ritik/Coding/Projects/rg-consultancy/src/data/hero.ts)
3. **Pillars:** Edit [`src/data/pillars.ts`](file:///c:/Users/ritik/Coding/Projects/rg-consultancy/src/data/pillars.ts)
4. **Toolkit & Skills:** Edit [`src/data/expertise.ts`](file:///c:/Users/ritik/Coding/Projects/rg-consultancy/src/data/expertise.ts)
5. **Credentials & Count-Up Numbers:** Edit [`src/data/credentials.ts`](file:///c:/Users/ritik/Coding/Projects/rg-consultancy/src/data/credentials.ts)
6. **Case Studies & Images:** Edit [`src/data/caseStudies.ts`](file:///c:/Users/ritik/Coding/Projects/rg-consultancy/src/data/caseStudies.ts)
7. **Partners:** Edit [`src/data/partners.ts`](file:///c:/Users/ritik/Coding/Projects/rg-consultancy/src/data/partners.ts)

---

## ♿ Accessibility & Performance

- **Semantic HTML5:** Uses `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` with explicit landmarks.
- **Accessible Motion:** All Framer Motion animations check `useReducedMotion()`. If the user has requested reduced motion in their OS, animations gracefully fallback to instant renders without motion sickness triggers.
- **Focus States:** High-visibility focus indicators on all buttons, links, and form elements.
- **Fully Responsive:** Smooth layout transitions across mobile (≤640px), tablet (768–1024px), and large desktop (≥1280px).
