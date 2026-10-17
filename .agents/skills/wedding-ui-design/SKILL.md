---
name: wedding-ui-design
description: Reusable instructions for designing a premium Christian wedding invitation website using elegant typography, pastel blue, ivory, pearl white, champagne gold, subtle Christian motifs, responsive layouts, accessibility, and tasteful CSS 3D envelope animations.
---

# Wedding UI Design Skill: Premium Christian Wedding Invitation

A comprehensive design and UI implementation standard for luxury, mobile-first Christian wedding invitation websites, specifically tailored for elegant ceremonies and receptions (such as Kerala/Kottayam Christian wedding traditions).

---

## 1. Visual Language & Aesthetic Philosophy

- **Tone & Mood**: Romantic, calm, timeless, editorial luxury. It should feel like receiving an expensive physical textured paper invitation with a wax seal.
- **Color Palette & Tokens**:
  - **Dominant Base / Backgrounds**:
    - Warm Ivory: `#FAF8F3`
    - Pearl White: `#FFFFFF`
    - Cloud Blue-Grey: `#E7EDF2`
  - **Primary Romantic Blues (Dominant Interface Shades)**:
    - Powder Blue: `#C6DCEC`
    - Ice Blue: `#D8E7EE`
    - Soft Sky Blue: `#B8D3E5`
  - **Metallic Accents (Use Sparingly)**:
    - Champagne Gold: `#D8C49A`
    - Muted Antique Gold: `#C5B083`
    - Gold Highlight / Foil: `rgba(216, 196, 154, 0.4)`
  - **Text & Contrast**:
    - Deep Slate / Charcoal: `#24303E` (High contrast, softer than pure black)
    - Muted Body Text: `#4A5868`
    - Fine Borders & Dividers: `rgba(216, 196, 154, 0.35)` or `rgba(198, 220, 236, 0.4)`
- **Textures & Finishes**:
  - Subtle paper grain or deckle-edge styling.
  - Soft diffuse shadows (`box-shadow: 0 10px 30px -10px rgba(74, 88, 104, 0.12)`).
  - Embossed wax seals with gentle metallic shimmer.
  - Avoid heavy drop-shadows, harsh neons, high-saturation colors, or game-like effects.

---

## 2. Typography System

- **Heading & Couple Names (Refined Serif)**:
  - Font families: `Cinzel`, `Cormorant Garamond`, `Playfair Display`, or `Baskerville` (with generic fallback `'Times New Roman', serif`).
  - Letter spacing: Generous letter-spacing for uppercase subtitles (`letter-spacing: 0.12em; text-transform: uppercase;`).
  - Hierarchy:
    - Couple Names / Title: Large display size (clamp `2.25rem` to `3.5rem`), bold/regular contrast.
    - Section Headings: `1.75rem` to `2.25rem`.
- **Body & Event Details (Readable Sans-Serif)**:
  - Font families: `Inter`, `Montserrat`, `Plus Jakarta Sans`, or `system-ui, -apple-system, sans-serif`.
  - Body copy font size: `1rem` (minimum `0.9375rem`), line height `1.65` to `1.8`.
  - Event details (dates, times, venue): Crisp, tabular numbers where appropriate (`font-variant-numeric: tabular-nums`).
- **Typographic Discipline**:
  - Never sacrifice readability for decorative fonts.
  - Ensure contrast ratio meets WCAG AA (minimum 4.5:1 for body copy against pastel backgrounds).

---

## 3. Subtle Christian & Regional Motifs

- **Christian Wedding Symbolism**:
  - Fine geometric or architectural arches reminiscent of church windows.
  - Delicate cross accents used as section dividers or seal embellishments.
  - Subtle doves, intertwined wedding rings, or olive branches.
  - Restrained floral motifs: Baby's breath, white roses, pale blue hydrangeas, and delicate eucalyptus greenery.
- **Cultural Restraint**:
  - Represent Kottayam/Kerala Christian heritage through architectural elegance, clean editorial layouts, and tasteful dignity.
  - Strictly avoid cultural stereotypes, garish imagery, or unverified liturgical/ceremony claims.
  - Any religious wording (such as "With God's blessings") must be placed with dignity and only as requested.

---

## 4. CSS 3D Envelope & Card Animation System

The digital invitation should reproduce the tactile delight of unboxing a physical wedding invite.

### 4.1 3D Opening Structure
```html
<div class="envelope-wrapper">
  <div class="envelope" role="region" aria-label="Wedding Invitation Envelope">
    <div class="envelope-back"></div>
    <div class="invitation-card" id="innerCard">
      <!-- Couple names, date summary, quick peek -->
    </div>
    <div class="envelope-front"></div>
    <div class="envelope-flap" id="envelopeFlap">
      <button class="wax-seal" aria-label="Open wedding invitation">
        <!-- Wax seal with monogram or cross motif -->
      </button>
    </div>
  </div>
</div>
```

### 4.2 Key CSS 3D Rules
- **Perspective**: Apply `perspective: 1200px` on the outer container.
- **Preserve 3D**: `transform-style: preserve-3d` on the envelope container.
- **Flap Rotation**:
  - Closed state: `transform: rotateX(0deg); transform-origin: top;`
  - Open state: `transform: rotateX(180deg); transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);`
  - Flap z-index management: Once opened past 90 degrees, flap `z-index` drops behind the inner card.
- **Card Extraction**:
  - After flap opens, translate inner card upward (`transform: translateY(-80px) translateZ(10px)`).
  - Smoothly fade or transition to the continuous hero section.
- **Fail-Safe & Skip Control**:
  - Include an explicit "Skip animation / View details" button (`aria-label="Skip animation"`).
  - Ensure inner card and content are fully readable even if CSS 3D is disabled or JavaScript is slow.

---

## 5. Responsive Layout Architecture (7 Standard Sections)

A complete single-page continuous flow optimized for mobile WhatsApp visitors:

1. **Section 1: Invitation Cover**
   - Full viewport / hero envelope presentation with interactive CSS 3D open action.
   - Clear skip option for fast access.
2. **Section 2: Hero \u2014 Meet the Couple**
   - Prominent couple names ("Jithu Julius & Rinnu Jeeva").
   - Subtitle: "Grand Wedding Reception".
   - Elegant hero portrait placeholder / decorative floral frame.
   - Gentle tilt effect on desktop (using mouse move); static/lightweight on mobile.
3. **Section 3: Family Invitation**
   - Verbatim family invitation copy ("Join us for an evening of joy...").
   - Warm host signature ("Julius Ruben & family").
   - Restrained decorative divider with gold accent.
4. **Section 4: Reception Details**
   - Floating paper card design with dates, day of week, start time, and end time.
   - Dynamic countdown timer calculated for `Asia/Kolkata` time zone (automatically hidden if dates are unset).
5. **Section 5: Venue and Directions**
   - Venue name, street address, and optional venue image.
   - Direct external link button to Google Maps (no API key required).
6. **Section 6: Couple Gallery & Lightbox**
   - Editorial masonry or balanced responsive grid.
   - Accessible lightbox modal with full keyboard support (`Escape` to close, arrow keys for navigation, trap focus).
   - Lazy loading on all gallery images (`loading="lazy"`).
7. **Section 7: Closing & Actions**
   - Heartfelt thank-you note and host acknowledgment.
   - Native Web Share API button with automatic fallback to copy-to-clipboard.
   - "Back to Top" smooth scroll button.

---

## 6. Accessibility & Performance Standards

- **Reduced Motion**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    .envelope-flap {
      transform: none !important;
    }
  }
  ```
- **Touch & Mobile Targets**:
  - Touch targets minimum `44px x 44px`.
  - Tested across mobile viewports `320px` to `430px` (iPhone SE to Pro Max).
  - Zero accidental horizontal overflow (`overflow-x: hidden` on viewport wrappers).
- **Performance Budget**:
  - CSS-first 3D without Three.js or heavy 3D rendering engines.
  - Fast first contentful paint (FCP) and low layout shift (CLS).
  - Modern image formats (`.webp`, `.svg`).

---

## 7. Data Architecture Pattern

Always centralize event variables in a single decoupled configuration file (`src/data/weddingConfig.js`):
- Couple names (display names vs. invitation copy names)
- Host names
- Event dates, start/end times, and timezone
- Venue details and Google Maps URL
- Image asset paths and gallery lists

This ensures complete maintainability without altering component code when real details are finalized.
