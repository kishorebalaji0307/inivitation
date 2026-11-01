/**
 * Essential Wedding Invitation Data
 * Groom: S. Sasidharan
 * Bride: S. Swetha
 * Date: Wednesday, 02nd December 2026
 * Time: 06:30 PM to 09:00 PM
 * Venue: GKS Auditorium, Bharathi Nagar, Coimbatore
 */
export const weddingData = {
  // Couple Information (Essential names only)
  couple: {
    groom: "S. Sasidharan",
    bride: "S. Swetha",
    image: "/images/wedding-couple.jpg",
    heroBackground: "/images/hero-bg-couple.jpg",
    altText: "S. Sasidharan and S. Swetha - Wedding Couple",
  },

  // Event Date & Timings
  event: {
    dayOfWeek: "Wednesday",
    dayNumber: "02",
    month: "December",
    year: "2026",
    monthYear: "December 2026",
    fullDate: "Wednesday, 02nd December 2026",
    
    // Ceremony Timings
    muhurthamTitle: "Wedding Reception & Muhurtham",
    muhurthamTime: "06:30 PM to 09:00 PM",
    muhurthamNote: "Auspicious Celebration & Traditional Feast",

    // Target Countdown (ISO format for countdown calculation)
    countdownTarget: "2026-12-02T18:30:00+05:30",
  },

  // Venue & Location
  venue: {
    name: "GKS Auditorium",
    hall: "Bharathi Nagar, Ganapathy",
    address: "Bharathi Nagar, Ganapathy, Coimbatore, Tamil Nadu – 641006",
    mapUrl: "https://maps.google.com/?q=GKS+Auditorium+Bharathi+Nagar+Ganapathy+Coimbatore",
    embedUrl: "https://www.google.com/maps?q=GKS+Auditorium+Bharathi+Nagar+Ganapathy+Coimbatore&output=embed",
  },

  // Invitation Messages (Clean & elegant English only)
  messages: {
    heroBadge: "Wedding Invitation",
    welcomeTitle: "Auspicious Union",
    welcomeSubtitle: "We cordially invite you to celebrate our wedding.",
    invitationLetter:
      "We warmly invite you to join us on our special day as we begin our new journey together. Your gracious presence and heartfelt blessings will make our wedding celebration truly memorable.",
    closingHeading: "We warmly invite you to be part of our special day.",
    closingSubtext: "Your presence and blessings mean the world to us.",
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
