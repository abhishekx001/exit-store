-- ==============================================================================
-- VEER STUDIOS SEED DATA (Men's Streetwear & Quiet Luxury)
-- ==============================================================================

-- 1. CATEGORIES
INSERT INTO public.categories (id, name, slug, image_url, sort_order, is_active) VALUES
('c1000000-0000-0000-0000-000000000001', 'Oversized Tees', 'oversized-tees', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80', 1, true),
('c1000000-0000-0000-0000-000000000002', 'Co-ord Sets', 'co-ord-sets', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80', 2, true),
('c1000000-0000-0000-0000-000000000003', 'Shirts', 'shirts', 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80', 3, true),
('c1000000-0000-0000-0000-000000000004', 'Trousers & Cargo', 'trousers', 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80', 4, true),
('c1000000-0000-0000-0000-000000000005', 'Linen Pyjamas', 'linen-pyjamas', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', 5, true),
('c1000000-0000-0000-0000-000000000006', 'Jackets & Overshirts', 'jackets', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80', 6, true),
('c1000000-0000-0000-0000-000000000007', 'Kurtas & Modern Ethnic', 'kurtas', 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&q=80', 7, true),
('c1000000-0000-0000-0000-000000000008', 'Sale & Archive', 'sale', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80', 8, true)
ON CONFLICT (slug) DO NOTHING;

-- 2. PRODUCTS
INSERT INTO public.products (id, name, slug, description, fabric, care, category_id, price, compare_at_price, tags, is_featured, is_new, is_bestseller, is_active) VALUES
(
  'p1000000-0000-0000-0000-000000000001',
  'Heavyweight Acid-Lime Oversized Tee',
  'heavyweight-acid-lime-oversized-tee',
  'Crafted from custom 280 GSM combed terry cotton. Featuring dropped shoulders, ribbed mock-neck collar, and subtle raw-edge detailing.',
  '280 GSM 100% French Terry Cotton',
  'Cold wash inside out. Flat dry. Do not iron directly on puff print.',
  'c1000000-0000-0000-0000-000000000001',
  1499,
  2499,
  ARRAY['oversized', 'tee', 'acid lime', 'streetwear', 'heavyweight'],
  true, true, true, true
),
(
  'p1000000-0000-0000-0000-000000000002',
  'Monochrome Boxy Minimalist Tee',
  'monochrome-boxy-minimalist-tee',
  'Pure architectural silhouette. Relaxed chest with structured elbow-grazing sleeves. The staple piece for modern layering.',
  '240 GSM Luxury Organic Cotton',
  'Gentle machine wash with like colors.',
  'c1000000-0000-0000-0000-000000000001',
  1299,
  1999,
  ARRAY['tee', 'minimalist', 'black', 'boxy'],
  true, false, true, true
),
(
  'p1000000-0000-0000-0000-000000000003',
  'Sand Dune Textured Co-ord Set',
  'sand-dune-textured-co-ord-set',
  'Two-piece matching set: open-collar cuban camp shirt and relaxed elasticated trousers with drawstrings in woven waffle cotton.',
  '100% Waffle Weave Breathable Cotton',
  'Dry clean recommended or hand wash cold.',
  'c1000000-0000-0000-0000-000000000002',
  3299,
  4999,
  ARRAY['co-ord', 'resort', 'sand', 'textured'],
  true, true, true, true
),
(
  'p1000000-0000-0000-0000-000000000004',
  'Midnight Raw Silk Resort Shirt',
  'midnight-raw-silk-resort-shirt',
  'Hand-finished fluid silhouette with mother-of-pearl buttons. Subtle lustrous drape tailored for evening high-street outings.',
  'Pure Raw Silk Blend (60% Silk, 40% Viscose)',
  'Dry clean only.',
  'c1000000-0000-0000-0000-000000000003',
  2199,
  3499,
  ARRAY['shirt', 'silk', 'resort', 'evening'],
  true, true, false, true
),
(
  'p1000000-0000-0000-0000-000000000005',
  'Wide-Leg Pleated Tailored Trousers',
  'wide-leg-pleated-tailored-trousers',
  'Double reverse pleats falling into a contemporary wide puddle hem. Extended waistband with hidden metal tab closure.',
  'Tropical Wool & Poly Blend with 4-Way Stretch',
  'Dry clean or cold machine wash with mild detergent.',
  'c1000000-0000-0000-0000-000000000004',
  2499,
  3899,
  ARRAY['trousers', 'pleated', 'tailored', 'wide-leg'],
  false, true, true, true
),
(
  'p1000000-0000-0000-0000-000000000006',
  'Pure Belgian Linen Relaxed Pyjamas',
  'pure-belgian-linen-relaxed-pyjamas',
  'Ultra-soft garment-washed linen with side slash pockets and premium horn-button fly. The zenith of breathable leisure.',
  '100% Pre-Washed Belgian Flax Linen',
  'Warm wash, line dry in shade. Gets softer with every wash.',
  'c1000000-0000-0000-0000-000000000005',
  1899,
  2799,
  ARRAY['linen', 'pyjamas', 'lounge', 'luxury'],
  false, false, true, true
),
(
  'p1000000-0000-0000-0000-000000000007',
  'Tactical Minimalist Work Jacket',
  'tactical-minimalist-work-jacket',
  'Structured chore jacket with dual angular utility chest pockets, gunmetal YKK two-way zipper, and adjustable cuffs.',
  '340 GSM Rugged Canvas Twill',
  'Machine wash cold. Hang to dry.',
  'c1000000-0000-0000-0000-000000000006',
  3799,
  5499,
  ARRAY['jacket', 'workwear', 'tactical', 'outerwear'],
  true, true, false, true
),
(
  'p1000000-0000-0000-0000-000000000008',
  'Architectural Asymmetric Short Kurta',
  'architectural-asymmetric-short-kurta',
  'Modern ethnic reimagined. Diagonal placket, mandarin collar, and vented hem designed to pair effortlessly with denim or trousers.',
  'Slub Cotton & Khadi Blend',
  'Cold gentle wash. Steam iron.',
  'c1000000-0000-0000-0000-000000000007',
  1799,
  2699,
  ARRAY['kurta', 'ethnic', 'asymmetric', 'festive'],
  true, true, true, true
)
ON CONFLICT (slug) DO NOTHING;

-- 3. PRODUCT IMAGES
INSERT INTO public.product_images (product_id, url, alt, sort_order) VALUES
('p1000000-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80', 'Acid Lime Oversized Front Fit', 1),
('p1000000-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80', 'Acid Lime Oversized Back View', 2),
('p1000000-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80', 'Monochrome Boxy Minimalist Tee Front', 1),
('p1000000-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80', 'Monochrome Boxy Angle', 2),
('p1000000-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80', 'Sand Dune Textured Co-ord Set', 1),
('p1000000-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80', 'Midnight Raw Silk Resort Shirt', 1),
('p1000000-0000-0000-0000-000000000005', 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80', 'Wide-Leg Pleated Tailored Trousers', 1),
('p1000000-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', 'Pure Belgian Linen Relaxed Pyjamas', 1),
('p1000000-0000-0000-0000-000000000007', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80', 'Tactical Minimalist Work Jacket', 1),
('p1000000-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&q=80', 'Architectural Asymmetric Short Kurta', 1);

-- 4. PRODUCT VARIANTS (Sizes S, M, L, XL with realistic stock)
INSERT INTO public.product_variants (product_id, size, color, color_hex, sku, stock) VALUES
('p1000000-0000-0000-0000-000000000001', 'S', 'Acid Lime', '#C6FF3D', 'TEE-LIME-S', 12),
('p1000000-0000-0000-0000-000000000001', 'M', 'Acid Lime', '#C6FF3D', 'TEE-LIME-M', 25),
('p1000000-0000-0000-0000-000000000001', 'L', 'Acid Lime', '#C6FF3D', 'TEE-LIME-L', 18),
('p1000000-0000-0000-0000-000000000001', 'XL', 'Acid Lime', '#C6FF3D', 'TEE-LIME-XL', 4),

('p1000000-0000-0000-0000-000000000002', 'S', 'Onyx Black', '#111111', 'TEE-BLK-S', 30),
('p1000000-0000-0000-0000-000000000002', 'M', 'Onyx Black', '#111111', 'TEE-BLK-M', 45),
('p1000000-0000-0000-0000-000000000002', 'L', 'Onyx Black', '#111111', 'TEE-BLK-L', 40),
('p1000000-0000-0000-0000-000000000002', 'XL', 'Onyx Black', '#111111', 'TEE-BLK-XL', 15),

('p1000000-0000-0000-0000-000000000003', 'M', 'Sand Beige', '#D8C3A5', 'CRD-SND-M', 10),
('p1000000-0000-0000-0000-000000000003', 'L', 'Sand Beige', '#D8C3A5', 'CRD-SND-L', 8),

('p1000000-0000-0000-0000-000000000004', 'M', 'Midnight Navy', '#182030', 'SHRT-NAV-M', 14),
('p1000000-0000-0000-0000-000000000004', 'L', 'Midnight Navy', '#182030', 'SHRT-NAV-L', 20),

('p1000000-0000-0000-0000-000000000005', 'M', 'Charcoal Grey', '#2C2D30', 'TRS-CHR-M', 16),
('p1000000-0000-0000-0000-000000000005', 'L', 'Charcoal Grey', '#2C2D30', 'TRS-CHR-L', 12);

-- 5. COUPONS
INSERT INTO public.coupons (code, type, value, min_order, is_active) VALUES
('VEER10', 'percentage', 10, 999, true),
('FIRSTDROP', 'flat', 300, 1999, true),
('FREESHIP', 'flat', 150, 999, true)
ON CONFLICT (code) DO NOTHING;

-- 6. REELS (Watch & Buy)
INSERT INTO public.reels (title, video_url, poster_url, product_id, sort_order, is_active) VALUES
('Drop 04 Acid-Lime Fit Check', 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-1230-large.mp4', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80', 'p1000000-0000-0000-0000-000000000001', 1, true),
('Sand Dune Texture in Motion', 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-an-outdoor-photoshoot-39878-large.mp4', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80', 'p1000000-0000-0000-0000-000000000003', 2, true),
('Minimalist Tailoring Walk', 'https://assets.mixkit.co/videos/preview/mixkit-young-man-walking-down-a-city-street-41556-large.mp4', 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80', 'p1000000-0000-0000-0000-000000000005', 3, true);
