# AGENTS.md — Project Guidelines & Specifications

## Project Overview
- **Project**: Nihal & Serene — Premium Christian Wedding Reception Invitation Website
- **Target Experience**: High-end, romantic digital invitation feeling like a physical unboxing with a CSS 3D envelope, delicate wax seal, and smooth continuous scroll.
- **Cultural Context**: Christian wedding in a Kottayam/Kerala context reflected through restrained, dignified styling, elegant church-inspired motifs, and refined typography.
- **Primary Audience**: Guests opening invitation links shared via WhatsApp on mobile devices.

---

## Technical Stack & Architectural Rules
1. **Frontend Stack**: React + Vite (JavaScript or TypeScript with clean implementation).
2. **Pure Static Architecture**:
   - **NO backend** of any kind.
   - **NO database** or data storage service.
   - **NO serverless functions** or server-side rendering.
   - **NO runtime third-party API dependencies or API keys** (Google Maps opens directly via standard URL; no embedded Maps API).
3. **Deployment Target**: Vercel static hosting (`npm run build` -> `dist`).
4. **Icons & Styling**: Lucide React / SVG icons, CSS Modules or clean modular CSS.
5. **Interactive 3D**: Lightweight CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, `rotateX`). Do NOT introduce Three.js or heavy 3D rendering engines unless strictly justified.
6. **Reference URL Rule**: Any demo link is solely an external reference and must NOT be shown to visitors or used as a real link. Genuine invitation URLs remain empty until provided by the client.

---

## Design System & Brand Tokens

### Color Palette (Dominant Pastel Blue)
- **Primary Blues**:
  - Powder Blue: `#C6DCEC`
  - Ice Blue: `#D8E7EE`
  - Cloud Blue-Grey: `#E7EDF2`
- **Supporting Luxury Tones**:
  - Warm Ivory: `#FAF8F3`
  - Pearl White: `#FFFFFF`
  - Champagne Gold (Accents/Seal): `#D8C49A`
  - Soft Sage Green: `#D2DEC9` (Soft botanical accent)
- **Text & Contrast**:
  - Charcoal / Slate: `#24303E`
  - Muted Slate: `#4A5868`

### Typography & Aesthetic
- **Headings & Names**: Refined serif (`Cinzel`, `Cormorant Garamond`, `Playfair Display`, or system serif fallback).
- **Body & Labels**: Clean, accessible sans-serif (`Inter`, `Montserrat`, `system-ui`).
- **Motifs**: Restrained floral flourishes (baby's breath, white roses, hydrangeas, eucalyptus), subtle church arches, fine cross/dove accents. Avoid visual clutter and cultural stereotypes.

---

## Approved Invitation Copy
Preserve the exact names and family relationship from the family-approved copy:

> Join us for an evening of joy, celebration, and dinner as we celebrate the Grand Wedding Reception of our children, Nihal & Serene.
>
> We look forward to raising a toast, sharing memories, and celebrating this special evening together with you.
>
> Please scroll down to explore the reception details and venue information.
>
> With warm regards and excitement,  
> Julius Ruben & family

*Display Name Note: Hero / headings may use "Nihal & Serene", while preserving the full text above in the Family Invitation section.*

---

## Page Structure (7 Mandatory Sections)
The site consists of one continuous, responsive scrolling page:
1. **Section 1: Invitation Cover**
   - CSS 3D envelope with animated flap and wax seal tap-to-open interaction.
   - Clear open control with a smooth path into the content.
2. **Section 2: Hero — Meet the Couple**
   - Couple display names and subtitle "Grand Wedding Reception".
   - Sacred verse (*Matthew 18:19*: "He prayed for her, she prayed for him and God smiled knowing that their names are already written next to each other.").
   - Ceremony floral arch inspiration framing.
3. **Section 3: Family Invitation**
   - Full approved invitation wording and host signature ("Julius Ruben & family").
   - Instruction directing guests to scroll down.
4. **Section 4: Reception Details & Guest Guide**
   - Confirmed date, day, start and end times in an elegant floating card.
   - Dynamic countdown timer calculated for `Asia/Kolkata` (hidden if dates are unconfirmed).
   - Guest Attire & Dress Code written in plain language.
5. **Section 5: Venue and Directions**
   - Venue name, address, and optional photo.
   - External Google Maps link button (`Get Directions`).
6. **Section 6: Closing Section**
   - Heartfelt guest love note (*"A Little Note"*).
   - Couple and host names, native Web Share API with clipboard copy fallback, smooth "Back to Top" control.

---

## Centralized Event Configuration Standard
All event data must be centralized in `src/data/weddingConfig.js` to ensure clean separation of content and presentation.
