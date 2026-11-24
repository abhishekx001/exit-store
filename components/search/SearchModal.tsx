"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Clock, Trash2 } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";

export function SearchModal() {
  const router = useRouter();
  const { isSearchOpen, closeSearch, recentSearches, addRecentSearch, clearRecentSearches } = useUIStore();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase().trim();
    const hits = MOCK_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category?.name.toLowerCase().includes(q)
    );
    setResults(hits);
  }, [query]);

  const handleSubmit = (searchQuery: string) => {
    const q = searchQuery.trim();
    if (!q) return;
    addRecentSearch(q);
    closeSearch();
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSearch}
            className="fixed inset-0 bg-ink/40 backdrop-blur-[2px]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full bg-white border-b border-hair shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-4">
              {/* Search Bar Input Row */}
              <div className="flex items-center gap-3 border-b border-hair pb-3">
                <Search className="w-5 h-5 text-muted flex-shrink-0" strokeWidth={1.5} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit(query);
                    if (e.key === "Escape") closeSearch();
                  }}
                  placeholder="Search for shirts, tees, jackets, bottoms…"
                  className="w-full text-base sm:text-lg font-body text-ink placeholder:text-muted focus:outline-none bg-transparent"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="p-1 hover:bg-paper rounded text-muted hover:text-ink transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={closeSearch}
                  className="text-xs font-mono font-medium text-muted hover:text-ink px-2 py-1 rounded transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Quick Results or Suggestions */}
              <div className="py-4">
                {query.trim().length > 0 ? (
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <span className="font-mono text-xs uppercase text-muted tracking-tight">
                        Products ({results.length})
                      </span>
                      {results.length > 0 && (
                        <button
                          onClick={() => handleSubmit(query)}
                          className="font-mono text-xs text-red font-semibold hover:underline flex items-center gap-1"
                        >
                          <span>View all results</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {results.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {results.slice(0, 6).map((product) => (
                          <Link
                            key={product.id}
                            href={`/product/${product.slug}`}
                            onClick={() => {
                              addRecentSearch(product.name);
                              closeSearch();
                            }}
                            className="flex items-center gap-3 p-2 rounded-[4px] hover:bg-paper transition-colors group"
                          >
                            <div className="relative w-14 h-16 bg-tile rounded-[2px] overflow-hidden flex-shrink-0">
                              <Image
                                src={product.images[0]?.url || "/images/drop-1.jpg"}
                                alt={product.name}
                                fill
                                sizes="60px"
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-xs font-body font-semibold text-ink truncate group-hover:text-red transition-colors">
                                {product.name}
                              </span>
                              <span className="text-[11px] text-muted truncate">
                                {product.category?.name || "Garment"}
                              </span>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="font-display font-bold text-xs text-ink">
                                  {formatPrice(product.price)}
                                </span>
                                {product.compare_at_price && (
                                  <span className="font-mono text-[10px] text-muted line-through">
                                    {formatPrice(product.compare_at_price)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center">
                        <p className="text-sm text-muted">
                          No items matching &ldquo;{query}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Recent Searches */}
                    {recentSearches && recentSearches.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[11px] uppercase text-muted tracking-tight flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> Recent Searches
                          </span>
                          <button
                            onClick={clearRecentSearches}
                            className="text-[11px] font-mono text-muted hover:text-red transition-colors flex items-center gap-1"
                          >
                            <Trash2 className="w-2.5 h-2.5" /> Clear
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recentSearches.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setQuery(item);
                                handleSubmit(item);
                              }}
                              className="text-xs font-body bg-paper hover:bg-tile text-ink px-3 py-1.5 rounded-[4px] border border-hair transition-colors"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popular Categories */}
                    <div>
                      <span className="font-mono text-[11px] uppercase text-muted tracking-tight block mb-2">
                        Popular Categories
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {MOCK_CATEGORIES.slice(0, 6).map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/category/${cat.slug}`}
                            onClick={closeSearch}
                            className="text-xs font-body bg-white hover:bg-paper text-ink px-3 py-1.5 rounded-[4px] border border-hair hover:border-ink transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
