/**
 * Centralized Wedding Configuration
 *
 * Source of truth for all wedding invitation data.
 * Updated with authentic visual references, sacred verses, dress code,
 * and floral styling extracted from the Wedding Mood Board.
 */

export const weddingConfig = {
  couple: {
    firstName: "Nihal",
    secondName: "Serene",
    displayNames: "Nihal & Serene",
    invitationNames: "Nihal & Serene",
    monogram: "N & S",
  },

  hosts: "Julius Ruben & family",

  // Approved invitation message as per PRD & updated user requirements
  invitationMessage: {
    greeting: "Join us for an evening of joy, celebration, and dinner as we celebrate the Grand Wedding Reception of our children,",
    coupleNames: "Nihal & Serene",
    paragraph: "We look forward to raising a toast, sharing memories, and celebrating this special evening together with you.",
    actionNote: "Please scroll down to explore the reception details and venue information.",
    // Kept empty until a genuine client invitation link is provided
    referenceUrl: "",
    closing: "With warm regards and excitement,",
    signature: "Julius Ruben & family",
  },

  // Sacred Verse & Theme from the wedding mood board.
  sacredVerse: {
    verse: "Matthew 18:19",
    quote: "He prayed for her, she prayed for him and God smiled knowing that their names are already written next to each other.",
    theme: "The First Chapter of Our Forever",
  },

  // Guest Attire, celebration guidance, and the closing note adapted from
  // the supplied wedding guide references.
  guestGuide: {
    title: "Guest Dress Code",
    styleLabel: "Traditional • Indian • Desi",
    date: "27 December 2026",
    paletteTitle: "Any Pastel Shades",
    paletteSubtitle: "Soft blues, powder tones, ivory, champagne, blush, and sage green",
    ladiesGuidance: "Celebrate in beautiful Kanjivaram and Banarasi sarees, traditional silk sarees, lehengas, or festive ethnic sets. Think elegant hues, soft drapes, intricate weaves, and graceful silhouettes.",
    gentsGuidance: "Choose a traditional kurta with mundu, a kurta with trousers, or an elegant Indo-Western look. A shirt with trousers is welcome too — keep it festive, refined, and comfortable.",
    blessingNote: "Come, dress up, be there, bless us, and have a peaceful, happy evening!",
    vibeTitle: "Dinner, Dancing & Good Memories",
    vibeMessage: "Raise a glass, share a laugh, and make memories with us as we celebrate this new beginning together.",
    careNote: "Please plan a safe ride home, keep a sober driver with you, and drive back carefully.",
    littleNote: {
      title: "A Little Note to Our Guests",
      message: "Your presence at our wedding means the world to us. This little guide is here to help you plan your outfit and make the most of this celebration. Regardless of what is mentioned here, the most important thing is that you feel comfortable, confident, and completely yourself. We can’t wait to celebrate this special day with you — to create beautiful memories and be surrounded by the people we love.",
      signoff: "With so much love,",
      signoffNames: "Nihal & Serene",
    },
  },

  // Event schedule transcribed from the supplied Wedding Mood Board PDF.
  celebrationSchedule: [
    {
      id: "dress-code",
      date: "27 December 2026",
      title: "Dress Code",
      subtitle: "Traditional • Indian • Desi",
      description: "Celebrate in beautiful Kanjivaram and Banarasi sarees, traditional silk sarees, lehengas, festive ethnic sets, elegant kurtas, mundu, or refined Indo-Western looks.",
    },
    {
      id: "pandi-night",
      date: "29 December 2026",
      title: "Pandi Night / Tamil Night",
      subtitle: "Same people. More dancing. Zero sitting still.",
      description: "Games, drinks, dance, and stories we’ll be talking about for years. Wear your favourite colours, add flowers if you feel like it, and come ready for the dance floor.",
      ladies: "Sarees, half-sarees, pattu pavada — bring your favourite colours and whatever lets you dance all night.",
      gentlemen: "Colourful or printed shirts, mundu or dhoti — bring that full-on Tamil cinema hero energy.",
    },
    {
      id: "wedding",
      date: "January 2nd, 2027",
      title: "Nihal & Serene’s Wedding",
      subtitle: "The First Chapter of Our Forever",
      description: "Come, dress up, be there, bless us, and have a peaceful, happy evening in any pastel shade that makes you feel comfortable and confident.",
    },
  ],

  // Floral Inspiration from Mood Board Page 7
  floralThemes: [
    { name: "White Roses", description: "Timeless purity and classic grace" },
    { name: "Baby's Breath", description: "Delicate clouds of romantic texture" },
    { name: "Hydrangea", description: "Soft pastel-blue and ivory abundance" },
    { name: "Sage Green & Eucalyptus", description: "Fresh botanical greenery and calm contrast" },
  ],

  event: {
    title: "Grand Wedding Reception",
    date: "2027-01-02",
    dateFormatted: "January 2nd, 2027",
    day: "Saturday",
    startTime: "", // e.g. "18:30"
    startTimeFormatted: "Evening (Time TBD)",
    endTime: "",
    endTimeFormatted: "",
    timezone: "Asia/Kolkata",
    isDateConfirmed: true,
  },

  venue: {
    name: "Reception Venue (To Be Announced)",
    address: "Kottayam, Kerala, India",
    city: "Kottayam",
    state: "Kerala",
    // Standard Google Maps search URL for Kottayam as placeholder
    mapsUrl: "https://maps.google.com/?q=Kottayam,+Kerala,+India",
    isConfirmed: false,
  },

  media: {
    hero: "/images/mood-board/floral-ceremony-arch.png",
    heroAlt: "Ceremony Arch with White Roses and Pastel Florals — Mood Board Inspiration",
    venue: "/images/venue.svg",
    gallery: [
      {
        id: 1,
        src: "/images/mood-board/floral-ceremony-arch.png",
        alt: "Ceremony Floral Arch",
        caption: "Ceremony Arch & White Florals",
        category: "Floral Decor",
      },
      {
        id: 2,
        src: "/images/mood-board/floral-white-roses.png",
        alt: "White Roses and Hydrangeas",
        caption: "White Roses & Hydrangea Cascade",
        category: "Botanicals",
      },
      {
        id: 3,
        src: "/images/mood-board/floral-babys-breath.png",
        alt: "Romantic Baby's Breath",
        caption: "Baby's Breath & Ethereal Textures",
        category: "Botanicals",
      },
      {
        id: 4,
        src: "/images/mood-board/floral-hydrangea-bouquet.png",
        alt: "Pastel Hydrangea Bouquet",
        caption: "Pastel Hydrangea & Bridal Bouquet",
        category: "Florals",
      },
      {
        id: 5,
        src: "/images/mood-board/floral-reception-backdrop.png",
        alt: "Reception Floral Backdrop",
        caption: "Grand Reception Floral Installation",
        category: "Reception Decor",
      },
      {
        id: 6,
        src: "/images/mood-board/decor-tablescape-candles.png",
        alt: "Ambient Candlelit Tablescape",
        caption: "Candlelit Evening Tablescape",
        category: "Evening Ambiance",
      },
      {
        id: 7,
        src: "/images/mood-board/floral-eucalyptus-sage.png",
        alt: "Eucalyptus and Sage Greenery",
        caption: "Sage Green & Eucalyptus Accents",
        category: "Botanicals",
      },
      {
        id: 8,
        src: "/images/mood-board/attire-pastel-inspiration.png",
        alt: "Pastel Elegance Attire",
        caption: "Pastel Elegance & Editorial Styling",
        category: "Style Inspiration",
      },
      {
        id: 9,
        src: "/images/mood-board/decor-champagne-celebration.png",
        alt: "A Toast to Forever",
        caption: "A Toast to Joy and Celebration",
        category: "Celebration",
      },
    ],
  },
};
