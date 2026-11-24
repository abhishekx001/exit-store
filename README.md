# VEER STUDIOS — Premium Men's Streetwear E-Commerce
### Mobile-First, Instagram-Driven High Fashion Store

> Engineered with Next.js 14 (App Router, TypeScript), Tailwind CSS, Framer Motion, Zustand, and Supabase.

---

## ✦ Key Highlights & Architecture

- **Instagram In-App Browser Optimized:**
  - Viewport-aware layout using `100dvh` (never broken by mobile URL bars).
  - Safe-area insets (`safe-pb`, `safe-pt`, `env(safe-area-inset-*)`).
  - Floating bottom navigation tab bar that intelligently hides on scroll-down and reveals on scroll-up.
  - Dedicated `/links` Link-in-Bio hub engineered specifically for bio traffic.
  - Direct 1-tap "Order on WhatsApp with Concierge" prefilled with product title and selected size.
- **Brand & Theme Customization:**
  - Single master brand configuration file at `lib/brand.ts` (`BRAND.name`, `BRAND.theme`, social handles, announcements, bio links).
  - Derived palette matching the logo at `public/brand/logo.svg`.
  - Dark mode by default (`#0B0B0C`, `#141416`) with high-voltage acid lime streetwear accent (`#C6FF3D`) and warm sand gold (`#D8C3A5`).
  - Subtle grain overlay and glassmorphism headers.
- **E-Commerce Flows:**
  - **Home:** Ken-Burns animated hero, live marquee ticker, story-bubble category strip, Best Sellers / Fresh Arrivals tabs, Bento category grid, Watch & Buy Instagram Reels carousel with mute/unmute, UGC lookbook, and trust badges.
  - **Shop & Category:** Sticky filter/sort bar with mobile bottom-sheet filters (sizes, categories, sorting).
  - **Product Page:** High-definition portrait gallery with swipe dots and zoom, color swatches, size chips, live stock counters, size guide modal, accordions, and celebratory confetti.
  - **Cart & Favourites:** Slide-over cart drawer + dedicated `/cart` and `/favourites` pages with Free Shipping meter (₹1,499 threshold), coupons (`VEER10`, `FIRSTDROP`, `FREESHIP`), and persistent localStorage syncing.
  - **Checkout:** Single-page seamless flow with India PIN code autofill, Cash on Delivery (COD) + Razorpay online payment option, and live tracking at `/track-order`.
  - **Admin Panel:** Real-time store management at `/admin` for products and order status tracking.

---

## ✦ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the store.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ✦ Supabase Database Setup

When you are ready to connect a live Supabase project:

1. Copy `.env.example` to `.env.local`:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
2. Run the SQL schema in your Supabase SQL Editor:
   - Apply `supabase/migrations/20261124_init.sql` (Creates all tables, RLS policies, full-text search triggers, and indexes).
   - Apply `supabase/seed.sql` (Populates initial 2026 drop categories, products, variants, coupons, and reels).

*Note: If Supabase environment variables are omitted, the application automatically uses an in-memory & persistent local storage repository with realistic data, so the store is 100% functional out of the box with zero runtime errors.*

---

## ✦ How to Change Brand Name or Logo

1. Open `lib/brand.ts`:
   - Change `BRAND.name` to your desired brand title.
   - Update `BRAND.whatsappNumber`, `BRAND.instagramHandle`, and policies.
2. Replace `public/brand/logo.svg` or `public/brand/logo.png` with your new vector or PNG logo.
3. The theme tokens and layout automatically inherit your updates!
