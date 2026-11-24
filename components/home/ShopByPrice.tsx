"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PRICE_TILES = [
  { price: "₹499", label: "UNDER ₹499", filter: 499 },
  { price: "₹799", label: "UNDER ₹799", filter: 799 },
  { price: "₹999", label: "UNDER ₹999", filter: 999 },
  { price: "₹1499", label: "UNDER ₹1499", filter: 1499 },
];

export function ShopByPrice() {
  return (
    <section className="py-8 sm:py-12 bg-paper border-b border-hair">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-red" />
          <h2 className="font-display font-extrabold text-lg sm:text-2xl uppercase tracking-tight text-ink">
            SHOP BY PRICE
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {PRICE_TILES.map((tile) => (
            <Link
              key={tile.filter}
              href={`/shop?maxPrice=${tile.filter}`}
              className="group bg-white p-5 rounded-[4px] border border-hair hover:border-red transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-muted text-xs font-mono uppercase tracking-tight">
                <span>Budget</span>
                <ArrowUpRight className="w-4 h-4 group-hover:text-red transition-colors" />
              </div>
              <div className="pt-4">
                <span className="font-mono text-xs text-muted block mb-0.5">UNDER</span>
                <span className="font-display font-black text-2xl sm:text-3xl text-red tracking-tight leading-none group-hover:translate-x-1 transition-transform inline-block">
                  {tile.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
