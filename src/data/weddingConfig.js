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
    verse: "Mark 10:9",
    quote: "What therefore God hath joined together, let not man put asunder.",
    theme: "A Sacred Promise",
  },

  // Guest Attire, celebration guidance, and the closing note adapted from
  // the supplied wedding guide references.
  guestGuide: {
    title: "Attire",
    styleLabel: "Any pastel shades",
    paletteTitle: "Colour palette",
    paletteSubtitle: "Soft blues, blush, lavender, sage, ivory, and champagne are all welcome.",
    ladiesGuidance: "Wear whatever makes you feel comfortable, chic and elegant — whatever makes you feel confident and like you.",
    gentsGuidance: "Gents, if you choose to wear a suit or blazer, you're exempt from the colour palette.",
    blessingNote: "Come, dress up, be there, bless us, and have a peaceful, happy evening!",
    vibeTitle: "Drinks & Good Vibes",
    vibeMessage: "Let's drink, dance and make memories!",
    careNote: "Keep a sober driver with you.",
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
