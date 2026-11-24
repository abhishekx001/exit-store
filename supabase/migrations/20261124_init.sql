-- ==============================================================================
-- VEER STUDIOS / PREMIUM MEN'S CLOTHING STORE - SUPABASE SCHEMA & RLS
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 1. PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. CATEGORIES
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  image_url TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- 3. PRODUCTS
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  fabric TEXT NOT NULL DEFAULT '100% Premium Combed Cotton',
  care TEXT NOT NULL DEFAULT 'Machine wash cold, tumble dry low, do not iron on print',
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  price NUMERIC NOT NULL CHECK (price >= 0),
  compare_at_price NUMERIC CHECK (compare_at_price >= price),
  discount_percent INT GENERATED ALWAYS AS (
    CASE 
      WHEN compare_at_price IS NOT NULL AND compare_at_price > price 
      THEN ROUND(((compare_at_price - price) / compare_at_price) * 100) 
      ELSE 0 
    END
  ) STORED,
  tags TEXT[] NOT NULL DEFAULT '{}',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_new BOOLEAN NOT NULL DEFAULT false,
  is_bestseller BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  search TSVECTOR,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. PRODUCT IMAGES
CREATE TABLE IF NOT EXISTS public.product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt TEXT NOT NULL DEFAULT '',
  sort_order INT NOT NULL DEFAULT 0
);

-- 5. PRODUCT VARIANTS
CREATE TABLE IF NOT EXISTS public.product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  size TEXT NOT NULL CHECK (size IN ('XS', 'S', 'M', 'L', 'XL', 'XXL')),
  color TEXT NOT NULL,
  color_hex TEXT NOT NULL DEFAULT '#000000',
  sku TEXT NOT NULL UNIQUE,
  stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0),
  price_override NUMERIC
);

-- 6. FAVOURITES
CREATE TABLE IF NOT EXISTS public.favourites (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  PRIMARY KEY (user_id, product_id)
);

-- 7. CARTS & CART ITEMS
CREATE TABLE IF NOT EXISTS public.carts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cart_id UUID NOT NULL REFERENCES public.carts(id) ON DELETE CASCADE,
  variant_id UUID NOT NULL REFERENCES public.product_variants(id) ON DELETE CASCADE,
  quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
  UNIQUE (cart_id, variant_id)
);

-- 8. ADDRESSES
CREATE TABLE IF NOT EXISTS public.addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  line1 TEXT NOT NULL,
  line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pincode TEXT NOT NULL,
  is_default BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 9. ORDERS & ORDER ITEMS
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT NOT NULL UNIQUE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address JSONB NOT NULL,
  subtotal NUMERIC NOT NULL,
  shipping_fee NUMERIC NOT NULL DEFAULT 0,
  discount NUMERIC NOT NULL DEFAULT 0,
  total NUMERIC NOT NULL,
  payment_method TEXT NOT NULL CHECK (payment_method IN ('cod', 'razorpay')),
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')),
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE RESTRICT,
  variant_id UUID NOT NULL REFERENCES public.product_variants(id) ON DELETE RESTRICT,
  name_snapshot TEXT NOT NULL,
  image_snapshot TEXT NOT NULL,
  size TEXT NOT NULL,
  color TEXT NOT NULL,
  price NUMERIC NOT NULL,
  quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0)
);

-- 10. COUPONS
CREATE TABLE IF NOT EXISTS public.coupons (
  code TEXT PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('percentage', 'flat')),
  value NUMERIC NOT NULL,
  min_order NUMERIC NOT NULL DEFAULT 0,
  expires_at TIMESTAMPTZ,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- 11. BANNERS
CREATE TABLE IF NOT EXISTS public.banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  media_url TEXT NOT NULL,
  media_type TEXT NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video')),
  cta_label TEXT NOT NULL DEFAULT 'Shop Now',
  cta_href TEXT NOT NULL DEFAULT '/shop',
  placement TEXT NOT NULL DEFAULT 'hero' CHECK (placement IN ('hero', 'mid_banner', 'bottom')),
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- 12. ANNOUNCEMENTS
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  text TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- 13. REELS (WATCH & BUY)
CREATE TABLE IF NOT EXISTS public.reels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL DEFAULT '',
  video_url TEXT NOT NULL,
  poster_url TEXT NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- 14. NEWSLETTER SUBSCRIBERS
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  email TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_products_slug ON public.products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_search ON public.products USING GIN(search);
CREATE INDEX IF NOT EXISTS idx_products_name_trgm ON public.products USING GIN(name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_orders_user ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_number ON public.orders(order_number);

-- SEARCH VECTOR TRIGGER
CREATE OR REPLACE FUNCTION public.products_search_trigger()
RETURNS TRIGGER AS $$
BEGIN
  new.search := setweight(to_tsvector('english', coalesce(new.name, '')), 'A') ||
                setweight(to_tsvector('english', coalesce(new.description, '')), 'B') ||
                setweight(to_tsvector('english', array_to_string(new.tags, ' ')), 'C');
  RETURN new;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_products_search ON public.products;
CREATE TRIGGER trg_products_search
BEFORE INSERT OR UPDATE ON public.products
FOR EACH ROW EXECUTE FUNCTION public.products_search_trigger();

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favourites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Helper to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- Public Read for Catalog
CREATE POLICY "Public categories read" ON public.categories FOR SELECT USING (is_active = true OR is_admin());
CREATE POLICY "Public products read" ON public.products FOR SELECT USING (is_active = true OR is_admin());
CREATE POLICY "Public images read" ON public.product_images FOR SELECT USING (true);
CREATE POLICY "Public variants read" ON public.product_variants FOR SELECT USING (true);
CREATE POLICY "Public banners read" ON public.banners FOR SELECT USING (is_active = true OR is_admin());
CREATE POLICY "Public announcements read" ON public.announcements FOR SELECT USING (is_active = true OR is_admin());
CREATE POLICY "Public reels read" ON public.reels FOR SELECT USING (is_active = true OR is_admin());
CREATE POLICY "Public coupons read active" ON public.coupons FOR SELECT USING (is_active = true);

-- User-scoped policies
CREATE POLICY "Users view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id OR is_admin());
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users manage own favourites" ON public.favourites FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users manage own carts" ON public.carts FOR ALL USING (auth.uid() = user_id OR session_id IS NOT NULL);
CREATE POLICY "Users manage own cart items" ON public.cart_items FOR ALL USING (true);

CREATE POLICY "Users manage own addresses" ON public.addresses FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users view own orders" ON public.orders FOR SELECT USING (auth.uid() = user_id OR is_admin());
CREATE POLICY "Users view own order items" ON public.order_items FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND (orders.user_id = auth.uid() OR is_admin()))
);

CREATE POLICY "Anyone subscribe newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Admin Full Access
CREATE POLICY "Admin full categories" ON public.categories FOR ALL USING (is_admin());
CREATE POLICY "Admin full products" ON public.products FOR ALL USING (is_admin());
CREATE POLICY "Admin full product_images" ON public.product_images FOR ALL USING (is_admin());
CREATE POLICY "Admin full product_variants" ON public.product_variants FOR ALL USING (is_admin());
CREATE POLICY "Admin full orders" ON public.orders FOR ALL USING (is_admin());
CREATE POLICY "Admin full coupons" ON public.coupons FOR ALL USING (is_admin());
CREATE POLICY "Admin full banners" ON public.banners FOR ALL USING (is_admin());
CREATE POLICY "Admin full announcements" ON public.announcements FOR ALL USING (is_admin());
CREATE POLICY "Admin full reels" ON public.reels FOR ALL USING (is_admin());

-- Storage Buckets Configuration (Run in Supabase dashboard or via API)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('products', 'products', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('banners', 'banners', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('reels', 'reels', true);
