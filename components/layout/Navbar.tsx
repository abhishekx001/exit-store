"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Search, Heart, ShoppingBag, User, X, ChevronDown } from "lucide-react";
import { BRAND, BRAND_NAME, BRAND_RED } from "@/lib/brand";
import { useCartStore } from "@/store/useCartStore";
import { useFavouritesStore } from "@/store/useFavouritesStore";
import { useUIStore } from "@/store/useUIStore";
import { MOCK_CATEGORIES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const NAV_CHIPS = [
  { label: "New In", href: "/shop?sort=newest" },
  { label: "Tees", href: "/category/t-shirts" },
  { label: "Oversized", href: "/category/oversized-tees" },
  { label: "Shirts", href: "/category/shirts" },
  { label: "Bottoms", href: "/category/trousers" },
  { label: "Outerwear", href: "/category/jackets" },
  { label: "Sale", href: "/category/sale", isSale: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const cartCount = useCartStore((s) => s.getItemCount());
  const favCount = useFavouritesStore((s) => s.items.length);

  const { openSearch, openCart, openMenu, isMenuOpen, closeMenu } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-hair transition-shadow duration-200">
      {/* =========================================================================
          DESKTOP NAVBAR (Single Row: min-w 1024px / lg)
         ========================================================================= */}
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
          {/* Left: Red EXIT STORE Wordmark in Bold Italics ALL CAPS */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 group focus:outline-none"
          >
            <span
              className="font-display italic font-black text-xl lg:text-2xl tracking-tight leading-none uppercase select-none transition-transform group-hover:scale-[1.02] translate-y-[1px]"
              style={{ color: BRAND_RED }}
            >
              {BRAND_NAME}
            </span>
          </Link>

          {/* Center: Modern Minimal Capsule Navigation */}
          <nav className="flex items-center gap-1 xl:gap-1.5 font-body">
            {NAV_CHIPS.map((chip) => {
              const isActive = pathname === chip.href;
              return (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-150",
                    chip.isSale
                      ? "text-red font-semibold bg-red/5 hover:bg-red/10 flex items-center gap-1.5"
                      : isActive
                      ? "bg-ink text-white font-semibold shadow-xs"
                      : "text-ink/75 hover:text-ink hover:bg-paper"
                  )}
                >
                  {chip.isSale && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                  )}
                  {chip.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Dedicated Search Bar + Actions (Wishlist, Bag, Account) */}
          <div className="flex items-center gap-4 xl:gap-6 flex-shrink-0">
            {/* Dedicated Search Input (min-w 320px - 360px) */}
            <button
              onClick={openSearch}
              className="w-[260px] xl:w-[320px] h-10 px-3.5 bg-paper hover:bg-tile rounded-full border border-hair text-left flex items-center gap-2.5 text-xs text-muted transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 text-muted flex-shrink-0" strokeWidth={1.5} />
              <span className="truncate">Search for shirts, tees, jackets…</span>
            </button>

            {/* Wishlist Icon with count badge */}
            <Link
              href="/saved"
              className="relative p-2 text-ink hover:text-red transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" strokeWidth={1.5} />
              {favCount > 0 && (
                <span className="absolute top-1 right-1 bg-red text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  {favCount}
                </span>
              )}
            </Link>

            {/* Bag Icon with count badge */}
            <button
              onClick={openCart}
              className="relative p-2 text-ink hover:text-red transition-colors"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-red text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account Icon */}
            <Link
              href="/account"
              className="p-2 text-ink hover:text-red transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE NAVBAR (MODERN STREAMLINED LAYOUT: lg:hidden)
         ========================================================================= */}
      <div className="lg:hidden flex flex-col w-full">
        {/* ROW 1: Hamburger | Lowercase Red exit store | Wishlist | Bag */}
        <div className="h-13 px-4 flex items-center justify-between border-b border-hair/50">
          {/* Left: Hamburger Menu */}
          <button
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
            className="p-1.5 -ml-1.5 text-ink hover:text-red transition-colors focus:outline-none"
            aria-label="Open navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>

          {/* Center: Red EXIT STORE in Bold Italics ALL CAPS */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center group focus:outline-none"
          >
            <span
              className="font-display italic font-black text-lg tracking-tight leading-none uppercase select-none translate-y-[1px]"
              style={{ color: BRAND_RED }}
            >
              {BRAND_NAME}
            </span>
          </Link>

          {/* Right: Wishlist & Bag with count badges */}
          <div className="flex items-center gap-1">
            <Link
              href="/saved"
              onClick={closeMenu}
              className="relative p-2 text-ink hover:text-red transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" strokeWidth={1.5} />
              {favCount > 0 && (
                <span className="absolute top-1 right-1 bg-red text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center leading-none">
                  {favCount}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              className="relative p-2 text-ink hover:text-red transition-colors"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-red text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ROW 2: Search Input */}
        <div className="px-3.5 py-1.5 border-b border-hair/40 bg-white">
          <button
            onClick={openSearch}
            className="w-full h-10 px-3.5 bg-paper hover:bg-tile/70 rounded-full border border-hair/60 flex items-center gap-2.5 text-xs text-muted transition-colors text-left"
          >
            <Search className="w-4 h-4 text-muted flex-shrink-0" strokeWidth={1.5} />
            <span className="truncate">Search shirts, tees, jackets…</span>
          </button>
        </div>

        {/* ROW 3: Modern Borderless Horizontal Capsule Nav */}
        <div className="w-full bg-white border-b border-hair/50 py-2">
          <div className="overflow-x-auto scrollbar-none px-3.5 flex items-center gap-1.5">
            {NAV_CHIPS.map((chip) => {
              const isActive = pathname === chip.href;
              return (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className={cn(
                    "flex-shrink-0 px-3.5 py-1 rounded-full text-xs font-medium tracking-tight whitespace-nowrap transition-all duration-150",
                    chip.isSale
                      ? "bg-red/10 text-red font-semibold hover:bg-red/15 flex items-center gap-1.5"
                      : isActive
                      ? "bg-ink text-white font-semibold shadow-xs"
                      : "bg-paper/90 text-ink/80 hover:bg-tile hover:text-ink"
                  )}
                >
                  {chip.isSale && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red" />
                  )}
                  {chip.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
