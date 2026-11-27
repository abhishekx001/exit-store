"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { formatPrice, buildWhatsAppLink } from "@/lib/utils";
import { useFavouritesStore } from "@/store/useFavouritesStore";
import { useCartStore } from "@/store/useCartStore";
import { Heart, Plus, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  const { isFavourite, toggleFavourite } = useFavouritesStore();
  const { addItem } = useCartStore();
  const favorited = isFavourite(product.id);

  const primaryImage =
    product.images[0]?.url || "/images/5-sleeve/1.jpeg";
  const hoverImage = product.images[1]?.url || primaryImage;

  const handleToggleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavourite(product);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants.find((v) => v.stock > 0) || product.variants[0];
    if (defaultVariant) {
      addItem(product, defaultVariant, 1);
      toast.success(`Added ${product.name} (${defaultVariant.size}) to bag`);
    }
  };

  const discountPercent = product.discount_percent || 
    (product.compare_at_price && product.compare_at_price > product.price
      ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
      : null);

  const productSubtitle = product.tags[0] || `${product.category?.name || "Oversized Fit"} • Carbon`;

  return (
    <article className="group flex flex-col bg-white select-none">
      {/* 4:5 Aspect Ratio Container with rounded-lg (Stitch design) */}
      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-tile border border-hair group-hover:border-ink/20 transition-colors">
        <Link href={`/product/${product.slug}`} className="absolute inset-0 block">
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />

          {product.images.length > 1 && (
            <Image
              src={hoverImage}
              alt={`${product.name} angle`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              className="w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </Link>

        {/* Top-Left Tag: Red NEW or Black HOT */}
        <div className="absolute top-2 left-2 z-10">
          {product.is_new ? (
            <span className="px-1.5 py-0.5 rounded bg-red text-white font-mono text-[10px] uppercase font-bold tracking-wider">
              NEW
            </span>
          ) : discountPercent && discountPercent >= 40 ? (
            <span className="px-1.5 py-0.5 rounded bg-ink text-white font-mono text-[10px] uppercase font-bold tracking-wider">
              HOT
            </span>
          ) : null}
        </div>

        {/* Top-Right Heart Button: Circle with translucent glass */}
        <button
          onClick={handleToggleFav}
          aria-label={favorited ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-ink hover:text-red active:scale-90 transition-transform z-10"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              favorited ? "fill-red text-red" : "text-ink/80 hover:text-red"
            }`}
            strokeWidth={1.5}
          />
        </button>

        {/* Book on WhatsApp Quick Button */}
        <div className="absolute bottom-2 inset-x-2 flex justify-center z-10 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <a
            href={buildWhatsAppLink(product.name, undefined, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full h-8 bg-white/95 backdrop-blur-sm hover:bg-[#25D366] hover:text-white text-ink font-mono text-[11px] uppercase font-bold rounded shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all border border-hair"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Caption Content (Exact Stitch spec) */}
      <div className="flex flex-col gap-0.5 pt-2">
        <Link
          href={`/product/${product.slug}`}
          className="font-body font-bold text-xs sm:text-sm text-ink truncate hover:text-red transition-colors"
        >
          {product.name}
        </Link>

        <p className="font-body text-[11px] sm:text-xs text-muted truncate">
          {productSubtitle}
        </p>

        <div className="flex items-center gap-1.5 pt-0.5">
          <span className="font-display font-bold text-sm sm:text-base text-ink">
            {formatPrice(product.price)}
          </span>
          {product.compare_at_price && product.compare_at_price > product.price && (
            <span className="font-mono text-xs text-muted line-through">
              {formatPrice(product.compare_at_price)}
            </span>
          )}
          {discountPercent && discountPercent > 0 && (
            <span className="font-mono text-[11px] sm:text-xs text-red font-bold">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Size Availability Strip (Exact Stitch design: S • M • L • XL) */}
        <div className="flex items-center gap-1 pt-0.5 text-muted font-mono text-[10px]">
          {product.variants.map((v, i) => (
            <span key={v.id} className="flex items-center gap-1">
              <span className={v.stock > 0 ? "text-muted" : "line-through opacity-30"}>
                {v.size}
              </span>
              {i < product.variants.length - 1 && <span>•</span>}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
