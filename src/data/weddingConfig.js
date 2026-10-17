/**
 * Centralized Wedding Configuration
 *
 * Source of truth for all wedding invitation data.
 * Updated with the wedding details, sacred verse, and written dress code.
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

  // Sacred verse and wedding theme.
  sacredVerse: {
    verse: "Matthew 18:19",
    quote: "He prayed for her, she prayed for him and God smiled knowing that their names are already written next to each other.",
    theme: "The First Chapter of Our Forever",
  },

  // Guest Attire, celebration guidance, and the closing note adapted from
  // the supplied wedding guide references.
  guestGuide: {
    title: "Dress Code",
    styleLabel: "Traditional Indian attire",
    paletteTitle: "Pastel shades",
    paletteSubtitle: "Soft blues, ivory, champagne, blush, and sage green are welcome",
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
    venue: "/images/venue.svg",
  },
};
