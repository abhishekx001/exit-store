"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterDrawer } from "@/components/shop/FilterDrawer";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "@/lib/mock-data";
import { SlidersHorizontal } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSort = searchParams.get("sort") || "bestseller";
  const initialMaxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null;

  const [category, setCategory] = useState<string>(initialCategory);
  const [sort, setSort] = useState<string>(initialSort);
  const [size, setSize] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number | null>(initialMaxPrice);
  const [filterOpen, setFilterOpen] = useState(false);

  const products = useMemo(() => {
    let list = [...MOCK_PRODUCTS];

    if (category && category !== "all") {
      if (category === "sale") {
        list = list.filter((p) => (p.discount_percent || 0) > 0);
      } else if (category === "fresh-arrivals") {
        list = list.filter((p) => p.is_new);
      } else {
        const catObj = MOCK_CATEGORIES.find((c) => c.slug === category);
        if (catObj) {
          list = list.filter((p) => p.category_id === catObj.id);
        }
      }
    }

    if (maxPrice) {
      list = list.filter((p) => p.price <= maxPrice);
    }

    if (size && size !== "ALL") {
      list = list.filter((p) =>
        p.variants.some((v) => v.size === size && v.stock > 0)
      );
    }

    if (sort === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === "discount") {
      list.sort((a, b) => (b.discount_percent || 0) - (a.discount_percent || 0));
    } else if (sort === "newest") {
      list.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else {
      list.sort((a, b) => (b.is_bestseller ? 1 : 0) - (a.is_bestseller ? 1 : 0));
    }

    return list;
  }, [category, sort, size, maxPrice]);

  const activeCategoryTitle =
    category === "all"
      ? "All Clothing"
      : MOCK_CATEGORIES.find((c) => c.slug === category)?.name || "Clothing";

  return (
    <div className="min-h-[100dvh] pb-24 bg-white text-ink">
      {/* Category Header */}
      <div className="pt-6 sm:pt-10 pb-4 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex items-baseline gap-3">
            <h1 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-ink">
              {activeCategoryTitle}
            </h1>
            <span className="font-mono text-sm sm:text-base text-muted">
              ({products.length} Items)
            </span>
            {maxPrice && (
              <span className="text-xs font-mono font-bold text-red bg-red/10 px-2 py-0.5 rounded-[2px]">
                Under ₹{maxPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Filter & Sort Bar */}
      <div className="sticky top-14 sm:top-16 z-20 bg-white/95 backdrop-blur-md border-b border-hair py-3">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between text-xs font-mono">
          <div className="text-muted">
            Showing <span className="text-ink font-bold">{products.length}</span> styles
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(true)}
              className="text-ink hover:text-red transition-colors flex items-center gap-1.5 font-bold"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter &amp; Sort</span>
              {size && size !== "ALL" && (
                <span className="text-red">({size})</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid: 2 columns mobile / 4 columns desktop uniform grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-6 sm:pt-10">
        {products.length === 0 ? (
          <div className="py-20 text-center font-mono text-xs text-muted space-y-4">
            <p>No products found matching the criteria.</p>
            <button
              onClick={() => {
                setCategory("all");
                setSize("");
                setMaxPrice(null);
              }}
              className="bg-ink text-white font-mono text-xs font-bold px-6 py-2.5 rounded-[4px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        selectedCategory={category}
        onSelectCategory={setCategory}
        selectedSort={sort}
        onSelectSort={setSort}
        selectedSize={size}
        onSelectSize={setSize}
        onReset={() => {
          setCategory("all");
          setSort("bestseller");
          setSize("");
          setMaxPrice(null);
        }}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ShopContent />
    </Suspense>
  );
}
