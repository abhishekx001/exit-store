"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, LayoutGrid, Heart, ShoppingBag, User } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useFavouritesStore } from "@/store/useFavouritesStore";
import { useUIStore } from "@/store/useUIStore";
import { cn } from "@/lib/utils";

export function BottomTabBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const cartCount = useCartStore((s) => s.getItemCount());
  const favCount = useFavouritesStore((s) => s.items.length);
  const { openCart, openMenu } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY + 10) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY - 10) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Don't show bottom bar on checkout
  if (pathname.startsWith("/checkout")) return null;

  const isHome = pathname === "/";
  const isWishlist = pathname === "/saved";
  const isAccount = pathname.startsWith("/account");
  const isShop = pathname.startsWith("/shop") || pathname.startsWith("/category");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-hair pb-safe"
        >
          <div className="grid grid-cols-5 h-14 items-center">
            {/* 1. Home */}
            <Link
              href="/"
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 text-[10px] font-body transition-colors",
                isHome ? "text-red font-semibold" : "text-muted hover:text-ink"
              )}
            >
              <Home className="w-5 h-5" strokeWidth={1.5} />
              <span>Home</span>
              {isHome && <span className="w-1 h-1 bg-red rounded-full mt-[-2px]" />}
            </Link>

            {/* 2. Categories */}
            <button
              onClick={openMenu}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 text-[10px] font-body transition-colors",
                isShop ? "text-red font-semibold" : "text-muted hover:text-ink"
              )}
            >
              <LayoutGrid className="w-5 h-5" strokeWidth={1.5} />
              <span>Categories</span>
              {isShop && <span className="w-1 h-1 bg-red rounded-full mt-[-2px]" />}
            </button>

            {/* 3. Wishlist */}
            <Link
              href="/saved"
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 text-[10px] font-body transition-colors relative",
                isWishlist ? "text-red font-semibold" : "text-muted hover:text-ink"
              )}
            >
              <div className="relative">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
                {favCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red text-white text-[9px] font-bold px-1 py-0.2 rounded-full min-w-[14px] text-center leading-tight">
                    {favCount}
                  </span>
                )}
              </div>
              <span>Wishlist</span>
              {isWishlist && <span className="w-1 h-1 bg-red rounded-full mt-[-2px]" />}
            </Link>

            {/* 4. Bag */}
            <button
              onClick={openCart}
              className="flex flex-col items-center justify-center gap-0.5 text-[10px] font-body text-muted hover:text-ink transition-colors relative"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red text-white text-[9px] font-bold px-1 py-0.2 rounded-full min-w-[14px] text-center leading-tight">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>Bag</span>
            </button>

            {/* 5. Account */}
            <Link
              href="/account"
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 text-[10px] font-body transition-colors",
                isAccount ? "text-red font-semibold" : "text-muted hover:text-ink"
              )}
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
              <span>Account</span>
              {isAccount && <span className="w-1 h-1 bg-red rounded-full mt-[-2px]" />}
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
