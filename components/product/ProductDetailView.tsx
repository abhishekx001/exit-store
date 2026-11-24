"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SizeGuideModal } from "@/components/product/SizeGuideModal";
import { ProductCard } from "@/components/product/ProductCard";
import { useCartStore } from "@/store/useCartStore";
import { useFavouritesStore } from "@/store/useFavouritesStore";
import { formatPrice, buildWhatsAppLink } from "@/lib/utils";
import { BRAND, BRAND_NAME, BRAND_RED } from "@/lib/brand";
import { toast } from "sonner";
import { Heart, Plus, Minus, ArrowLeft, MessageCircle, Check } from "lucide-react";
import { Product } from "@/types";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("PITCH BLACK");
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Accordion states
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const { addItem } = useCartStore();
  const { isFavourite, toggleFavourite } = useFavouritesStore();
  const favorited = isFavourite(product.id);

  const selectedVariant =
    product.variants.find((v) => v.size === selectedSize) ||
    product.variants[0];

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addItem(product, selectedVariant, 1);
    setAddedAnimation(true);
    toast.success(`Added ${product.name} (${selectedSize}) to bag`);
    setTimeout(() => setAddedAnimation(false), 1600);
  };

  const discountPercent = product.discount_percent || 
    (product.compare_at_price && product.compare_at_price > product.price
      ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
      : null);

  const colors = [
    { name: "PITCH BLACK", hex: "#111111", isDark: true },
    { name: "CHALK WHITE", hex: "#F5F5F3", isDark: false },
    { name: "ASH GREY", hex: "#6F706F", isDark: true },
    { name: "CRIMSON RED", hex: "#E10600", isDark: true },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen pb-24 bg-white text-ink select-none">
      <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-10 sm:pt-6">
        {/* Mobile & Desktop Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-14 items-start">
          {/* Left Column: Full-width Swipeable 4:5 Photo Gallery (Exact Stitch spec) */}
          <div className="lg:col-span-7">
            {/* Mobile View */}
            <div className="relative w-full aspect-[4/5] bg-tile sm:rounded-lg overflow-hidden sm:border border-hair">
              <Image
                src={product.images[activeImageIndex]?.url || product.images[0]?.url || "/images/pdp-detail-1.jpg"}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="w-full h-full object-cover"
              />

              {/* Top-left Back Arrow */}
              <button
                onClick={() => router.back()}
                aria-label="Go back"
                className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/90 text-ink flex items-center justify-center active:scale-95 transition-transform z-10 shadow-sm"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Top-right Heart Icon */}
              <button
                onClick={() => toggleFavourite(product)}
                aria-label="Add to wishlist"
                className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-white/90 text-ink flex items-center justify-center active:scale-95 transition-transform z-10 shadow-sm"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorited ? "fill-red text-red" : "text-ink"
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              {/* Dot Indicators (Stitch pill style) */}
              {product.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/90 z-10 shadow-sm">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeImageIndex === i ? "w-4 bg-ink" : "w-1.5 bg-muted/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Thumbnail Strip */}
            <div className="hidden sm:grid grid-cols-4 gap-3 mt-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id || idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[4/5] rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? "border-red" : "border-hair hover:border-ink"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt="Thumbnail"
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info & Pricing (Exact Stitch spec) */}
          <div className="lg:col-span-5 flex flex-col pt-4 sm:pt-0">
            {/* Title & Badge */}
            <div className="flex flex-col px-4 sm:px-0 pb-3 gap-2">
              <div className="flex items-start justify-between gap-2">
                <h1 className="font-display font-black text-xl sm:text-2xl text-ink uppercase tracking-tight">
                  {product.name}
                </h1>
                <span className="px-2 py-0.5 rounded bg-red text-white font-mono text-[10px] uppercase font-bold flex-shrink-0">
                  HOT
                </span>
              </div>

              {/* Price Row */}
              <div className="flex flex-col gap-0.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-2xl text-ink">
                    {formatPrice(product.price)}
                  </span>
                  {product.compare_at_price && (
                    <span className="font-mono text-sm text-muted line-through">
                      {formatPrice(product.compare_at_price)}
                    </span>
                  )}
                  {discountPercent && (
                    <span className="font-mono font-bold text-xs text-red">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>
                <span className="font-body text-xs text-muted">
                  Inclusive of all taxes
                </span>
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="w-full h-px bg-hair" />

            {/* Color Swatches (Exact Stitch spec) */}
            <div className="flex flex-col px-4 sm:px-0 py-4 gap-2">
              <span className="font-mono text-xs text-muted uppercase tracking-wider">
                COLOR: <strong className="text-ink font-bold">{selectedColor}</strong>
              </span>
              <div className="flex items-center gap-3">
                {colors.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      aria-label={c.name}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isSelected ? "ring-2 ring-ink ring-offset-2" : "border border-hair"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {isSelected && (
                        <span
                          className={`w-2 h-2 rounded-full ${
                            c.isDark ? "bg-white" : "bg-ink"
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selector (Exact Stitch spec) */}
            <div className="flex flex-col px-4 sm:px-0 pb-4 gap-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted uppercase tracking-wider">
                  SELECT SIZE
                </span>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="font-mono text-xs text-ink underline underline-offset-4 uppercase font-bold hover:text-red transition-colors"
                >
                  Size guide
                </button>
              </div>

              <div className="flex items-center gap-2">
                {sizes.map((s) => {
                  const isSelected = selectedSize === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-10 h-10 rounded-lg font-mono font-bold text-xs flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-ink text-white shadow-sm"
                          : "bg-paper text-ink hover:bg-tile"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="w-full h-px bg-hair" />

            {/* Desktop Add to Bag & Wishlist Row */}
            <div className="hidden sm:flex items-center gap-3 px-4 sm:px-0 py-4">
              <button
                onClick={() => toggleFavourite(product)}
                className="flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-paper text-ink font-mono font-bold text-xs uppercase hover:bg-tile transition-colors border border-hair"
              >
                <Heart
                  className={`w-4 h-4 ${favorited ? "fill-red text-red" : "text-ink"}`}
                />
                <span>{favorited ? "Saved" : "Wishlist"}</span>
              </button>

              <button
                onClick={handleAddToCart}
                className={`flex-1 h-12 rounded-lg font-mono font-bold text-xs uppercase active:scale-95 transition-all text-white ${
                  addedAnimation ? "bg-red" : "bg-ink hover:bg-ink/90"
                }`}
              >
                {addedAnimation ? "ADDED TO BAG ✓" : "ADD TO BAG"}
              </button>
            </div>

            {/* Collapsible Accordions (Exact Stitch spec) */}
            <div className="flex flex-col w-full divide-y divide-hair border-y border-hair">
              {/* Details */}
              <div className="flex flex-col">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "details" ? null : "details")}
                  className="flex items-center justify-between w-full px-4 sm:px-0 py-3.5 text-left"
                >
                  <span className="font-mono font-bold text-xs text-ink uppercase">
                    Details
                  </span>
                  {openAccordion === "details" ? (
                    <Minus className="w-4 h-4 text-ink" />
                  ) : (
                    <Plus className="w-4 h-4 text-ink" />
                  )}
                </button>
                {openAccordion === "details" && (
                  <div className="px-4 sm:px-0 pb-3.5">
                    <p className="font-body text-xs text-muted leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Fabric & Care */}
              <div className="flex flex-col">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "fabric" ? null : "fabric")}
                  className="flex items-center justify-between w-full px-4 sm:px-0 py-3.5 text-left"
                >
                  <span className="font-mono font-bold text-xs text-ink uppercase">
                    Fabric &amp; Care
                  </span>
                  {openAccordion === "fabric" ? (
                    <Minus className="w-4 h-4 text-ink" />
                  ) : (
                    <Plus className="w-4 h-4 text-ink" />
                  )}
                </button>
                {openAccordion === "fabric" && (
                  <div className="px-4 sm:px-0 pb-3.5 space-y-1">
                    <p className="font-body text-xs text-muted leading-relaxed">
                      {product.fabric}
                    </p>
                    <p className="font-body text-xs text-muted leading-relaxed">
                      <strong>Care:</strong> {product.care}
                    </p>
                  </div>
                )}
              </div>

              {/* Delivery & Returns */}
              <div className="flex flex-col">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "delivery" ? null : "delivery")}
                  className="flex items-center justify-between w-full px-4 sm:px-0 py-3.5 text-left"
                >
                  <span className="font-mono font-bold text-xs text-ink uppercase">
                    Delivery &amp; Returns
                  </span>
                  {openAccordion === "delivery" ? (
                    <Minus className="w-4 h-4 text-ink" />
                  ) : (
                    <Plus className="w-4 h-4 text-ink" />
                  )}
                </button>
                {openAccordion === "delivery" && (
                  <div className="px-4 sm:px-0 pb-3.5">
                    <p className="font-body text-xs text-muted leading-relaxed">
                      Free express shipping across India in 2–4 business days. Easy 7-day doorstep size exchange or return.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Order on WhatsApp Link (Stitch spec) */}
            <div className="flex items-center justify-between px-4 sm:px-0 py-3.5">
              <a
                href={buildWhatsAppLink(product.name, selectedSize)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono font-bold text-xs text-ink underline underline-offset-4 uppercase hover:text-red transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green" />
                <span>Order on WhatsApp</span>
              </a>
              <span className="font-body text-[11px] text-muted">
                Instant COD support
              </span>
            </div>
          </div>
        </div>

        {/* You May Also Like 2-Column Grid (Exact Stitch spec) */}
        {relatedProducts.length > 0 && (
          <div className="flex flex-col px-3 sm:px-0 py-8 gap-4 mt-8 border-t border-hair">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-ink rounded-sm" />
              <h2 className="font-display font-bold text-base sm:text-lg text-ink uppercase">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Action Bar for Mobile (Exact Stitch design) */}
      <div className="fixed bottom-0 inset-x-0 z-40 w-full bg-white/95 backdrop-blur-xl border-t border-hair lg:hidden pb-safe">
        <div className="flex items-center gap-2.5 px-4 py-2.5">
          <button
            onClick={() => toggleFavourite(product)}
            className="flex items-center justify-center gap-1.5 h-11 px-4 rounded-lg bg-paper text-ink font-mono font-bold text-xs uppercase active:scale-95 transition-transform border border-hair"
            type="button"
          >
            <Heart
              className={`w-4 h-4 ${favorited ? "fill-red text-red" : "text-ink"}`}
            />
            <span>Wishlist</span>
          </button>

          <button
            onClick={handleAddToCart}
            className={`flex-1 h-11 rounded-lg text-white font-mono font-bold text-xs uppercase active:scale-95 transition-all flex items-center justify-center gap-1.5 ${
              addedAnimation ? "bg-red" : "bg-ink"
            }`}
            type="button"
          >
            <span>{addedAnimation ? "ADDED TO BAG ✓" : "ADD TO BAG"}</span>
          </button>
        </div>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </div>
  );
}
