"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export function NewArrivalsCarousel() {
  const newArrivals = MOCK_PRODUCTS.filter((p) => p.is_new).concat(MOCK_PRODUCTS).slice(0, 6);

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-hair">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red" />
            <h2 className="font-display font-extrabold text-lg sm:text-2xl uppercase tracking-tight text-ink">
              NEW ARRIVALS
            </h2>
          </div>
          <Link
            href="/shop?sort=newest"
            className="text-xs font-mono font-bold text-red hover:underline flex items-center gap-1"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Carousel: 2.2 cards on mobile, 4.5 on desktop */}
        <div className="flex gap-3 sm:gap-5 overflow-x-auto scrollbar-none pb-4 pt-1 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[42vw] sm:w-[28vw] lg:w-[20vw] max-w-[280px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
