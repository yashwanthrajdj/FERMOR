# Fermor — Homepage Redesign

A polished, professional homepage for **Fermor**, India's personal finance clarity platform.

> **Live Preview:** [Deploy link will be added after Vercel/Netlify deployment]

![Fermor](https://img.shields.io/badge/Fermor-Smart_Finance-0891B2?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSIjMDg5MUIyIi8+PHRleHQgeD0iMTYiIHk9IjIyIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iODAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RjwvdGV4dD48L3N2Zz4=)

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/fermor-homepage.git
cd fermor-homepage

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Font** | Inter (Google Fonts) |

---

## 📐 Architecture

```
src/
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphism nav with mobile menu
│   ├── Hero.tsx           # Hero with app mockup + health score
│   ├── Categories.tsx     # 16-category planning grid
│   ├── LifeStages.tsx     # Life stage cards (earning → retirement)
│   ├── AppShowcase.tsx    # Net worth dashboard mockup
│   ├── PlanWisely.tsx     # Asset allocation donut chart
│   ├── ToolsGrid.tsx      # 6 tool category cards
│   ├── StatsSection.tsx   # Animated counter stats bar
│   ├── Analysis.tsx       # Latest articles / blog section
│   ├── CTASection.tsx     # Final call-to-action
│   └── Footer.tsx         # 5-column professional footer
├── App.tsx                # Section assembly
├── main.tsx               # Entry point
└── index.css              # Tailwind config + custom theme
```

---

## 🎨 Design Decisions

### Why Cyan instead of the original Lime-Green?

The existing Fermor site uses a lime-green (#C8F135) palette. I deliberately chose **cyan (#0891B2)** because:

1. **Trust signaling** — Cyan/teal is widely used in fintech (Razorpay, Groww, Paytm Money) because it communicates stability and professionalism
2. **Differentiation** — This submission demonstrates independent design thinking rather than copying the existing brand
3. **Accessibility** — Cyan provides better contrast ratios against white backgrounds than lime-green for text
4. **Versatility** — The cyan palette works elegantly across light sections, dark sections (CTA/footer), and gradient accents

### Section Flow & Information Architecture

The homepage follows a deliberate narrative arc:

1. **Hero** → What is Fermor? (Awareness)
2. **Categories** → What can I do with it? (Discovery)
3. **Life Stages** → Is this for me? (Relevance)
4. **App Showcase** → How does it work? (Understanding)
5. **Plan Wisely** → Can I trust the recommendations? (Trust)
6. **Tools Grid** → What's the full scope? (Comprehension)
7. **Stats Bar** → Social proof (Validation)
8. **Analysis** → Is the content fresh? (Credibility)
9. **CTA** → Let me try it (Conversion)
10. **Footer** → Everything else (Navigation)

### Key Visual Choices

- **Glassmorphism** on the hero mockup card — creates depth without heaviness
- **SVG donut chart** in PlanWisely — built from scratch, no chart library dependency
- **Animated counters** using IntersectionObserver — counts up only when scrolled into view
- **Floating animations** on mockup cards — subtle motion creates life without being distracting
- **Staggered entrance** on grid items — each card appears with a slight delay creating a cascade effect

### Responsive Design

Every section is designed mobile-first with specific breakpoints:
- **Mobile (< 640px):** Single column, stacked layout, full-width buttons
- **Tablet (640-1024px):** 2-column grids, adjusted typography
- **Desktop (> 1024px):** Full multi-column layouts, side-by-side sections

---

## 📦 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the `dist/` folder to Netlify
```

### Manual

```bash
npm run build
# Serve the `dist/` directory with any static file server
npx serve dist
```

---

## 📝 Notes

- All calculations and data shown on the mockup cards are **illustrative** (not connected to live data)
- No external images are used — all visuals are created with CSS gradients, SVG shapes, and Tailwind utilities
- The site is fully static with no backend dependencies
- Framer Motion animations are set to `viewport: { once: true }` to avoid repeated triggers

---

## 📄 License

Built as a frontend assignment for Fermor Technologies Pvt. Ltd.

---

*Financial clarity. Real momentum.*
