"use client";

import { Truck, RotateCcw, ShieldCheck } from "lucide-react";

export function TrustBar() {
  return (
    <section className="w-full px-3 sm:px-6 lg:px-10 py-6 sm:py-8 mt-2 bg-paper border-t border-hair select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Exact Stitch 3-Column Service Promises */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-ink" strokeWidth={1.5} />
            <span className="font-mono text-xs sm:text-sm font-bold uppercase text-ink">
              Free Ship
            </span>
            <span className="font-body text-[11px] sm:text-xs text-muted">
              Orders over ₹999
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 border-x border-hair">
            <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-ink" strokeWidth={1.5} />
            <span className="font-mono text-xs sm:text-sm font-bold uppercase text-ink">
              7 Day Return
            </span>
            <span className="font-body text-[11px] sm:text-xs text-muted">
              Hassle-free pickup
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-red" strokeWidth={1.5} />
            <span className="font-mono text-xs sm:text-sm font-bold uppercase text-ink">
              100% Original
            </span>
            <span className="font-body text-[11px] sm:text-xs text-muted">
              Direct streetwear
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
