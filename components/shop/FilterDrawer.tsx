"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MOCK_CATEGORIES } from "@/lib/mock-data";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedSort: string;
  onSelectSort: (sort: string) => void;
  selectedSize: string;
  onSelectSize: (size: string) => void;
  onReset: () => void;
}

export function FilterDrawer({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
  selectedSize,
  onSelectSize,
  onReset,
}: FilterDrawerProps) {
  const sizes = ["ALL", "S", "M", "L", "XL"];
  const sortOptions = [
    { label: "Recommended / Best Selling", value: "bestseller" },
    { label: "Newest First", value: "newest" },
    { label: "Price: Low to High", value: "price-low" },
    { label: "Price: High to Low", value: "price-high" },
    { label: "Discount", value: "discount" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/20"
          />

          {/* Clean White Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 w-full sm:max-w-md h-full bg-bg border-l border-hair p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-hair">
                <span className="font-mono text-xs uppercase tracking-mono text-ink">
                  Filter & Sort
                </span>
                <button
                  onClick={onClose}
                  className="font-mono text-xs uppercase tracking-mono text-muted hover:text-ink cursor-pointer"
                >
                  Close (×)
                </button>
              </div>

              {/* Sort Section */}
              <div className="py-6 border-b border-hair">
                <span className="font-mono text-xs uppercase tracking-mono text-muted block mb-3">
                  Sort
                </span>
                <div className="space-y-1.5 font-mono text-xs">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => onSelectSort(opt.value)}
                      className={`w-full text-left py-2 px-3 transition-colors cursor-pointer flex items-center justify-between ${
                        selectedSort === opt.value
                          ? "bg-paper text-ink font-bold"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      <span>{opt.label}</span>
                      {selectedSort === opt.value && <span>•</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes Section: Square Outlined Boxes */}
              <div className="py-6 border-b border-hair">
                <span className="font-mono text-xs uppercase tracking-mono text-muted block mb-3">
                  Size
                </span>
                <div className="flex gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => onSelectSize(s === "ALL" ? "" : s)}
                      className={`w-10 h-10 border text-xs font-mono transition-all cursor-pointer ${
                        (selectedSize === "" && s === "ALL") || selectedSize === s
                          ? "bg-ink text-white border-ink font-bold"
                          : "border-hair text-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="py-6">
                <span className="font-mono text-xs uppercase tracking-mono text-muted block mb-3">
                  Category
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <button
                    onClick={() => onSelectCategory("all")}
                    className={`py-1.5 px-3 border cursor-pointer ${
                      selectedCategory === "all" || !selectedCategory
                        ? "bg-ink text-white border-ink font-bold"
                        : "border-hair text-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    All Categories
                  </button>
                  {MOCK_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory(cat.slug)}
                      className={`py-1.5 px-3 border cursor-pointer ${
                        selectedCategory === cat.slug
                          ? "bg-ink text-white border-ink font-bold"
                          : "border-hair text-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-hair flex items-center gap-3">
              <button
                onClick={onReset}
                className="flex-1 py-3 border border-hair text-xs font-mono uppercase tracking-mono text-muted hover:text-ink"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="flex-1 btn-ink py-3 text-xs font-mono uppercase tracking-mono cursor-pointer"
              >
                Apply
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
