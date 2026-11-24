"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { DealTiles } from "@/components/home/DealTiles";
import { BannerRow } from "@/components/home/BannerRow";
import { NewArrivalsCarousel } from "@/components/home/NewArrivalsCarousel";
import { ShopByPrice } from "@/components/home/ShopByPrice";
import { ReelsRow } from "@/components/home/ReelsRow";
import { TrustBar } from "@/components/home/TrustBar";
import { ProductCard } from "@/components/product/ProductCard";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export default function HomePage() {
  const trendingProducts = MOCK_PRODUCTS.slice(0, 8);

  return (
    <div className="flex flex-col w-full bg-white text-ink">
      {/* 1. Hero Carousel with Stitch Drop 09 Banner */}
      <Hero />

      {/* 2. Shop by Category (Square Cards Carousel) */}
      <CategoryStrip />

      {/* 3. Deal Tiles: 2x2 High-Impact Grid */}
      <DealTiles />

      {/* 4. Trending Street Edits (2-Col Mobile / 4-Col Desktop Grid) */}
      <section className="flex flex-col w-full px-3 sm:px-6 lg:px-10 pt-4 pb-8 select-none">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Header with black indicator bar (Stitch spec) */}
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-ink rounded-sm" />
              <h2 className="font-display font-bold text-sm sm:text-base uppercase text-ink tracking-tight">
                Trending Street Edits
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase text-muted tracking-wider">
                {trendingProducts.length} Items
              </span>
              <Link
                href="/shop"
                className="font-mono text-xs font-bold uppercase text-red tracking-wider flex items-center hover:underline ml-2"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6">
            {trendingProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={idx < 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Wide Editorial Promo Banners */}
      <BannerRow />

      {/* 6. New Arrivals Product Carousel */}
      <NewArrivalsCarousel />

      {/* 7. Shop by Price Grid */}
      <ShopByPrice />

      {/* 8. Watch & Buy / Reels Row */}
      <ReelsRow />

      {/* 9. Service Promises Trust Micro-strip */}
      <TrustBar />
    </div>
  );
}
