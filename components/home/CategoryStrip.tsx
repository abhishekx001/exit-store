"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { MOCK_CATEGORIES } from "@/lib/mock-data";

export function CategoryStrip() {
  return (
    <section className="flex flex-col w-full py-2 sm:py-4 select-none">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Section Header with Stitch red indicator bar */}
        <div className="flex items-center justify-between px-3 sm:px-6 lg:px-10 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-3.5 bg-red rounded-sm" />
            <h2 className="font-display font-bold text-sm sm:text-base uppercase text-ink tracking-tight">
              Shop By Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="font-mono text-xs font-bold uppercase text-red tracking-wider flex items-center hover:underline"
          >
            <span>All</span>
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>

        {/* Category Square Image Cards Carousel (Exact Stitch spec) */}
        <div className="w-full overflow-x-auto no-scrollbar px-3 sm:px-6 lg:px-10">
          <div className="flex gap-2.5 sm:gap-4 pb-2">
            {MOCK_CATEGORIES.slice(0, 6).map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="flex flex-col items-center gap-1.5 w-20 sm:w-28 shrink-0 group"
              >
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-tile flex items-center justify-center border border-hair group-hover:border-ink transition-colors">
                  <Image
                    src={cat.image_url}
                    alt={cat.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover group-active:scale-105 transition-transform"
                  />
                </div>
                <span className="font-mono text-xs font-bold uppercase text-ink tracking-tight text-center truncate w-full group-hover:text-red transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
