import { Product, Category, Reel, Banner, Coupon } from "@/types";

export const MOCK_CATEGORIES: Category[] = [
  {
    "id": "cat-5-sleeve",
    "name": "5-Sleeve",
    "slug": "5-sleeve",
    "image_url": "/images/5-sleeve/1.jpeg",
    "sort_order": 1,
    "is_active": true,
    "item_count": 23
  },
  {
    "id": "cat-hoodies",
    "name": "Hoodies",
    "slug": "hoodies",
    "image_url": "/images/Hoodies/1-1199.jpeg",
    "sort_order": 2,
    "is_active": true,
    "item_count": 9
  },
  {
    "id": "cat-pants",
    "name": "Pants",
    "slug": "pants",
    "image_url": "/images/pants/1-1149.jpeg",
    "sort_order": 3,
    "is_active": true,
    "item_count": 6
  },
  {
    "id": "cat-shirts",
    "name": "Shirts",
    "slug": "shirts",
    "image_url": "/images/shirts/1-1199.jpeg",
    "sort_order": 4,
    "is_active": true,
    "item_count": 3
  },
  {
    "id": "cat-sale",
    "name": "Sale",
    "slug": "sale",
    "image_url": "/images/5-sleeve/5-799.jpeg",
    "sort_order": 5,
    "is_active": true,
    "item_count": 10
  }
];

export const MOCK_PRODUCTS: Product[] = [
{
  "id": "prod-sleeve-01",
  "name": "Boxy Heavyweight 5-Sleeve Tee",
  "slug": "5-sleeve-tee-01",
  "description": "Boxy Heavyweight 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 849,
  "compare_at_price": 1399,
  "discount_percent": 39,
  "tags": [
    "Heavyweight • Black",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": true,
  "is_new": true,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-01T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-01-1",
      "url": "/images/5-sleeve/1.jpeg",
      "alt": "Boxy Heavyweight 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-01-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-01-S",
      "stock": 12
    },
    {
      "id": "var-slv-01-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-01-M",
      "stock": 24
    },
    {
      "id": "var-slv-01-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-01-L",
      "stock": 18
    },
    {
      "id": "var-slv-01-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-01-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-02",
  "name": "Drop-Shoulder 5-Sleeve Tee",
  "slug": "5-sleeve-tee-02",
  "description": "Drop-Shoulder 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 849,
  "compare_at_price": 1399,
  "discount_percent": 39,
  "tags": [
    "Drop Shoulder • Off-White",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": true,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-02T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-02-1",
      "url": "/images/5-sleeve/2.jpeg",
      "alt": "Drop-Shoulder 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-02-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-02-S",
      "stock": 12
    },
    {
      "id": "var-slv-02-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-02-M",
      "stock": 24
    },
    {
      "id": "var-slv-02-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-02-L",
      "stock": 18
    },
    {
      "id": "var-slv-02-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-02-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-03",
  "name": "Heavyweight Carbon 5-Sleeve Tee",
  "slug": "5-sleeve-tee-03",
  "description": "Heavyweight Carbon 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 849,
  "compare_at_price": 1399,
  "discount_percent": 39,
  "tags": [
    "280 GSM • Carbon",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": true,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-03T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-03-1",
      "url": "/images/5-sleeve/3(849).jpeg",
      "alt": "Heavyweight Carbon 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-03-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-03-S",
      "stock": 12
    },
    {
      "id": "var-slv-03-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-03-M",
      "stock": 24
    },
    {
      "id": "var-slv-03-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-03-L",
      "stock": 18
    },
    {
      "id": "var-slv-03-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-03-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-04",
  "name": "Acid Stonewash 5-Sleeve Tee",
  "slug": "5-sleeve-tee-04",
  "description": "Acid Stonewash 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 849,
  "compare_at_price": 1399,
  "discount_percent": 39,
  "tags": [
    "Acid Wash • Grey",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": true,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-04T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-04-1",
      "url": "/images/5-sleeve/4-849.jpeg",
      "alt": "Acid Stonewash 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-04-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-04-S",
      "stock": 12
    },
    {
      "id": "var-slv-04-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-04-M",
      "stock": 24
    },
    {
      "id": "var-slv-04-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-04-L",
      "stock": 18
    },
    {
      "id": "var-slv-04-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-04-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-05",
  "name": "Minimalist Core 5-Sleeve Tee",
  "slug": "5-sleeve-tee-05",
  "description": "Minimalist Core 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 799,
  "compare_at_price": 1399,
  "discount_percent": 43,
  "tags": [
    "Essential • Chalk",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-05T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-05-1",
      "url": "/images/5-sleeve/5-799.jpeg",
      "alt": "Minimalist Core 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-05-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-05-S",
      "stock": 12
    },
    {
      "id": "var-slv-05-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-05-M",
      "stock": 24
    },
    {
      "id": "var-slv-05-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-05-L",
      "stock": 18
    },
    {
      "id": "var-slv-05-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-05-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-06",
  "name": "Streetwear Heavyweight Tee",
  "slug": "5-sleeve-tee-06",
  "description": "Streetwear Heavyweight Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 849,
  "compare_at_price": 1399,
  "discount_percent": 39,
  "tags": [
    "Street Cut • Olive",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-06T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-06-1",
      "url": "/images/5-sleeve/6-849.jpeg",
      "alt": "Streetwear Heavyweight Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-06-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-06-S",
      "stock": 12
    },
    {
      "id": "var-slv-06-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-06-M",
      "stock": 24
    },
    {
      "id": "var-slv-06-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-06-L",
      "stock": 18
    },
    {
      "id": "var-slv-06-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-06-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-07",
  "name": "Raw Seam Studio 5-Sleeve Tee",
  "slug": "5-sleeve-tee-07",
  "description": "Raw Seam Studio 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 849,
  "compare_at_price": 1399,
  "discount_percent": 39,
  "tags": [
    "Raw Edge • Taupe",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-07T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-07-1",
      "url": "/images/5-sleeve/7-849.jpeg",
      "alt": "Raw Seam Studio 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-07-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-07-S",
      "stock": 12
    },
    {
      "id": "var-slv-07-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-07-M",
      "stock": 24
    },
    {
      "id": "var-slv-07-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-07-L",
      "stock": 18
    },
    {
      "id": "var-slv-07-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-07-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-08",
  "name": "Washed Carbon 5-Sleeve Tee",
  "slug": "5-sleeve-tee-08",
  "description": "Washed Carbon 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 849,
  "compare_at_price": 1399,
  "discount_percent": 39,
  "tags": [
    "Washed • Charcoal",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-08T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-08-1",
      "url": "/images/5-sleeve/8-849.jpeg",
      "alt": "Washed Carbon 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-08-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-08-S",
      "stock": 12
    },
    {
      "id": "var-slv-08-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-08-M",
      "stock": 24
    },
    {
      "id": "var-slv-08-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-08-L",
      "stock": 18
    },
    {
      "id": "var-slv-08-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-08-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-09",
  "name": "Archive Graphic 5-Sleeve Tee",
  "slug": "5-sleeve-tee-09",
  "description": "Archive Graphic 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 949,
  "compare_at_price": 1599,
  "discount_percent": 41,
  "tags": [
    "Graphic • Vintage",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-01T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-09-1",
      "url": "/images/5-sleeve/9-949.jpeg",
      "alt": "Archive Graphic 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-09-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-09-S",
      "stock": 12
    },
    {
      "id": "var-slv-09-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-09-M",
      "stock": 24
    },
    {
      "id": "var-slv-09-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-09-L",
      "stock": 18
    },
    {
      "id": "var-slv-09-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-09-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-10",
  "name": "Vintage Drape 5-Sleeve Tee",
  "slug": "5-sleeve-tee-10",
  "description": "Vintage Drape 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 949,
  "compare_at_price": 1599,
  "discount_percent": 41,
  "tags": [
    "Drape Cut • Cream",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-02T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-10-1",
      "url": "/images/5-sleeve/10-949.jpeg",
      "alt": "Vintage Drape 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-10-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-10-S",
      "stock": 12
    },
    {
      "id": "var-slv-10-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-10-M",
      "stock": 24
    },
    {
      "id": "var-slv-10-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-10-L",
      "stock": 18
    },
    {
      "id": "var-slv-10-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-10-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-11",
  "name": "Heavy French Terry Tee",
  "slug": "5-sleeve-tee-11",
  "description": "Heavy French Terry Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 949,
  "compare_at_price": 1599,
  "discount_percent": 41,
  "tags": [
    "French Terry • Black",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-03T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-11-1",
      "url": "/images/5-sleeve/11-949.jpeg",
      "alt": "Heavy French Terry Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-11-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-11-S",
      "stock": 12
    },
    {
      "id": "var-slv-11-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-11-M",
      "stock": 24
    },
    {
      "id": "var-slv-11-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-11-L",
      "stock": 18
    },
    {
      "id": "var-slv-11-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-11-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-12",
  "name": "Relaxed Studio 5-Sleeve Tee",
  "slug": "5-sleeve-tee-12",
  "description": "Relaxed Studio 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Studio Fit • Mocha",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-04T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-12-1",
      "url": "/images/5-sleeve/12-899.jpeg",
      "alt": "Relaxed Studio 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-12-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-12-S",
      "stock": 12
    },
    {
      "id": "var-slv-12-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-12-M",
      "stock": 24
    },
    {
      "id": "var-slv-12-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-12-L",
      "stock": 18
    },
    {
      "id": "var-slv-12-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-12-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-13",
  "name": "Chalk White 5-Sleeve Tee",
  "slug": "5-sleeve-tee-13",
  "description": "Chalk White 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Pure Chalk • White",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-05T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-13-1",
      "url": "/images/5-sleeve/13-899.jpeg",
      "alt": "Chalk White 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-13-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-13-S",
      "stock": 12
    },
    {
      "id": "var-slv-13-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-13-M",
      "stock": 24
    },
    {
      "id": "var-slv-13-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-13-L",
      "stock": 18
    },
    {
      "id": "var-slv-13-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-13-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-14",
  "name": "Pitch Black 5-Sleeve Tee",
  "slug": "5-sleeve-tee-14",
  "description": "Pitch Black 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Pitch Black • Onyx",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-06T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-14-1",
      "url": "/images/5-sleeve/14-899.jpeg",
      "alt": "Pitch Black 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-14-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-14-S",
      "stock": 12
    },
    {
      "id": "var-slv-14-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-14-M",
      "stock": 24
    },
    {
      "id": "var-slv-14-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-14-L",
      "stock": 18
    },
    {
      "id": "var-slv-14-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-14-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-15",
  "name": "Ash Grey 5-Sleeve Tee",
  "slug": "5-sleeve-tee-15",
  "description": "Ash Grey 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Ash Tone • Heather",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-07T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-15-1",
      "url": "/images/5-sleeve/15-8999.jpeg",
      "alt": "Ash Grey 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-15-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-15-S",
      "stock": 12
    },
    {
      "id": "var-slv-15-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-15-M",
      "stock": 24
    },
    {
      "id": "var-slv-15-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-15-L",
      "stock": 18
    },
    {
      "id": "var-slv-15-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-15-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-16",
  "name": "Crimson Red 5-Sleeve Tee",
  "slug": "5-sleeve-tee-16",
  "description": "Crimson Red 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Crimson • Red",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-08T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-16-1",
      "url": "/images/5-sleeve/16-899.jpeg",
      "alt": "Crimson Red 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-16-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-16-S",
      "stock": 12
    },
    {
      "id": "var-slv-16-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-16-M",
      "stock": 24
    },
    {
      "id": "var-slv-16-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-16-L",
      "stock": 18
    },
    {
      "id": "var-slv-16-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-16-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-17",
  "name": "Mocha Brown 5-Sleeve Tee",
  "slug": "5-sleeve-tee-17",
  "description": "Mocha Brown 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Earth Tone • Brown",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-01T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-17-1",
      "url": "/images/5-sleeve/17-899.jpeg",
      "alt": "Mocha Brown 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-17-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-17-S",
      "stock": 12
    },
    {
      "id": "var-slv-17-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-17-M",
      "stock": 24
    },
    {
      "id": "var-slv-17-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-17-L",
      "stock": 18
    },
    {
      "id": "var-slv-17-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-17-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-18",
  "name": "Dual Tone 5-Sleeve Tee",
  "slug": "5-sleeve-tee-18",
  "description": "Dual Tone 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Dual Tone • Sand",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-02T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-18-1",
      "url": "/images/5-sleeve/18.1-899.jpeg",
      "alt": "Dual Tone 5-Sleeve Tee View 1",
      "sort_order": 1
    },
    {
      "id": "img-sleeve-18-2",
      "url": "/images/5-sleeve/18.2-899.jpeg",
      "alt": "Dual Tone 5-Sleeve Tee View 2",
      "sort_order": 2
    }
  ],
  "variants": [
    {
      "id": "var-slv-18-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-18-S",
      "stock": 12
    },
    {
      "id": "var-slv-18-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-18-M",
      "stock": 24
    },
    {
      "id": "var-slv-18-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-18-L",
      "stock": 18
    },
    {
      "id": "var-slv-18-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-18-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-19",
  "name": "Essential Washed Tee",
  "slug": "5-sleeve-tee-19",
  "description": "Essential Washed Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Essential • Slate",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-03T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-19-1",
      "url": "/images/5-sleeve/19.1-899.jpeg",
      "alt": "Essential Washed Tee View 1",
      "sort_order": 1
    },
    {
      "id": "img-sleeve-19-2",
      "url": "/images/5-sleeve/19.2.jpeg",
      "alt": "Essential Washed Tee View 2",
      "sort_order": 2
    }
  ],
  "variants": [
    {
      "id": "var-slv-19-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-19-S",
      "stock": 12
    },
    {
      "id": "var-slv-19-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-19-M",
      "stock": 24
    },
    {
      "id": "var-slv-19-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-19-L",
      "stock": 18
    },
    {
      "id": "var-slv-19-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-19-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-20",
  "name": "Architectural Drape Tee",
  "slug": "5-sleeve-tee-20",
  "description": "Architectural Drape Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Architectural • Bone",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-04T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-20-1",
      "url": "/images/5-sleeve/20.1-899.jpeg",
      "alt": "Architectural Drape Tee View 1",
      "sort_order": 1
    },
    {
      "id": "img-sleeve-20-2",
      "url": "/images/5-sleeve/20.2.jpeg",
      "alt": "Architectural Drape Tee View 2",
      "sort_order": 2
    }
  ],
  "variants": [
    {
      "id": "var-slv-20-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-20-S",
      "stock": 12
    },
    {
      "id": "var-slv-20-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-20-M",
      "stock": 24
    },
    {
      "id": "var-slv-20-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-20-L",
      "stock": 18
    },
    {
      "id": "var-slv-20-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-20-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-21",
  "name": "Cyber Core 5-Sleeve Tee",
  "slug": "5-sleeve-tee-21",
  "description": "Cyber Core 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Cyber Core • Carbon",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-05T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-21-1",
      "url": "/images/5-sleeve/21-899.jpeg",
      "alt": "Cyber Core 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-21-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-21-S",
      "stock": 12
    },
    {
      "id": "var-slv-21-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-21-M",
      "stock": 24
    },
    {
      "id": "var-slv-21-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-21-L",
      "stock": 18
    },
    {
      "id": "var-slv-21-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-21-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-22",
  "name": "Washed Olive 5-Sleeve Tee",
  "slug": "5-sleeve-tee-22",
  "description": "Washed Olive 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Military • Olive",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-06T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-22-1",
      "url": "/images/5-sleeve/22-899.jpeg",
      "alt": "Washed Olive 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-22-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-22-S",
      "stock": 12
    },
    {
      "id": "var-slv-22-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-22-M",
      "stock": 24
    },
    {
      "id": "var-slv-22-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-22-L",
      "stock": 18
    },
    {
      "id": "var-slv-22-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-22-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-sleeve-23",
  "name": "Desert Sand 5-Sleeve Tee",
  "slug": "5-sleeve-tee-23",
  "description": "Desert Sand 5-Sleeve Tee crafted with high-density combed jersey cotton. Boxy drop-shoulder silhouette cut with everyday relaxed drape.",
  "fabric": "100% Super Combed 260-280 GSM Cotton. Pre-shrunk & bio-washed.",
  "care": "Machine wash cold with like colors. Line dry in shade.",
  "category_id": "cat-5-sleeve",
  "price": 899,
  "compare_at_price": 1499,
  "discount_percent": 40,
  "tags": [
    "Desert • Sand",
    "5-sleeve",
    "heavyweight",
    "oversized"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-07T10:00:00Z",
  "images": [
    {
      "id": "img-sleeve-23-1",
      "url": "/images/5-sleeve/23-899.jpeg",
      "alt": "Desert Sand 5-Sleeve Tee",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-slv-23-s",
      "size": "S",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-23-S",
      "stock": 12
    },
    {
      "id": "var-slv-23-m",
      "size": "M",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-23-M",
      "stock": 24
    },
    {
      "id": "var-slv-23-l",
      "size": "L",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-23-L",
      "stock": 18
    },
    {
      "id": "var-slv-23-xl",
      "size": "XL",
      "color": "Studio Tone",
      "color_hex": "#1F1F1F",
      "sku": "SLV-23-XL",
      "stock": 8
    }
  ]
,
  category: MOCK_CATEGORIES[0],
},
{
  "id": "prod-hoodie-01",
  "name": "Stylish Heavyweight Hoodie",
  "slug": "heavyweight-hoodie-01",
  "description": "Stylish Heavyweight Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Fleece 400 GSM • Black",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": true,
  "is_new": false,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-01T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-01-1",
      "url": "/images/Hoodies/1-1199.jpeg",
      "alt": "Stylish Heavyweight Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-01-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-01-S",
      "stock": 10
    },
    {
      "id": "var-hd-01-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-01-M",
      "stock": 20
    },
    {
      "id": "var-hd-01-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-01-L",
      "stock": 15
    },
    {
      "id": "var-hd-01-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-01-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-hoodie-02",
  "name": "Drop-Shoulder Boxy Hoodie",
  "slug": "heavyweight-hoodie-02",
  "description": "Drop-Shoulder Boxy Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Boxy Cut • Charcoal",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": true,
  "is_new": true,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-02T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-02-1",
      "url": "/images/Hoodies/2-1199.jpeg",
      "alt": "Drop-Shoulder Boxy Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-02-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-02-S",
      "stock": 10
    },
    {
      "id": "var-hd-02-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-02-M",
      "stock": 20
    },
    {
      "id": "var-hd-02-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-02-L",
      "stock": 15
    },
    {
      "id": "var-hd-02-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-02-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-hoodie-03",
  "name": "Vintage Washed Hoodie",
  "slug": "heavyweight-hoodie-03",
  "description": "Vintage Washed Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Acid Wash • Grey",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": true,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-03T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-03-1",
      "url": "/images/Hoodies/3-1199.jpeg",
      "alt": "Vintage Washed Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-03-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-03-S",
      "stock": 10
    },
    {
      "id": "var-hd-03-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-03-M",
      "stock": 20
    },
    {
      "id": "var-hd-03-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-03-L",
      "stock": 15
    },
    {
      "id": "var-hd-03-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-03-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-hoodie-04",
  "name": "Minimalist Oversized Hoodie",
  "slug": "heavyweight-hoodie-04",
  "description": "Minimalist Oversized Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Relaxed Fit • Olive",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-04T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-04-1",
      "url": "/images/Hoodies/4-1199.jpeg",
      "alt": "Minimalist Oversized Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-04-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-04-S",
      "stock": 10
    },
    {
      "id": "var-hd-04-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-04-M",
      "stock": 20
    },
    {
      "id": "var-hd-04-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-04-L",
      "stock": 15
    },
    {
      "id": "var-hd-04-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-04-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-hoodie-05",
  "name": "Street Boxy Fleece Hoodie",
  "slug": "heavyweight-hoodie-05",
  "description": "Street Boxy Fleece Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Fleece • Sand",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-05T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-05-1",
      "url": "/images/Hoodies/5-1199.jpeg",
      "alt": "Street Boxy Fleece Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-05-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-05-S",
      "stock": 10
    },
    {
      "id": "var-hd-05-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-05-M",
      "stock": 20
    },
    {
      "id": "var-hd-05-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-05-L",
      "stock": 15
    },
    {
      "id": "var-hd-05-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-05-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-hoodie-06",
  "name": "Raw Edge French Terry Hoodie",
  "slug": "heavyweight-hoodie-06",
  "description": "Raw Edge French Terry Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Raw Seam • Ink",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-06T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-06-1",
      "url": "/images/Hoodies/6-1199.jpeg",
      "alt": "Raw Edge French Terry Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-06-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-06-S",
      "stock": 10
    },
    {
      "id": "var-hd-06-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-06-M",
      "stock": 20
    },
    {
      "id": "var-hd-06-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-06-L",
      "stock": 15
    },
    {
      "id": "var-hd-06-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-06-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-hoodie-07",
  "name": "Architectural Drape Hoodie",
  "slug": "heavyweight-hoodie-07",
  "description": "Architectural Drape Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Heavy Drape • Ash",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-07T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-07-1",
      "url": "/images/Hoodies/7-1199.jpeg",
      "alt": "Architectural Drape Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-07-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-07-S",
      "stock": 10
    },
    {
      "id": "var-hd-07-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-07-M",
      "stock": 20
    },
    {
      "id": "var-hd-07-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-07-L",
      "stock": 15
    },
    {
      "id": "var-hd-07-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-07-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-hoodie-08",
  "name": "Acid Stonewash Hoodie",
  "slug": "heavyweight-hoodie-08",
  "description": "Acid Stonewash Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Stonewash • Navy",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-08T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-08-1",
      "url": "/images/Hoodies/8-1199.jpeg",
      "alt": "Acid Stonewash Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-08-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-08-S",
      "stock": 10
    },
    {
      "id": "var-hd-08-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-08-M",
      "stock": 20
    },
    {
      "id": "var-hd-08-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-08-L",
      "stock": 15
    },
    {
      "id": "var-hd-08-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-08-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-hoodie-10",
  "name": "Stealth Charcoal Hoodie",
  "slug": "heavyweight-hoodie-10",
  "description": "Stealth Charcoal Hoodie cut from custom 400 GSM brushed fleece. Double-layered structured hood with dropped shoulders and ribbed hem.",
  "fabric": "400 GSM 100% Combed Heavyweight Fleece Cotton.",
  "care": "Cold gentle wash. Lay flat to dry.",
  "category_id": "cat-hoodies",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Stealth Cut • Pitch",
    "hoodie",
    "fleece",
    "winter"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-01T10:00:00Z",
  "images": [
    {
      "id": "img-hoodie-10-1",
      "url": "/images/Hoodies/10-1199.jpeg",
      "alt": "Stealth Charcoal Hoodie",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-hd-10-s",
      "size": "S",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-10-S",
      "stock": 10
    },
    {
      "id": "var-hd-10-m",
      "size": "M",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-10-M",
      "stock": 20
    },
    {
      "id": "var-hd-10-l",
      "size": "L",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-10-L",
      "stock": 15
    },
    {
      "id": "var-hd-10-xl",
      "size": "XL",
      "color": "Vintage Tone",
      "color_hex": "#222222",
      "sku": "HD-10-XL",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[1],
},
{
  "id": "prod-pant-01",
  "name": "Tactical Multi-Pocket Cargo",
  "slug": "tactical-pants-01",
  "description": "Tactical Multi-Pocket Cargo designed with volume darts, multi-functional pockets and relaxed wide puddle hem for street aesthetics.",
  "fabric": "High-density Cotton Twill with reinforced ripstop knee panels.",
  "care": "Machine wash cold. Hang to dry.",
  "category_id": "cat-pants",
  "price": 1149,
  "compare_at_price": 1999,
  "discount_percent": 43,
  "tags": [
    "Ripstop Cotton • Olive",
    "pants",
    "cargo",
    "tactical"
  ],
  "is_featured": true,
  "is_new": true,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-01T10:00:00Z",
  "images": [
    {
      "id": "img-pant-01-1",
      "url": "/images/pants/1-1149.jpeg",
      "alt": "Tactical Multi-Pocket Cargo",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-pnt-01-30",
      "size": "30",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-01-30",
      "stock": 8
    },
    {
      "id": "var-pnt-01-32",
      "size": "32",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-01-32",
      "stock": 16
    },
    {
      "id": "var-pnt-01-34",
      "size": "34",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-01-34",
      "stock": 14
    },
    {
      "id": "var-pnt-01-36",
      "size": "36",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-01-36",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[2],
},
{
  "id": "prod-pant-02",
  "name": "Relaxed Parachute Cargo",
  "slug": "tactical-pants-02",
  "description": "Relaxed Parachute Cargo designed with volume darts, multi-functional pockets and relaxed wide puddle hem for street aesthetics.",
  "fabric": "High-density Cotton Twill with reinforced ripstop knee panels.",
  "care": "Machine wash cold. Hang to dry.",
  "category_id": "cat-pants",
  "price": 1149,
  "compare_at_price": 1999,
  "discount_percent": 43,
  "tags": [
    "Baggy Cut • Black",
    "pants",
    "cargo",
    "tactical"
  ],
  "is_featured": true,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-02T10:00:00Z",
  "images": [
    {
      "id": "img-pant-02-1",
      "url": "/images/pants/2-11499.jpeg",
      "alt": "Relaxed Parachute Cargo",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-pnt-02-30",
      "size": "30",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-02-30",
      "stock": 8
    },
    {
      "id": "var-pnt-02-32",
      "size": "32",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-02-32",
      "stock": 16
    },
    {
      "id": "var-pnt-02-34",
      "size": "34",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-02-34",
      "stock": 14
    },
    {
      "id": "var-pnt-02-36",
      "size": "36",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-02-36",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[2],
},
{
  "id": "prod-pant-03",
  "name": "Wide-Leg Utility Cargo",
  "slug": "tactical-pants-03",
  "description": "Wide-Leg Utility Cargo designed with volume darts, multi-functional pockets and relaxed wide puddle hem for street aesthetics.",
  "fabric": "High-density Cotton Twill with reinforced ripstop knee panels.",
  "care": "Machine wash cold. Hang to dry.",
  "category_id": "cat-pants",
  "price": 1149,
  "compare_at_price": 1999,
  "discount_percent": 43,
  "tags": [
    "Wide Leg • Grey",
    "pants",
    "cargo",
    "tactical"
  ],
  "is_featured": true,
  "is_new": true,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-03T10:00:00Z",
  "images": [
    {
      "id": "img-pant-03-1",
      "url": "/images/pants/3-1149.jpeg",
      "alt": "Wide-Leg Utility Cargo",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-pnt-03-30",
      "size": "30",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-03-30",
      "stock": 8
    },
    {
      "id": "var-pnt-03-32",
      "size": "32",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-03-32",
      "stock": 16
    },
    {
      "id": "var-pnt-03-34",
      "size": "34",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-03-34",
      "stock": 14
    },
    {
      "id": "var-pnt-03-36",
      "size": "36",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-03-36",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[2],
},
{
  "id": "prod-pant-04",
  "name": "Baggy Street Cargo Pant",
  "slug": "tactical-pants-04",
  "description": "Baggy Street Cargo Pant designed with volume darts, multi-functional pockets and relaxed wide puddle hem for street aesthetics.",
  "fabric": "High-density Cotton Twill with reinforced ripstop knee panels.",
  "care": "Machine wash cold. Hang to dry.",
  "category_id": "cat-pants",
  "price": 1149,
  "compare_at_price": 1999,
  "discount_percent": 43,
  "tags": [
    "Drawcord • Charcoal",
    "pants",
    "cargo",
    "tactical"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-04T10:00:00Z",
  "images": [
    {
      "id": "img-pant-04-1",
      "url": "/images/pants/4-1149.jpeg",
      "alt": "Baggy Street Cargo Pant",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-pnt-04-30",
      "size": "30",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-04-30",
      "stock": 8
    },
    {
      "id": "var-pnt-04-32",
      "size": "32",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-04-32",
      "stock": 16
    },
    {
      "id": "var-pnt-04-34",
      "size": "34",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-04-34",
      "stock": 14
    },
    {
      "id": "var-pnt-04-36",
      "size": "36",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-04-36",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[2],
},
{
  "id": "prod-pant-05",
  "name": "Drawstring Utility Pant",
  "slug": "tactical-pants-05",
  "description": "Drawstring Utility Pant designed with volume darts, multi-functional pockets and relaxed wide puddle hem for street aesthetics.",
  "fabric": "High-density Cotton Twill with reinforced ripstop knee panels.",
  "care": "Machine wash cold. Hang to dry.",
  "category_id": "cat-pants",
  "price": 1149,
  "compare_at_price": 1999,
  "discount_percent": 43,
  "tags": [
    "Streetwear • Sand",
    "pants",
    "cargo",
    "tactical"
  ],
  "is_featured": false,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-05T10:00:00Z",
  "images": [
    {
      "id": "img-pant-05-1",
      "url": "/images/pants/5-1149.jpeg",
      "alt": "Drawstring Utility Pant",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-pnt-05-30",
      "size": "30",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-05-30",
      "stock": 8
    },
    {
      "id": "var-pnt-05-32",
      "size": "32",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-05-32",
      "stock": 16
    },
    {
      "id": "var-pnt-05-34",
      "size": "34",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-05-34",
      "stock": 14
    },
    {
      "id": "var-pnt-05-36",
      "size": "36",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-05-36",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[2],
},
{
  "id": "prod-pant-06",
  "name": "Straight Cut Tactical Pant",
  "slug": "tactical-pants-06",
  "description": "Straight Cut Tactical Pant designed with volume darts, multi-functional pockets and relaxed wide puddle hem for street aesthetics.",
  "fabric": "High-density Cotton Twill with reinforced ripstop knee panels.",
  "care": "Machine wash cold. Hang to dry.",
  "category_id": "cat-pants",
  "price": 1149,
  "compare_at_price": 1999,
  "discount_percent": 43,
  "tags": [
    "Straight Fit • Black",
    "pants",
    "cargo",
    "tactical"
  ],
  "is_featured": false,
  "is_new": false,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-06T10:00:00Z",
  "images": [
    {
      "id": "img-pant-06-1",
      "url": "/images/pants/6-1149.jpeg",
      "alt": "Straight Cut Tactical Pant",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-pnt-06-30",
      "size": "30",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-06-30",
      "stock": 8
    },
    {
      "id": "var-pnt-06-32",
      "size": "32",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-06-32",
      "stock": 16
    },
    {
      "id": "var-pnt-06-34",
      "size": "34",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-06-34",
      "stock": 14
    },
    {
      "id": "var-pnt-06-36",
      "size": "36",
      "color": "Earth Shadow",
      "color_hex": "#3B3D36",
      "sku": "PNT-06-36",
      "stock": 6
    }
  ]
,
  category: MOCK_CATEGORIES[2],
},
{
  "id": "prod-shirt-01",
  "name": "Textured Camp Collar Shirt",
  "slug": "resort-shirt-01",
  "description": "Textured Camp Collar Shirt featuring camp collar, relaxed resort drape, and open weave texture suited for all-day breathability.",
  "fabric": "Pure Flax Linen & Combed Cotton Blend.",
  "care": "Hand wash cold or gentle machine wash.",
  "category_id": "cat-shirts",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Camp Collar • Ecru",
    "shirts",
    "camp-collar",
    "resort"
  ],
  "is_featured": true,
  "is_new": true,
  "is_bestseller": true,
  "is_active": true,
  "created_at": "2026-03-01T10:00:00Z",
  "images": [
    {
      "id": "img-shirt-01-1",
      "url": "/images/shirts/1-1199.jpeg",
      "alt": "Textured Camp Collar Shirt",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-shrt-01-s",
      "size": "S",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-01-S",
      "stock": 8
    },
    {
      "id": "var-shrt-01-m",
      "size": "M",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-01-M",
      "stock": 16
    },
    {
      "id": "var-shrt-01-l",
      "size": "L",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-01-L",
      "stock": 12
    }
  ]
,
  category: MOCK_CATEGORIES[3],
},
{
  "id": "prod-shirt-02",
  "name": "Relaxed Boxy Resort Shirt",
  "slug": "resort-shirt-02",
  "description": "Relaxed Boxy Resort Shirt featuring camp collar, relaxed resort drape, and open weave texture suited for all-day breathability.",
  "fabric": "Pure Flax Linen & Combed Cotton Blend.",
  "care": "Hand wash cold or gentle machine wash.",
  "category_id": "cat-shirts",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Resort Cut • Mocha",
    "shirts",
    "camp-collar",
    "resort"
  ],
  "is_featured": true,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-02T10:00:00Z",
  "images": [
    {
      "id": "img-shirt-02-1",
      "url": "/images/shirts/2-1199.jpeg",
      "alt": "Relaxed Boxy Resort Shirt",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-shrt-02-s",
      "size": "S",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-02-S",
      "stock": 8
    },
    {
      "id": "var-shrt-02-m",
      "size": "M",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-02-M",
      "stock": 16
    },
    {
      "id": "var-shrt-02-l",
      "size": "L",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-02-L",
      "stock": 12
    }
  ]
,
  category: MOCK_CATEGORIES[3],
},
{
  "id": "prod-shirt-03",
  "name": "Open Weave Linen Shirt",
  "slug": "resort-shirt-03",
  "description": "Open Weave Linen Shirt featuring camp collar, relaxed resort drape, and open weave texture suited for all-day breathability.",
  "fabric": "Pure Flax Linen & Combed Cotton Blend.",
  "care": "Hand wash cold or gentle machine wash.",
  "category_id": "cat-shirts",
  "price": 1199,
  "compare_at_price": 2099,
  "discount_percent": 43,
  "tags": [
    "Linen Blend • White",
    "shirts",
    "camp-collar",
    "resort"
  ],
  "is_featured": true,
  "is_new": true,
  "is_bestseller": false,
  "is_active": true,
  "created_at": "2026-03-03T10:00:00Z",
  "images": [
    {
      "id": "img-shirt-03-1",
      "url": "/images/shirts/3-1199.jpeg",
      "alt": "Open Weave Linen Shirt",
      "sort_order": 1
    }
  ],
  "variants": [
    {
      "id": "var-shrt-03-s",
      "size": "S",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-03-S",
      "stock": 8
    },
    {
      "id": "var-shrt-03-m",
      "size": "M",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-03-M",
      "stock": 16
    },
    {
      "id": "var-shrt-03-l",
      "size": "L",
      "color": "Natural Weave",
      "color_hex": "#EAE6DF",
      "sku": "SHR-03-L",
      "stock": 12
    }
  ]
,
  category: MOCK_CATEGORIES[3],
},
];

export const MOCK_REELS: Reel[] = [
  {
    id: "reel-1",
    title: "5-Sleeve Boxy Cut in Motion",
    video_url: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-1230-large.mp4",
    poster_url: "/images/5-sleeve/1.jpeg",
    product_id: "prod-sleeve-01",
    product: MOCK_PRODUCTS[0],
    sort_order: 1,
    is_active: true,
  },
  {
    id: "reel-2",
    title: "Heavyweight Fleece Dropped Flow",
    video_url: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-an-outdoor-photoshoot-39878-large.mp4",
    poster_url: "/images/Hoodies/1-1199.jpeg",
    product_id: "prod-hoodie-01",
    product: MOCK_PRODUCTS[23],
    sort_order: 2,
    is_active: true,
  },
  {
    id: "reel-3",
    title: "Tactical Utility Wide Walk",
    video_url: "https://assets.mixkit.co/videos/preview/mixkit-young-man-walking-down-a-city-street-41556-large.mp4",
    poster_url: "/images/pants/1-1149.jpeg",
    product_id: "prod-pant-01",
    product: MOCK_PRODUCTS[32],
    sort_order: 3,
    is_active: true,
  },
  {
    id: "reel-4",
    title: "Open Weave Camp Resort Fit",
    video_url: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-1230-large.mp4",
    poster_url: "/images/shirts/1-1199.jpeg",
    product_id: "prod-shirt-01",
    product: MOCK_PRODUCTS[38],
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
