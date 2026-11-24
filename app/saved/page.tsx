"use client";

import Link from "next/link";
import { useFavouritesStore } from "@/store/useFavouritesStore";
import { ProductCard } from "@/components/product/ProductCard";
import { Heart } from "lucide-react";

export default function SavedPage() {
  const { items, clearFavourites } = useFavouritesStore();

  return (
    <div className="min-h-[100dvh] pb-24 bg-white text-ink">
      <div className="pt-6 sm:pt-10 pb-4 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex items-baseline justify-between">
          <div className="flex items-baseline gap-3">
            <h1 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-ink">
              WISHLIST
            </h1>
            <span className="font-mono text-sm sm:text-base text-muted">
              ({items.length} Items)
            </span>
          </div>

          {items.length > 0 && (
            <button
              onClick={clearFavourites}
              className="font-mono text-xs text-muted hover:text-red transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-6 sm:pt-10">
        {items.length === 0 ? (
          <div className="py-20 text-center font-body text-xs text-muted space-y-4">
            <div className="w-16 h-16 rounded-full bg-paper flex items-center justify-center text-muted mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-display font-bold text-xl text-ink uppercase">
              Your wishlist is empty
            </h2>
            <p className="max-w-xs mx-auto">
              Save your favorite garments here by tapping the heart icon on any card.
            </p>
            <Link
              href="/shop"
              className="bg-ink hover:bg-ink/90 text-white font-mono text-xs font-bold px-8 py-3 rounded-[4px] uppercase tracking-wider inline-block transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
