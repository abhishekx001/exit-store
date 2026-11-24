/**
 * ==============================================================================
 * BRAND CONFIGURATION (Master Constants)
 * ==============================================================================
 * EXIT STORE — Men's Fashion, AJIO-Style Grid, Light & Aesthetic
 */

export const BRAND_NAME = "EXIT STORE";
export const BRAND_RED = "#E10600";

export const BRAND = {
  name: BRAND_NAME,
  shortName: "EXIT",
  season: "2026",
  tagline: "men's fashion studio",
  
  // Single accent color
  red: BRAND_RED,
  
  // Contact & Socials
  instagramHandle: "@exitstore.in",
  instagramUrl: "https://instagram.com/exitstore.in",
  whatsappNumber: "+919876543210",
  whatsappPrefillMessage: "Hello exit store, I want to inquire about",
  supportEmail: "support@exitstore.in",
  
  // Policies & Shipping
  freeShippingThreshold: 999,
  currencySymbol: "₹",
  currencyCode: "INR",
  codAvailable: true,
  returnWindowDays: 7,
  
  // Theme Tokens
  theme: {
    bg: "#FFFFFF",
    paper: "#F7F6F4",
    tile: "#F2F0EC",
    ink: "#0B0B0B",
    muted: "#8A8A85",
    hair: "#E6E3DE",
    red: BRAND_RED,
    green: "#1E9E5A",
  },
  
  // Announcements
  announcements: [
    "Free delivery over ₹999 · COD available",
    "Drop 2026 Live · Min 40% to 70% Off Deals",
    "Easy 7-day doorstep size exchanges",
  ],
  
  // Quick links
  bioLinks: [
    { title: "Trending Drops", href: "/shop" },
    { title: "T-Shirts & Oversized", href: "/category/oversized-tees" },
    { title: "Shirts & Camp Collars", href: "/category/shirts" },
    { title: "Co-ord Sets", href: "/category/co-ord-sets" },
    { title: "Trousers & Bottoms", href: "/category/trousers" },
    { title: "WhatsApp Order Concierge", href: "https://wa.me/919876543210", external: true },
  ]
};
