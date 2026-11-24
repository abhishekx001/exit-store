"use client";

import { Heart, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface StickyBottomBarProps {
  price: number;
  compareAtPrice?: number | null;
  onAddToCart: () => void;
  disabled?: boolean;
  onToggleWishlist?: () => void;
  isWishlisted?: boolean;
}

export function StickyBottomBar({
  price,
  compareAtPrice,
  onAddToCart,
  disabled = false,
  onToggleWishlist,
  isWishlisted = false,
}: StickyBottomBarProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-hair px-4 py-2.5 pb-safe lg:hidden flex items-center justify-between gap-3 shadow-lg">
      {/* Price Block */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display font-bold text-sm text-ink">
            {formatPrice(price)}
          </span>
          {compareAtPrice && compareAtPrice > price && (
            <span className="text-[10px] text-muted line-through font-mono">
              {formatPrice(compareAtPrice)}
            </span>
          )}
        </div>
        <span className="text-[10px] font-mono text-green leading-none">
          Free Delivery
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 flex-1 justify-end">
        {onToggleWishlist && (
          <button
            onClick={onToggleWishlist}
            className="p-2.5 rounded-[4px] border border-hair hover:border-ink text-ink transition-colors"
            aria-label="Wishlist"
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted ? "fill-red text-red" : "text-ink"
              }`}
            />
          </button>
        )}

        <button
          onClick={onAddToCart}
          disabled={disabled}
          className="bg-ink hover:bg-ink/90 active:scale-98 text-white px-5 py-2.5 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform disabled:opacity-40"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>{disabled ? "Sold Out" : "Add to Bag"}</span>
        </button>
      </div>
    </div>
  );
}
