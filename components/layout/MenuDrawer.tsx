"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MessageCircle, HelpCircle, Package, ShieldCheck } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { MOCK_CATEGORIES } from "@/lib/mock-data";
import { BRAND, BRAND_NAME, BRAND_RED } from "@/lib/brand";

export function MenuDrawer() {
  const { isMenuOpen, closeMenu } = useUIStore();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-ink/40 backdrop-blur-[2px]"
          />

          {/* Drawer Slide-in from Left */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[85%] max-w-[360px] bg-white h-full flex flex-col justify-between shadow-2xl z-10 overflow-y-auto"
          >
            {/* Top Bar with Brand */}
            <div>
              <div className="p-4 border-b border-hair flex items-center justify-between">
                <div className="flex items-center">
                  <span
                    className="font-display italic font-black text-lg tracking-tight uppercase"
                    style={{ color: BRAND_RED }}
                  >
                    {BRAND_NAME}
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-1.5 hover:bg-paper rounded text-ink/70 hover:text-ink transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Links */}
              <div className="p-4">
                <span className="font-mono text-[10px] uppercase text-muted tracking-mono block mb-3">
                  Shop Categories
                </span>
                <nav className="flex flex-col divide-y divide-hair/60">
                  <Link
                    href="/shop"
                    onClick={closeMenu}
                    className="py-3 flex items-center justify-between font-body font-semibold text-sm text-ink hover:text-red transition-colors"
                  >
                    <span>ALL CLOTHING</span>
                    <ArrowRight className="w-4 h-4 text-muted" />
                  </Link>

                  {MOCK_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      onClick={closeMenu}
                      className="py-3 flex items-center justify-between font-body font-medium text-sm text-ink hover:text-red transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-7 h-7 rounded-[2px] bg-tile overflow-hidden flex-shrink-0">
                          <Image
                            src={cat.image_url}
                            alt={cat.name}
                            fill
                            sizes="30px"
                            className="object-cover"
                          />
                        </div>
                        <span>{cat.name}</span>
                      </div>
                      <span className="font-mono text-xs text-muted">
                        ({cat.item_count || 4})
                      </span>
                    </Link>
                  ))}

                  <Link
                    href="/category/sale"
                    onClick={closeMenu}
                    className="py-3 flex items-center justify-between font-body font-bold text-sm text-red hover:underline transition-colors"
                  >
                    <span>SALE ARCHIVE — UP TO 70% OFF</span>
                    <span className="font-mono text-xs text-red font-bold">HOT</span>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Bottom Service Section */}
            <div className="p-4 border-t border-hair bg-paper space-y-3">
              <div className="space-y-2 text-xs font-body text-ink">
                <Link
                  href="/track-order"
                  onClick={closeMenu}
                  className="flex items-center gap-2.5 text-ink/80 hover:text-ink py-1"
                >
                  <Package className="w-4 h-4 text-muted" />
                  <span>Track Order Status</span>
                </Link>

                <a
                  href={`https://wa.me/${BRAND.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
                    BRAND.whatsappPrefillMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-ink/80 hover:text-ink py-1"
                >
                  <MessageCircle className="w-4 h-4 text-green" />
                  <span>WhatsApp Concierge</span>
                </a>

                <Link
                  href="/shipping-policy"
                  onClick={closeMenu}
                  className="flex items-center gap-2.5 text-ink/80 hover:text-ink py-1"
                >
                  <ShieldCheck className="w-4 h-4 text-muted" />
                  <span>7-Day Return & COD Policy</span>
                </Link>
              </div>

              <div className="pt-2 border-t border-hair/60 text-[11px] font-mono text-muted">
                Free delivery on prepaid orders over ₹999.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
