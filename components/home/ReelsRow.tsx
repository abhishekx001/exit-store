"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ShoppingBag } from "lucide-react";
import { MOCK_REELS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

export function ReelsRow() {
  return (
    <section className="py-8 sm:py-12 bg-white border-b border-hair">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red" />
            <h2 className="font-display font-extrabold text-lg sm:text-2xl uppercase tracking-tight text-ink">
              WATCH &amp; BUY
            </h2>
          </div>
          <span className="text-xs font-mono text-muted">
            Tap card to shop
          </span>
        </div>

        {/* 9:16 Reel Cards */}
        <div className="flex gap-3 sm:gap-5 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          {MOCK_REELS.map((reel) => {
            const product = reel.product;
            return (
              <div
                key={reel.id}
                className="group relative flex-shrink-0 w-[42vw] sm:w-[26vw] lg:w-[18vw] max-w-[240px] aspect-[9/16] rounded-[4px] overflow-hidden bg-tile border border-hair"
              >
                {/* Poster / Video Thumbnail */}
                <Image
                  src={reel.poster_url}
                  alt={reel.title}
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play Badge */}
                <div className="absolute top-3 left-3 p-1.5 rounded-full bg-black/60 text-white backdrop-blur-sm">
                  <Play className="w-3 h-3 fill-white" />
                </div>

                {/* Bottom Overlay with Product Link and Price Pill */}
                {product && (
                  <Link
                    href={`/product/${product.slug}`}
                    className="absolute inset-x-2.5 bottom-2.5 bg-white/95 backdrop-blur-sm p-2 rounded-[3px] border border-hair shadow-md flex items-center justify-between gap-2 hover:bg-white transition-colors"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-body font-bold text-ink truncate leading-tight">
                        {product.name}
                      </p>
                      <p className="text-[10px] font-display font-bold text-red mt-0.5">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <div className="p-1.5 bg-red text-white rounded-[2px] flex-shrink-0">
                      <ShoppingBag className="w-3 h-3" />
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
