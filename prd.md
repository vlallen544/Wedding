# Product Requirements Document (PRD)
## Nihal & Serene — Premium Christian Wedding Reception Invitation Website

**Document version:** 1.0  
**Project type:** Static, responsive wedding invitation website  
**Primary deployment:** Vercel  
**Frontend stack:** React + Vite  
**Backend:** None

---

## 1. Project Overview

Build a premium, romantic, mobile-first digital invitation for the Grand Wedding Reception of Nihal and Serene. The experience should feel like opening a beautifully crafted physical wedding invitation, combining elegant typography, a pastel-blue palette, tasteful Christian wedding details, and interactive CSS-based 3D effects.

The site must be a complete, production-ready static website. It must not require a backend, database, serverless functions, runtime API dependencies, or API keys.

### Primary goals
- Create an elegant digital wedding invitation with a distinctive 3D opening experience.
- Reflect a Christian wedding in a Kottayam/Kerala context through restrained, tasteful design details.
- Prioritize guests opening the link from WhatsApp on mobile devices.
- Present the invitation, reception details, venue directions, and couple photographs in a clear scrolling experience.
- Make it easy to replace placeholder photos and enter confirmed event details later.
- Deploy as a static frontend to Vercel.

### Design references
- Use the provided pastel colour palette screenshot, especially the five circled blue shades, as the main colour inspiration.
- Use the provided wedding mood-board PDF for supporting floral, wedding, and decorative inspiration.
- Use the supplied invitation screenshot and text as the content reference.
- An external reference website may be consulted for general context only. Create an original implementation; do not reproduce it pixel-for-pixel.

---

## 2. Audience and User Journey

### Primary audience
Family members, friends, and guests opening the invitation from a shared link, especially on mobile phones.

### Intended journey
1. Guest opens the website.
2. Guest sees an elegant invitation cover.
3. Guest taps **Open Invitation**.
4. The card opens using a polished 3D animation.
5. Guest reads the couple’s names and family invitation message.
6. Guest scrolls to the date, time, and venue details.
7. Guest opens the venue in Google Maps.
8. Guest browses the couple’s photographs and reaches the closing message.

The animation must never prevent guests from reaching the content. Provide a way to skip or bypass the animation.

---

## 3. Design Direction

### 3.1 Colour palette

Use the five circled blue shades as the primary visual reference, with ivory and subtle champagne gold as supporting colours.

Suggested starting tokens (adjust slightly to match the supplied palette screenshot):
- Powder blue: `#C6DCEC`
- Ice blue: `#D8E7EE`
- Cloud blue-grey: `#E7EDF2`
- Warm ivory: `#FAF8F3`
- Champagne gold: `#D8C49A`

Blue should remain the dominant interface colour. Use gold sparingly for fine dividers, small decorative accents, and the invitation seal.

### 3.2 Typography
- Use a refined serif typeface for the couple’s names and major headings.
- Pair it with a readable sans-serif for paragraphs, labels, and event information.
- Maintain good contrast and comfortable line lengths.
- Use reliable fallback fonts if web fonts fail to load.

### 3.3 Visual language
- Luxury editorial wedding invitation, romantic and calm.
- Ivory or pearl-white backgrounds with pale-blue gradients.
- White roses, baby's breath, hydrangeas, and delicate greenery as optional floral motifs.
- Fine borders, subtle paper textures, embossed initials, soft shadows, and restrained decorative flourishes.
- Church-inspired arches and small cross motifs may be used tastefully if appropriate.
- Avoid clutter, overly ornate decoration, stereotyped cultural imagery, and flashy or gaming-like effects.

### 3.4 Christian Kottayam/Kerala context
The regional identity should be reflected through elegant wedding styling, venue photography when supplied, and restrained architectural or Christian motifs—not stereotypes. A line such as “With God’s blessings” may be included only if the family approves it. Do not add unsupported ceremony details or religious wording.

---

## 4. Page Structure

Build one continuous, scrollable page with the following seven sections.

### Section 1 — Invitation Cover
- Full-screen or near-full-screen envelope/card composition.
- Layered envelope, front flap, inner card, and decorative seal.
- Clear **Open Invitation** control.
- CSS 3D flap-opening animation.
- Elegant floral corners or restrained decorative details.
- Provide a clear open control and ensure content remains accessible if animation fails.

### Section 2 — Hero: Meet the Couple
- Display the couple’s names prominently.
- Subtitle: **Grand Wedding Reception**.
- Use a temporary local hero image or elegant placeholder composition until the approved couple photograph is supplied.
- Subtle depth, gentle parallax, and restrained fade-in.
- Do not use random stock photography as if it depicts the real couple.

### Section 3 — Family Invitation
- Present the approved invitation wording.
- Use refined typography, generous spacing, and a restrained Christian-inspired decorative motif.
- Preserve the names and family relationship exactly as approved.

### Section 4 — Reception Details
- Display confirmed date, day, start time, and any confirmed end time.
- Use an elegant floating card or layered paper design.
- Optional countdown, shown only when a valid event date and time have been configured.
- Never fabricate missing event information.

### Section 5 — Venue and Directions
- Show confirmed venue name, address, and an optional venue photograph.
- Provide a **Get Directions** link to the configured Google Maps destination.
- No embedded Maps API or API key is required.
- Hide incomplete details instead of displaying invented or misleading information.

### Section 6 — Couple Gallery
- Responsive image grid or editorial gallery layout.
- Use approved couple/engagement/pre-wedding photographs when supplied.
- Temporary placeholders must be clearly identifiable during development.
- Tap/click opens an accessible lightbox.
- Support close button, Escape key, and previous/next navigation where applicable.
- Lazy-load non-critical gallery images.

### Section 7 — Closing Section
- Thank guests for celebrating with the couple.
- Display couple names and host names.
- Provide a Back to Top control.
- Optional native share action with a copy-link fallback.
- Keep the ending warm, minimal, and visually consistent.

---

## 5. Mandatory 3D and Motion Requirements

The design must implement real interactive effects rather than relying only on shadows.

### 5.1 3D invitation opening
- Use CSS `perspective`, `transform-style: preserve-3d`, and transforms such as `rotateX()`.
- Animate the envelope flap and reveal the inner invitation card.
- Use smooth transitions for card movement and opacity.
- Opening is triggered by an explicit tap/click.
- Animation must not trap the user or delay access to content.

### 5.2 Interactive hero card
- Subtle mouse-responsive tilt on desktop where appropriate.
- Layered typography and decorative elements to create depth.
- Soft, realistic shadows and restrained parallax.
- On touch devices, use a static or lightweight alternative rather than requiring cursor tracking.

### 5.3 Floral motion
- Optional slow-moving petals or decorative floral layers.
- Keep the quantity limited and avoid obstructing text or controls.
- Use lightweight CSS animations and opacity/transforms.

### 5.4 Scroll reveals
- Reveal sections as they enter the viewport.
- Use `IntersectionObserver` and CSS transitions where appropriate.
- Avoid excessive staggered animation or animation of every individual element.

### 5.5 Micro-interactions
- Subtle seal shimmer.
- Gentle button hover lift.
- Fine gold accent transitions.
- Smooth anchor scrolling and polished lightbox transitions.

### 5.6 Performance rule
Prefer CSS-based 3D. Do not use Three.js or React Three Fiber unless a clear visual benefit justifies the additional JavaScript, load time, and mobile GPU cost. The default must be a lightweight, high-quality website.

### 5.7 Reduced motion
Respect `prefers-reduced-motion`. When enabled, disable or simplify parallax, floating petals, tilt, and non-essential transitions while preserving functionality.

---

## 6. Approved Invitation Copy

Use the following supplied invitation wording as the source of truth. Preserve it unless the family explicitly approves edits:

> 🥂 Join us for an evening of joy, celebration, and dinner as we celebrate the Grand Wedding Reception of our children, Nihal & Serene. 🎊✨
>
> We look forward to raising a toast, sharing memories, and celebrating this special evening together with you.
>
> 💌 Please click the link below to view the Reception invitation and scroll down for all the event and venue details.
>
> 🔗 Invitation link to be provided.
>
> With warm regards and excitement,  
> Julius Ruben & family

The design may use the visual heading “Nihal & Serene,” while preserving the names and family relationship in the full invitation copy.

---

## 7. Technical Requirements

### 7.1 Stack
- React + Vite.
- JavaScript or TypeScript; TypeScript is acceptable if implemented cleanly.
- CSS Modules or well-organized CSS.
- Lucide React or lightweight SVG icons if icons are needed.
- CSS animations and browser-native APIs for interaction.
- Static assets stored locally in the project.

### 7.2 Suggested project structure

```text
wedding-invitation/
├── public/
│   ├── images/
│   │   ├── couple-hero.webp
│   │   ├── gallery-01.webp
│   │   └── venue.webp
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── components/
│   │   ├── InvitationCover.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FamilyInvitation.jsx
│   │   ├── EventDetails.jsx
│   │   ├── VenueSection.jsx
│   │   ├── PhotoGallery.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── weddingConfig.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

The agent may adjust this structure if useful, but components, styles, and event configuration must remain maintainable and clearly organized.

### 7.3 Central event configuration
Keep event details in `src/data/weddingConfig.js`, rather than scattering them across components. For example:

```js
export const weddingConfig = {
  couple: {
    firstName: "Nihal",
    secondName: "Serene",
    displayNames: "Nihal & Serene",
    invitationNames: "Nihal & Serene",
  },
  hosts: "Julius Ruben & family",
  event: {
    title: "Grand Wedding Reception",
    date: "",       // YYYY-MM-DD; fill only when confirmed
    startTime: "",  // Confirmed local time
    endTime: "",
    timezone: "Asia/Kolkata",
  },
  venue: {
    name: "",
    address: "",
    mapsUrl: "",
  },
  media: {
    hero: "/images/couple-hero.webp",
    venue: "/images/venue.webp",
    gallery: [],
  },
};
```

This is a local frontend configuration file, not a database. Do not treat the sample paths as evidence that those images already exist. Make missing images safe and easy to replace.

---

## 8. Functional Requirements

- **Invitation opening:** works by tap/click and does not block access to content.
- **Navigation:** accessible links or controls take guests to relevant sections.
- **Countdown:** calculate remaining time using the confirmed date/time and `Asia/Kolkata`; hide it if the required values are missing or invalid.
- **Maps:** open the configured destination using a normal external link; no Maps API key.
- **Gallery:** responsive gallery with accessible lightbox controls.
- **Sharing:** use the Web Share API when available and provide a copy-link fallback. Handle unsupported browsers gracefully.
- **Music (optional):** only if approved, use a properly licensed local instrumental track. Audio must begin only after an explicit user action, with a visible play/pause control.
- **Back to Top:** accessible control with smooth scrolling where supported.
- **Failure handling:** content remains usable if animation, optional assets, or browser APIs fail.

### Explicitly out of scope
- Login or user accounts.
- Admin dashboard.
- Custom RSVP backend or guest-information collection.
- Database.
- Payments.
- Real-time chat or guest list.
- Runtime AI API calls.
- Server-side functions.
- Embedded Google Maps API.

An external RSVP form or `mailto:` link could be considered later, but is not required for this version.

---

## 9. Responsive Design

Mobile is the highest priority because guests will likely open the invitation from WhatsApp.

- **Mobile (320–430 px):** single-column layout, readable names, touch-friendly controls, optimized images, no horizontal scrolling.
- **Tablet (431–1024 px):** adaptive spacing, balanced typography, suitable two-column layouts.
- **Desktop (1025 px and above):** generous whitespace, editorial layouts, subtle mouse-responsive depth effects.
- Support portrait and landscape orientation.
- Respect safe areas and ensure controls are not obscured.
- Keep text legible against pale backgrounds.
- Test at narrow widths and common mobile/desktop viewport sizes.

---

## 10. Performance, Accessibility, and SEO

### Performance
- Aim for Lighthouse Performance 90+ on mobile under reasonable testing conditions; do not treat this as guaranteed.
- Use optimized WebP/AVIF images where suitable and provide explicit dimensions.
- Prioritize the hero image and lazy-load gallery images.
- Avoid unnecessarily large JavaScript libraries and video backgrounds.
- Minimize layout shifts and avoid continuous animation of many elements.

### Accessibility
- Use semantic HTML.
- Support keyboard navigation and visible focus states.
- Give meaningful images appropriate alt text.
- Ensure adequate text contrast.
- Respect reduced-motion preferences.
- Keep core content available if animation fails.
- Ensure the lightbox can be closed using a visible button and Escape key.

### SEO and link previews
- Set a suitable page title and meta description.
- Add Open Graph metadata for WhatsApp and other social link previews.
- Create an appropriate `og-image.jpg` using approved assets; use a temporary design during Phase 1.
- Add a favicon and theme colour.
- Set the final canonical URL only when the production domain is known.
- Avoid misleading metadata or unapproved photographs.

---

## 11. Phased Implementation Strategy — Mandatory

Antigravity MUST work through these phases in order. Do not delay the visual foundation while waiting for final photographs or event details.

### Phase 1 — Build the visual foundation
Build the complete website using the approved pastel-blue visual identity.

Implement:
- React + Vite project.
- Full design system and typography.
- Complete seven-section page.
- Interactive CSS 3D envelope/card opening.
- Hero, family invitation, event details, venue, gallery, and closing section.
- Responsive layouts and all core interactions.
- Accessible behavior and reduced-motion support.
- Clearly identifiable temporary local images or decorative placeholders.

**Completion criterion:** the site looks polished and functions as a complete experience, even before real photographs and event details are added. It must not look like an unfinished wireframe.

### Phase 2 — Polish and test
- Refine the opening animation, depth, shadows, transitions, typography, and spacing.
- Ensure decorative effects never obscure text or controls.
- Test on mobile and desktop.
- Optimize performance and simplify effects on weaker devices.
- Check keyboard accessibility and reduced-motion behavior.
- Remove unnecessary dependencies.
- Run the production build and resolve errors.

**Completion criterion:** the visual foundation is stable, responsive, and polished without depending on real photographs.

### Phase 3 — Personalize
Once approved assets and confirmed details are supplied:
- Replace the hero placeholder with an approved couple photograph.
- Replace gallery placeholders with real couple photographs.
- Add the real venue image if available.
- Enter the confirmed reception date, time, venue name, address, and Maps destination.
- Verify all names and invitation wording with the family.
- Configure and test the countdown.
- Create the final sharing image and update metadata.
- Hide optional elements for which confirmed information is unavailable.

**Completion criterion:** no placeholders, invented event details, or empty event fields appear in the public-facing invitation.

### Phase 4 — Validate and deploy
- Run `npm run build` and resolve all errors.
- Test the invitation animation, navigation, countdown, gallery, Maps link, and share behavior.
- Verify responsiveness, accessibility, images, metadata, and link previews.
- Deploy to Vercel as a static Vite site.
- Verify the production HTTPS URL on mobile and desktop.
- Document setup, commands, configuration, and image replacement instructions in `README.md`.

**Completion criterion:** the production site loads correctly and requires no backend, database, serverless functions, API keys, or runtime services.

### Development discipline
- Inspect the workspace before modifying it.
- Build the actual application, not merely a plan or screenshot.
- Work incrementally and keep the project buildable.
- Complete all seven sections before declaring Phase 1 finished.
- Do not invent photographs or missing wedding details.
- Report completed phases, outstanding assets, known limitations, build status, and deployment status honestly.
- Do not declare the public invitation launch-ready until real information has been validated.

---

## 12. Vercel Deployment

Use the standard Vite static deployment settings:

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |
| Environment variables | None required |

The project must build and run locally before deployment. Do not add a backend or serverless functions to solve problems that can be handled in the static frontend.

---

## 13. Acceptance Criteria

The website is complete only when:
- [ ] The invitation opens with a polished CSS 3D animation.
- [ ] All seven sections are implemented.
- [ ] The approved pastel-blue palette is dominant.
- [ ] Names and invitation wording match the approved copy.
- [ ] 3D effects work on desktop and degrade gracefully on mobile.
- [ ] Event information is centralized in one configuration file.
- [ ] The countdown is accurate or hidden if details are unset.
- [ ] The Maps link opens the configured destination.
- [ ] Gallery lightbox controls work and support keyboard interaction.
- [ ] Reduced-motion and keyboard navigation are supported.
- [ ] No broken images, fake details, or console errors remain.
- [ ] The production build succeeds.
- [ ] WhatsApp link previews use suitable metadata and imagery.
- [ ] Deployment works over HTTPS on Vercel.
- [ ] No backend, database, API keys, or serverless functions are required.

---

## 14. Immediate Execution Instruction

Start Phase 1 immediately.

First inspect the project workspace and attached reference materials. Then build and polish the complete pastel-blue website with CSS-based 3D effects and clearly identified temporary assets. Do not wait for the final photographs or event details.

Do not stop after writing a plan, creating a screenshot, or producing a landing-page mockup. Implement the full application, test it, and provide a concise report of what works and what remains before personalization and deployment.
