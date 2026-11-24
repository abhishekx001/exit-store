"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product/ProductCard";
import { getMockProducts } from "@/lib/mock-data";
import { Search } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(query);

  const results = getMockProducts({ query: searchTerm });

  return (
    <div className="min-h-[100dvh] pb-24 bg-white text-ink">
      {/* Search Header */}
      <div className="pt-6 sm:pt-10 pb-4 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex items-baseline gap-3">
            <h1 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-ink">
              {searchTerm ? `Results for "${searchTerm}"` : "Search Catalog"}
            </h1>
            <span className="font-mono text-sm sm:text-base text-muted">
              ({results.length} Matches)
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-6 sm:pt-10">
        {results.length === 0 ? (
          <div className="text-center py-20 space-y-3 font-body">
            <div className="w-14 h-14 rounded-full bg-paper flex items-center justify-center text-muted mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-ink uppercase">
              No garments found matching &quot;{searchTerm}&quot;
            </h3>
            <p className="text-xs text-muted max-w-sm mx-auto">
              Try searching with terms like &quot;Oversized&quot;, &quot;Tees&quot;, &quot;Shirts&quot;, &quot;Linen&quot;, or &quot;Bottoms&quot;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60dvh] flex items-center justify-center text-xs font-mono text-muted">
          Loading search results...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
