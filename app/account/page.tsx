"use client";

import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { useFavouritesStore } from "@/store/useFavouritesStore";

export default function AccountPage() {
  const favCount = useFavouritesStore((state) => state.items.length);

  return (
    <div className="min-h-[100dvh] pb-24 bg-bg text-ink">
      <div className="pt-10 sm:pt-16 pb-8 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <span className="font-mono text-xs text-muted uppercase tracking-mono block mb-2">
            (Client Portal)
          </span>
          <h1 className="font-display font-extrabold text-[clamp(40px,7vw,100px)] leading-headline tracking-tighter uppercase text-ink">
            Account
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 space-y-12 font-mono text-xs">
        <div className="divide-y divide-hair border-y border-hair">
          <Link
            href="/track-order"
            className="py-4 flex items-center justify-between hover:text-muted cursor-pointer"
          >
            <span>Orders & Active Tracking</span>
            <span>→</span>
          </Link>
          <Link
            href="/saved"
            className="py-4 flex items-center justify-between hover:text-muted cursor-pointer"
          >
            <span>Saved Pieces ({favCount})</span>
            <span>→</span>
          </Link>
          <Link
            href="/shipping-policy"
            className="py-4 flex items-center justify-between hover:text-muted cursor-pointer"
          >
            <span>Shipping & Exchange Policies</span>
            <span>→</span>
          </Link>
        </div>

        <div className="pt-4 text-muted">
          Guest session active. Saved pieces persist in local storage.
        </div>
      </div>
    </div>
  );
}
