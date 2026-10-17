# Nihal & Serene — Grand Wedding Reception Invitation

An elegant, mobile-first static wedding reception invitation website for **Nihal & Serene**, built with **React + Vite**. The digital invitation features a luxury editorial design inspired by Christian wedding traditions in a Kottayam, Kerala context, featuring a pastel-blue color palette, refined typography, subtle Christian motifs, and an interactive CSS 3D envelope-opening animation.

---

## 🎨 Design Palette & Brand Tokens
- **Powder Blue**: `#C6DCEC` (Dominant atmospheric tone)
- **Ice Blue**: `#D8E7EE` (Soft secondary accents)
- **Cloud Blue-Grey**: `#E7EDF2` (Subtle backgrounds and chips)
- **Warm Ivory**: `#FAF8F3` (Base paper background)
- **Pearl White**: `#FFFFFF` (Card surfaces)
- **Champagne Gold**: `#D8C49A` (Wax seal, dividers, fine accents)
- **Deep Slate / Charcoal**: `#24303E` (High-contrast typography)

---

## 🏛️ Continuous 7-Section Architecture
1. **Section 1 — Invitation Cover**: Full-screen 3D envelope with animated flap (`rotateX`) and an `N & S` wax monogram seal.
2. **Section 2 — Hero: Meet the Couple**: Prominent names, subtitle "Grand Wedding Reception", arched floral frame with temporary hero portrait, and subtle mouse tilt depth.
3. **Section 3 — Family Invitation**: Verbatim approved family invitation wording with host signature (*Julius Ruben & family*).
4. **Section 4 — Reception Details**: Floating paper cards for the full celebration calendar, date, and time, with a dynamic countdown timer for `Asia/Kolkata` when a time is configured.
5. **Section 5 — Venue & Directions**: Venue details for Kottayam, Kerala with direct external link to Google Maps (no API key required).
6. **Section 6 — Couple Gallery**: Responsive photo grid with accessible lightbox modal (keyboard navigation with `ArrowLeft`/`ArrowRight`, `Escape` to close, focus management).
7. **Section 7 — Closing Section**: Gratitude note, couple & host names, native Web Share API action with clipboard copy fallback, and smooth Back to Top control.

---

## 🚀 Local Development & Preview

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Run Production Build & Preview
```bash
# Build static bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Centralized Event Configuration
All event variables and media links are decoupled and managed centrally in:
```
src/data/weddingConfig.js
```
To update dates, venue, or couple details, simply modify this file.

### Replacing Placeholder Images
Place official photos in `public/images/` and update paths in `src/data/weddingConfig.js`:
- **Hero Photo**: `public/images/couple-hero.webp`
- **Venue Photo**: `public/images/venue.webp`
- **Gallery Photos**: `public/images/gallery-01.webp` through `gallery-06.webp`
- **WhatsApp / Social Preview**: `public/og-image.jpg` (1200x630px)

---

## 📦 Zero-Backend Architecture
This website is completely static:
- No database
- No backend server or serverless functions
- No runtime API keys
- Ready for one-click static deployment to **Vercel** or any static host.
