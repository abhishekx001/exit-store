"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BannerRow() {
  return (
    <section className="py-6 sm:py-10 bg-white border-b border-hair">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Banner 1: 5-Sleeve Tees */}
          <Link
            href="/category/5-sleeve"
            className="group relative aspect-[16/9] sm:aspect-[21/9] rounded-[4px] overflow-hidden bg-tile border border-hair"
          >
            <Image
              src="/images/5-sleeve/10-949.jpeg"
              alt="5-Sleeve Tees"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <span className="font-mono text-[10px] sm:text-xs text-red font-bold uppercase tracking-wider mb-1">
                EVERYDAY DROP
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight">
                5-SLEEVE TEES — FROM ₹799
              </h3>
              <div className="flex items-center gap-1 text-xs font-mono font-bold mt-2 text-white/90 group-hover:text-white">
                <span>Shop 5-Sleeve</span>
                <ArrowRight className="w-3.5 h-3.5 text-red transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Banner 2: Heavyweight Hoodies */}
          <Link
            href="/category/hoodies"
            className="group relative aspect-[16/9] sm:aspect-[21/9] rounded-[4px] overflow-hidden bg-tile border border-hair"
          >
            <Image
              src="/images/Hoodies/4-1199.jpeg"
              alt="Heavyweight Hoodies"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <span className="font-mono text-[10px] sm:text-xs text-red font-bold uppercase tracking-wider mb-1">
                STUDIO SPECIAL
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight">
                HEAVY FLEECE HOODIES — ₹1,199
              </h3>
              <div className="flex items-center gap-1 text-xs font-mono font-bold mt-2 text-white/90 group-hover:text-white">
                <span>Explore Hoodies</span>
                <ArrowRight className="w-3.5 h-3.5 text-red transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
