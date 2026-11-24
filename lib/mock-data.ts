import { Product, Category, Reel, Banner, Coupon } from "@/types";

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Oversized",
    slug: "oversized-tees",
    image_url: "/images/cat-oversized.jpg",
    sort_order: 1,
    is_active: true,
    item_count: 8,
  },
  {
    id: "cat-2",
    name: "Tees",
    slug: "t-shirts",
    image_url: "/images/cat-tees.jpg",
    sort_order: 2,
    is_active: true,
    item_count: 6,
  },
  {
    id: "cat-3",
    name: "Shirts",
    slug: "shirts",
    image_url: "/images/cat-shirts.jpg",
    sort_order: 3,
    is_active: true,
    item_count: 6,
  },
  {
    id: "cat-4",
    name: "Cargos",
    slug: "trousers",
    image_url: "/images/cat-cargos.jpg",
    sort_order: 4,
    is_active: true,
    item_count: 6,
  },
  {
    id: "cat-5",
    name: "Co-ords",
    slug: "co-ord-sets",
    image_url: "/images/cat-coords.jpg",
    sort_order: 5,
    is_active: true,
    item_count: 4,
  },
  {
    id: "cat-6",
    name: "Jackets",
    slug: "jackets",
    image_url: "/images/cat-jackets.jpg",
    sort_order: 6,
    is_active: true,
    item_count: 4,
  },
  {
    id: "cat-7",
    name: "Hoodies",
    slug: "hoodies",
    image_url: "/images/prod-hoodie-charcoal.jpg",
    sort_order: 7,
    is_active: true,
    item_count: 4,
  },
  {
    id: "cat-8",
    name: "Sale Archive",
    slug: "sale",
    image_url: "/images/prod-acid-drop.jpg",
    sort_order: 8,
    is_active: true,
    item_count: 8,
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Heavyweight Boxy Tee",
    slug: "heavyweight-boxy-t-shirt",
    description: "Boxy oversized fit with dropped shoulders and a high-density 1-inch ribbed crew neck. Designed for an effortless street silhouette with dense 280 GSM combed cotton.",
    fabric: "100% Super Combed Cotton, 280 GSM French Terry jersey. Pre-shrunk and bio-washed.",
    care: "Machine wash cold with like colors. Line dry in shade.",
    category_id: "cat-1",
    price: 799,
    compare_at_price: 1499,
    discount_percent: 47,
    tags: ["Oversized Fit • Carbon", "heavyweight", "boxy", "terry"],
    is_featured: true,
    is_new: true,
    is_bestseller: true,
    is_active: true,
    created_at: "2026-03-01T10:00:00Z",
    images: [
      { id: "img-1-1", url: "/images/pdp-detail-1.jpg", alt: "Heavyweight Boxy Tee Front", sort_order: 1 },
      { id: "img-1-2", url: "/images/pdp-detail-2.jpg", alt: "Heavyweight Boxy Tee Back View", sort_order: 2 },
      { id: "img-1-3", url: "/images/pdp-detail-3.jpg", alt: "Heavyweight Cotton Texture", sort_order: 3 },
      { id: "img-1-4", url: "/images/pdp-detail-4.jpg", alt: "Streetwear Lookbook", sort_order: 4 },
    ],
    variants: [
      { id: "var-1-s", size: "S", color: "Pitch Black", color_hex: "#111111", sku: "BOX-BLK-S", stock: 12 },
      { id: "var-1-m", size: "M", color: "Pitch Black", color_hex: "#111111", sku: "BOX-BLK-M", stock: 24 },
      { id: "var-1-l", size: "L", color: "Pitch Black", color_hex: "#111111", sku: "BOX-BLK-L", stock: 18 },
      { id: "var-1-xl", size: "XL", color: "Pitch Black", color_hex: "#111111", sku: "BOX-BLK-XL", stock: 8 },
    ],
    category: MOCK_CATEGORIES[0],
  },
  {
    id: "prod-2",
    name: "Acid Wash Drop Tee",
    slug: "architectural-dropped-tee",
    description: "Drop shoulder silhouette with subtle acid-wash patina. Tailored with concealed tonal stitching and deep vented hemline for everyday layering.",
    fabric: "260 GSM Dense Organic Cotton with enzyme stonewash treatment.",
    care: "Gentle cold cycle. Do not bleach.",
    category_id: "cat-2",
    price: 899,
    compare_at_price: 1599,
    discount_percent: 44,
    tags: ["Drop Shoulder • Washed", "acid wash", "tee", "drop"],
    is_featured: true,
    is_new: false,
    is_bestseller: true,
    is_active: true,
    created_at: "2026-02-28T10:00:00Z",
    images: [
      { id: "img-2-1", url: "/images/prod-acid-drop.jpg", alt: "Acid Wash Drop Tee", sort_order: 1 },
      { id: "img-2-2", url: "/images/prod-boxy-black.jpg", alt: "Acid Wash Angle", sort_order: 2 },
    ],
    variants: [
      { id: "var-2-m", size: "M", color: "Washed Carbon", color_hex: "#333333", sku: "ACD-WSH-M", stock: 20 },
      { id: "var-2-l", size: "L", color: "Washed Carbon", color_hex: "#333333", sku: "ACD-WSH-L", stock: 25 },
      { id: "var-2-xl", size: "XL", color: "Washed Carbon", color_hex: "#333333", sku: "ACD-WSH-XL", stock: 12 },
    ],
    category: MOCK_CATEGORIES[1],
  },
  {
    id: "prod-3",
    name: "Relaxed Linen Shirt",
    slug: "textured-open-weave-camp-shirt",
    description: "Relaxed resort collar linen-blend shirt with clean French placket. Breathable textured open weave suited for warm evenings.",
    fabric: "Pure Belgian Flax & Combed Cotton Blend",
    care: "Hand wash cold or gentle machine wash.",
    category_id: "cat-3",
    price: 1199,
    compare_at_price: 2199,
    discount_percent: 45,
    tags: ["Boxy Cut • Off-White", "linen", "camp-collar", "resort"],
    is_featured: true,
    is_new: true,
    is_bestseller: true,
    is_active: true,
    created_at: "2026-02-20T10:00:00Z",
    images: [
      { id: "img-3-1", url: "/images/prod-linen-shirt.jpg", alt: "Relaxed Linen Shirt", sort_order: 1 },
      { id: "img-3-2", url: "/images/cat-shirts.jpg", alt: "Linen Shirt Flat", sort_order: 2 },
    ],
    variants: [
      { id: "var-3-s", size: "S", color: "Chalk Ecru", color_hex: "#EFECE6", sku: "LIN-ECR-S", stock: 8 },
      { id: "var-3-m", size: "M", color: "Chalk Ecru", color_hex: "#EFECE6", sku: "LIN-ECR-M", stock: 16 },
      { id: "var-3-l", size: "L", color: "Chalk Ecru", color_hex: "#EFECE6", sku: "LIN-ECR-L", stock: 14 },
    ],
    category: MOCK_CATEGORIES[2],
  },
  {
    id: "prod-4",
    name: "Utility Cargo Pants",
    slug: "wide-leg-double-pleat-trousers",
    description: "Tactical utility cargo trousers with functional deep multi-pockets and relaxed wide puddle hem. Extended tailored waistband with hidden metal tab fastening.",
    fabric: "High-density Cotton Twill with reinforced ripstop knee panels.",
    care: "Machine wash cold. Hang to dry.",
    category_id: "cat-4",
    price: 1499,
    compare_at_price: 2799,
    discount_percent: 46,
    tags: ["Relaxed Fit • Olive", "cargo", "tactical", "utility"],
    is_featured: true,
    is_new: false,
    is_bestseller: true,
    is_active: true,
    created_at: "2026-02-18T10:00:00Z",
    images: [
      { id: "img-4-1", url: "/images/prod-utility-cargo.jpg", alt: "Utility Cargo Pants", sort_order: 1 },
      { id: "img-4-2", url: "/images/cat-cargos.jpg", alt: "Cargo Flat", sort_order: 2 },
    ],
    variants: [
      { id: "var-4-30", size: "30", color: "Army Olive", color_hex: "#4D5443", sku: "CRG-OLV-30", stock: 10 },
      { id: "var-4-32", size: "32", color: "Army Olive", color_hex: "#4D5443", sku: "CRG-OLV-32", stock: 18 },
      { id: "var-4-34", size: "34", color: "Army Olive", color_hex: "#4D5443", sku: "CRG-OLV-34", stock: 12 },
      { id: "var-4-36", size: "36", color: "Army Olive", color_hex: "#4D5443", sku: "CRG-OLV-36", stock: 6 },
    ],
    category: MOCK_CATEGORIES[3],
  },
  {
    id: "prod-5",
    name: "Core Drop Shoulder Tee",
    slug: "raw-cotton-studio-chore-overshirt",
    description: "Everyday heavyweight boxy t-shirt in washed vintage cream. Clean neckline binding with dropped shoulders.",
    fabric: "240 GSM Combed Jersey Cotton",
    care: "Machine wash cold. Line dry.",
    category_id: "cat-1",
    price: 749,
    compare_at_price: 1249,
    discount_percent: 40,
    tags: ["Drop Shoulder • Cream", "cream", "basics"],
    is_featured: true,
    is_new: true,
    is_bestseller: false,
    is_active: true,
    created_at: "2026-03-02T10:00:00Z",
    images: [
      { id: "img-5-1", url: "/images/prod-drop-cream.jpg", alt: "Core Drop Shoulder Tee", sort_order: 1 },
      { id: "img-5-2", url: "/images/cat-tees.jpg", alt: "Tee Flat", sort_order: 2 },
    ],
    variants: [
      { id: "var-5-m", size: "M", color: "Vintage Cream", color_hex: "#F4F1EA", sku: "DRP-CRM-M", stock: 14 },
      { id: "var-5-l", size: "L", color: "Vintage Cream", color_hex: "#F4F1EA", sku: "DRP-CRM-L", stock: 18 },
      { id: "var-5-xl", size: "XL", color: "Vintage Cream", color_hex: "#F4F1EA", sku: "DRP-CRM-XL", stock: 10 },
    ],
    category: MOCK_CATEGORIES[0],
  },
  {
    id: "prod-6",
    name: "Parachute Cargo Pant",
    slug: "belgian-flax-relaxed-linen-pant",
    description: "Relaxed baggy parachute cargo trousers in pitch black with toggle drawcord cuffs and knee dart volume.",
    fabric: "Matte Technical Nylon & Cotton Weave",
    care: "Warm wash. Quick dry.",
    category_id: "cat-4",
    price: 1499,
    compare_at_price: 2499,
    discount_percent: 40,
    tags: ["Baggy Cut • Black", "parachute", "cargo", "black"],
    is_featured: false,
    is_new: false,
    is_bestseller: true,
    is_active: true,
    created_at: "2026-01-20T10:00:00Z",
    images: [
      { id: "img-6-1", url: "/images/prod-parachute-cargo.jpg", alt: "Parachute Cargo Pant", sort_order: 1 },
      { id: "img-6-2", url: "/images/cat-cargos.jpg", alt: "Cargo Flat", sort_order: 2 },
    ],
    variants: [
      { id: "var-6-30", size: "30", color: "Pitch Black", color_hex: "#111111", sku: "PAR-BLK-30", stock: 8 },
      { id: "var-6-32", size: "32", color: "Pitch Black", color_hex: "#111111", sku: "PAR-BLK-32", stock: 15 },
      { id: "var-6-34", size: "34", color: "Pitch Black", color_hex: "#111111", sku: "PAR-BLK-34", stock: 11 },
      { id: "var-6-36", size: "36", color: "Pitch Black", color_hex: "#111111", sku: "PAR-BLK-36", stock: 4 },
    ],
    category: MOCK_CATEGORIES[3],
  },
  {
    id: "prod-7",
    name: "Heavy Fleece Zip Hoodie",
    slug: "minimal-ribbed-daily-vest",
    description: "Architectural 400 GSM heavyweight French Terry zip hoodie with double-layer hood and structured ribbed cuffs.",
    fabric: "400 GSM 100% Combed Heavyweight Fleece",
    care: "Cold gentle wash. Lay flat.",
    category_id: "cat-7",
    price: 1799,
    compare_at_price: 2999,
    discount_percent: 40,
    tags: ["Fleece 400 GSM • Black", "hoodie", "fleece", "outerwear"],
    is_featured: false,
    is_new: true,
    is_bestseller: false,
    is_active: true,
    created_at: "2026-03-05T10:00:00Z",
    images: [
      { id: "img-7-1", url: "/images/prod-hoodie-charcoal.jpg", alt: "Heavy Fleece Zip Hoodie", sort_order: 1 },
      { id: "img-7-2", url: "/images/cat-jackets.jpg", alt: "Hoodie Detail", sort_order: 2 },
    ],
    variants: [
      { id: "var-7-s", size: "S", color: "Vintage Charcoal", color_hex: "#242426", sku: "HOD-CHR-S", stock: 8 },
      { id: "var-7-m", size: "M", color: "Vintage Charcoal", color_hex: "#242426", sku: "HOD-CHR-M", stock: 16 },
      { id: "var-7-l", size: "L", color: "Vintage Charcoal", color_hex: "#242426", sku: "HOD-CHR-L", stock: 12 },
      { id: "var-7-xl", size: "XL", color: "Vintage Charcoal", color_hex: "#242426", sku: "HOD-CHR-XL", stock: 5 },
    ],
    category: MOCK_CATEGORIES[6],
  },
  {
    id: "prod-8",
    name: "Textured Knit Co-ord Set",
    slug: "structured-studio-co-ord-set",
    description: "Two-piece matching relaxed streetwear co-ord set in textured waffle knit beige against soft studio lighting.",
    fabric: "100% Micro-Twill Heavyweight Cotton",
    care: "Gentle machine wash with like colors.",
    category_id: "cat-5",
    price: 1699,
    compare_at_price: 2799,
    discount_percent: 39,
    tags: ["Waffle Knit • Sand", "co-ord", "set", "summer"],
    is_featured: true,
    is_new: true,
    is_bestseller: true,
    is_active: true,
    created_at: "2026-03-04T10:00:00Z",
    images: [
      { id: "img-8-1", url: "/images/cat-coords.jpg", alt: "Textured Knit Co-ord Set", sort_order: 1 },
      { id: "img-8-2", url: "/images/cat-shirts.jpg", alt: "Co-ord Set Angle", sort_order: 2 },
    ],
    variants: [
      { id: "var-8-s", size: "S", color: "Sand Ecru", color_hex: "#D8D2C5", sku: "CRD-SND-S", stock: 7 },
      { id: "var-8-m", size: "M", color: "Sand Ecru", color_hex: "#D8D2C5", sku: "CRD-SND-M", stock: 16 },
      { id: "var-8-l", size: "L", color: "Sand Ecru", color_hex: "#D8D2C5", sku: "CRD-SND-L", stock: 12 },
      { id: "var-8-xl", size: "XL", color: "Sand Ecru", color_hex: "#D8D2C5", sku: "CRD-SND-XL", stock: 4 },
    ],
    category: MOCK_CATEGORIES[4],
  },
];

export const MOCK_REELS: Reel[] = [
  {
    id: "reel-1",
    title: "Heavyweight Boxy Cut in Motion",
    video_url: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-1230-large.mp4",
    poster_url: "/images/pdp-detail-1.jpg",
    product_id: "prod-1",
    product: MOCK_PRODUCTS[0],
    sort_order: 1,
    is_active: true,
  },
  {
    id: "reel-2",
    title: "Textured Weave Natural Flow",
    video_url: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-an-outdoor-photoshoot-39878-large.mp4",
    poster_url: "/images/prod-linen-shirt.jpg",
    product_id: "prod-3",
    product: MOCK_PRODUCTS[2],
    sort_order: 2,
    is_active: true,
  },
  {
    id: "reel-3",
    title: "Double-Pleat Hem Walk",
    video_url: "https://assets.mixkit.co/videos/preview/mixkit-young-man-walking-down-a-city-street-41556-large.mp4",
    poster_url: "/images/prod-utility-cargo.jpg",
    product_id: "prod-4",
    product: MOCK_PRODUCTS[3],
    sort_order: 3,
    is_active: true,
  },
  {
    id: "reel-4",
    title: "Studio Chore Utility Fit",
    video_url: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-1230-large.mp4",
    poster_url: "/images/cat-jackets.jpg",
    product_id: "prod-5",
    product: MOCK_PRODUCTS[4],
    sort_order: 4,
    is_active: true,
  },
];

export const MOCK_COUPONS: Coupon[] = [
  { code: "STUDIO10", type: "percentage", value: 10, min_order: 999, is_active: true },
  { code: "FIRSTDROP", type: "flat", value: 300, min_order: 1999, is_active: true },
];

export function getMockProducts(options?: {
  categorySlug?: string;
  tab?: "bestseller" | "new" | "all";
  sort?: string;
  query?: string;
  limit?: number;
  maxPrice?: number;
}): Product[] {
  let list = [...MOCK_PRODUCTS];

  if (options?.categorySlug && options.categorySlug !== "all") {
    if (options.categorySlug === "sale") {
      list = list.filter((p) => (p.discount_percent || 0) > 0);
    } else if (options.categorySlug === "fresh-arrivals") {
      list = list.filter((p) => p.is_new);
    } else {
      const cat = MOCK_CATEGORIES.find((c) => c.slug === options.categorySlug);
      if (cat) {
        list = list.filter((p) => p.category_id === cat.id);
      }
    }
  }

  if (options?.maxPrice) {
    list = list.filter((p) => p.price <= (options.maxPrice as number));
  }

  if (options?.query) {
    const q = options.query.toLowerCase().trim();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (options?.sort) {
    if (options.sort === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (options.sort === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (options.sort === "discount") {
      list.sort((a, b) => (b.discount_percent || 0) - (a.discount_percent || 0));
    } else if (options.sort === "newest") {
      list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }
  }

  if (options?.limit) {
    list = list.slice(0, options.limit);
  }

  return list;
}

export function getMockProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug);
}
