/**
 * Centralized Wedding Invitation Data
 * Groom: S. Sasidharan
 * Bride: S. Swetha
 * Marriage: Sunday, November 29, 2026 | RV Mahal, Manaparai
 * Reception: Wednesday, December 02, 2026 | GKS Auditorium, Coimbatore
 */
export const weddingData = {
  // Couple Information
  couple: {
    groom: "S. Sasidharan",
    bride: "S. Swetha",
    image: "/images/wedding-couple.jpg",
    heroBackground: "/images/hero-bg-couple.jpg",
    altText: "S. Sasidharan and S. Swetha - Wedding Couple",
  },

  // Centralized Events Data: Marriage & Reception
  events: {
    marriage: {
      id: "marriage",
      type: "Marriage",
      title: "The Sacred Marriage (Muhurtham)",
      shortTitle: "Marriage",
      tagline: "Sacred Muhurtham & Vedic Wedding Rites",
      dayOfWeek: "Sunday",
      dayNumber: "29",
      month: "November",
      year: "2026",
      monthYear: "November 2026",
      fullDate: "Sunday, 29th November 2026",
      dateFormatted: "November 29, 2026",
      timing: "9:00 AM – 10:30 AM",
      time: "09:00 AM to 10:30 AM",
      muhurthamTime: "09:00 AM to 10:30 AM",
      note: "Auspicious Muhurtham & Traditional South Indian Feast",
      venueName: "RV Mahal",
      location: "Manaparai",
      hall: "RV Mahal",
      address: "RV Mahal, Dindigul Main Road, Manaparai, Tamil Nadu – 621306",
      mapUrl: "https://maps.google.com/?q=RV+Mahal+Manaparai",
      embedUrl: "https://www.google.com/maps?q=RV+Mahal+Manaparai&output=embed",
    },
    reception: {
      id: "reception",
      type: "Reception",
      title: "Wedding Reception",
      shortTitle: "Reception",
      tagline: "Grand Celebration, Musical Evening & Dinner",
      dayOfWeek: "Wednesday",
      dayNumber: "02",
      month: "December",
      year: "2026",
      monthYear: "December 2026",
      fullDate: "Wednesday, 02nd December 2026",
      dateFormatted: "December 02, 2026",
      timing: "6:30 PM – 9:00 PM",
      time: "06:30 PM to 09:00 PM",
      muhurthamTime: "06:30 PM to 09:00 PM",
      note: "Grand Wedding Reception, Blessings & Royal Dinner",
      venueName: "GKS Auditorium",
      location: "Coimbatore",
      hall: "Bharathi Nagar, Ganapathy",
      address: "GKS Auditorium, Bharathi Nagar, Ganapathy, Coimbatore, Tamil Nadu – 641006",
      mapUrl: "https://maps.google.com/?q=GKS+Auditorium+Bharathi+Nagar+Ganapathy+Coimbatore",
      embedUrl: "https://www.google.com/maps?q=GKS+Auditorium+Bharathi+Nagar+Ganapathy+Coimbatore&output=embed",
    },
  },

  // Primary Event for countdown & quick reference (Marriage - Nov 29, 2026)
  event: {
    dayOfWeek: "Sunday",
    dayNumber: "29",
    month: "November",
    year: "2026",
    monthYear: "November 2026",
    fullDate: "Sunday, 29th November 2026",
    dateFormatted: "November 29, 2026",
    
    // Ceremony Timings for Marriage
    muhurthamTitle: "The Sacred Marriage (Muhurtham)",
    muhurthamTime: "09:00 AM to 10:30 AM",
    muhurthamNote: "Auspicious Muhurtham & Traditional Feast",

    // Target Countdown: Marriage Date (Nov 29, 2026, 9:00 AM IST)
    countdownTarget: "2026-11-29T09:00:00+05:30",

    // Dual Event Summary for Header/Intro
    marriageSummary: "Marriage: Nov 29, 2026 (9:00 AM – 10:30 AM) • RV Mahal, Manaparai",
    receptionSummary: "Reception: Dec 02, 2026 (6:30 PM – 9:00 PM) • GKS Auditorium, Coimbatore",
  },

  // Dual Venues
  venues: [
    {
      id: "rv-mahal",
      event: "Marriage",
      badge: "Muhurtham Hall",
      date: "Sunday, Nov 29, 2026",
      time: "9:00 AM – 10:30 AM",
      name: "RV Mahal",
      location: "Manaparai",
      hall: "RV Mahal Kalyana Mandapam",
      address: "RV Mahal, Dindigul Main Road, Manaparai, Tamil Nadu – 621306",
      mapUrl: "https://maps.google.com/?q=RV+Mahal+Manaparai",
      embedUrl: "https://www.google.com/maps?q=RV+Mahal+Manaparai&output=embed",
    },
    {
      id: "gks-auditorium",
      event: "Reception",
      badge: "Reception Hall",
      date: "Wednesday, Dec 02, 2026",
      time: "6:30 PM – 9:00 PM",
      name: "GKS Auditorium",
      location: "Coimbatore",
      hall: "Bharathi Nagar, Ganapathy",
      address: "GKS Auditorium, Bharathi Nagar, Ganapathy, Coimbatore, Tamil Nadu – 641006",
      mapUrl: "https://maps.google.com/?q=GKS+Auditorium+Bharathi+Nagar+Ganapathy+Coimbatore",
      embedUrl: "https://www.google.com/maps?q=GKS+Auditorium+Bharathi+Nagar+Ganapathy+Coimbatore&output=embed",
    },
  ],

  // Default venue fallback
  venue: {
    name: "RV Mahal & GKS Auditorium",
    hall: "Manaparai & Coimbatore",
    address: "RV Mahal, Manaparai (Marriage) • GKS Auditorium, Coimbatore (Reception)",
    mapUrl: "https://maps.google.com/?q=RV+Mahal+Manaparai",
    embedUrl: "https://www.google.com/maps?q=RV+Mahal+Manaparai&output=embed",
  },

  // Invitation Messages
  messages: {
    heroBadge: "Royal Wedding Invitation",
    welcomeTitle: "Auspicious Union",
    welcomeSubtitle: "We cordially invite you and your family to celebrate our wedding moments.",
    invitationLetter:
      "With the divine blessings of Almighty and our elders, we warmly invite you to join us on our auspicious wedding celebrations. Your gracious presence and heartfelt blessings will make our special day truly memorable.",
    closingHeading: "We warmly invite you to be part of our special celebration.",
    closingSubtext: "Your gracious presence and blessings mean the world to us.",
  },

  // Gallery Images
  gallery: [
    {
      id: 1,
      title: "Wedding Portrait",
      caption: "Sasidharan & Swetha in Traditional Silk Attire",
      src: "/images/wedding-couple.jpg",
    },
    {
      id: 2,
      title: "The Auspicious Rings",
      caption: "A Sacred Promise of Eternal Love",
      src: "/images/couple-rings.png",
    },
    {
      id: 3,
      title: "Traditional Elegance",
      caption: "Intricate Mehndi & Traditional Wedding Bangles",
      src: "/images/couple-hands.jpg",
    },
    {
      id: 4,
      title: "Joyous Moments",
      caption: "Sasidharan & Swetha Cherishing Their Special Day",
      src: "/images/couple-real.jpg",
    },
  ],
};
