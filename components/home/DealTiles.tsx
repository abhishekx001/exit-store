"use client";

import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Zap, CheckCircle2, Sparkles } from "lucide-react";

export function DealTiles() {
  return (
    <section className="flex flex-col w-full px-3 sm:px-6 lg:px-10 py-3 sm:py-6 select-none">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Deal Tiles: High-Impact 2x2 Grid (Exact Stitch spec) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {/* Tile 1: MIN 50% OFF */}
          <Link
            href="/shop?sort=discount"
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-paper flex flex-col justify-between p-3.5 sm:p-5 group border border-hair hover:border-red transition-colors"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-1.5 py-0.5 rounded bg-red text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                Limited
              </span>
              <TrendingUp className="w-4 h-4 text-red" />
            </div>
            <div className="relative z-10 flex flex-col">
              <span className="font-display font-black text-3xl sm:text-4xl text-red tracking-tight leading-none">
                50%
              </span>
              <span className="font-mono font-bold text-xs uppercase text-ink tracking-wider mt-0.5">
                Min Off Drop
              </span>
            </div>
          </Link>

          {/* Tile 2: UNDER ₹499 */}
          <Link
            href="/shop?maxPrice=499"
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-paper flex flex-col justify-between p-3.5 sm:p-5 group border border-hair hover:border-red transition-colors"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-1.5 py-0.5 rounded bg-ink text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                Steals
              </span>
              <Zap className="w-4 h-4 text-muted group-hover:text-red transition-colors" />
            </div>
            <div className="relative z-10 flex flex-col">
              <span className="font-display font-bold text-sm uppercase text-ink tracking-tight leading-none">
                UNDER
              </span>
              <span className="font-display font-black text-2xl sm:text-3xl text-red tracking-tight leading-none mt-0.5">
                ₹499
              </span>
              <span className="font-body text-[11px] text-muted mt-0.5 truncate">
                Everyday basic tees
              </span>
            </div>
          </Link>

          {/* Tile 3: UNDER ₹999 */}
          <Link
            href="/shop?maxPrice=999"
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-paper flex flex-col justify-between p-3.5 sm:p-5 group border border-hair hover:border-red transition-colors"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-1.5 py-0.5 rounded bg-ink text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                Picks
              </span>
              <CheckCircle2 className="w-4 h-4 text-muted group-hover:text-red transition-colors" />
            </div>
            <div className="relative z-10 flex flex-col">
              <span className="font-display font-bold text-sm uppercase text-ink tracking-tight leading-none">
                UNDER
              </span>
              <span className="font-display font-black text-2xl sm:text-3xl text-ink tracking-tight leading-none mt-0.5 group-hover:text-red transition-colors">
                ₹999
              </span>
              <span className="font-body text-[11px] text-muted mt-0.5 truncate">
                Premium boxy cuts
              </span>
            </div>
          </Link>

          {/* Tile 4: JUST IN */}
          <Link
            href="/shop?sort=newest"
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-paper flex flex-col justify-between p-3.5 sm:p-5 group border border-hair hover:border-red transition-colors"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-1.5 py-0.5 rounded bg-red text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                Fresh
              </span>
              <Sparkles className="w-4 h-4 text-red" />
            </div>
            <div className="relative z-10 flex flex-col">
              <span className="font-display font-bold text-sm uppercase text-red tracking-tight leading-none">
                JUST IN
              </span>
              <span className="font-body font-bold text-sm text-ink mt-0.5">
                Weekly Edits
              </span>
              <span className="font-body text-[11px] text-muted">
                34 New Styles
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
