"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { formatPrice } from "@/lib/utils";
import { X, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const router = useRouter();
  const { isCartOpen, closeCart } = useUIStore();
  const {
    items,
    removeItem,
    updateQuantity,
    getSubtotal,
    getShippingFee,
    getTotal,
    getFreeShippingProgress,
  } = useCartStore();

  const subtotal = getSubtotal();
  const shipping = getShippingFee();
  const total = getTotal();
  const { remaining, percentage } = getFreeShippingProgress();

  const handleCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
          />

          {/* Right Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 w-full sm:max-w-md h-full bg-white border-l border-hair flex flex-col justify-between shadow-2xl select-none"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-hair flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-red" />
                <span className="font-display font-extrabold text-sm uppercase tracking-tight text-ink">
                  Shopping Bag ({items.length})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 rounded hover:bg-paper text-muted hover:text-ink transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-5 py-3 bg-paper border-b border-hair font-mono text-[11px] text-muted">
              <div className="flex justify-between mb-1.5">
                <span className="font-bold text-ink">
                  {remaining === 0
                    ? "✓ Free shipping unlocked"
                    : `Add ${formatPrice(remaining)} for free delivery`}
                </span>
                <span>{percentage}%</span>
              </div>
              <div className="w-full h-1 bg-hair rounded-full overflow-hidden">
                <div
                  className="h-full bg-red transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto divide-y divide-hair px-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-3 font-body">
                  <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center text-muted">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <span className="font-display font-bold text-lg text-ink">
                    Your bag is empty
                  </span>
                  <p className="text-xs text-muted max-w-xs leading-relaxed">
                    Explore our latest 2026 drop of heavyweight tees and relaxed sets.
                  </p>
                  <button
                    onClick={() => {
                      closeCart();
                      router.push("/shop");
                    }}
                    className="bg-ink hover:bg-ink/90 text-white font-mono text-xs font-bold px-6 py-2.5 rounded-[4px] uppercase tracking-wider"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.variant.id} className="py-4 flex gap-3.5">
                    <div className="relative w-16 h-20 bg-tile rounded-[3px] overflow-hidden flex-shrink-0 border border-hair">
                      <Image
                        src={item.product.images[0]?.url || "/images/drop-1.jpg"}
                        alt={item.product.name}
                        fill
                        sizes="70px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            href={`/product/${item.product.slug}`}
                            onClick={closeCart}
                            className="font-body font-bold text-xs sm:text-sm text-ink hover:text-red transition-colors truncate"
                          >
                            {item.product.name}
                          </Link>
                          <span className="font-display font-bold text-xs sm:text-sm text-ink flex-shrink-0">
                            {formatPrice(
                              (item.variant.price_override ?? item.product.price) *
                                item.quantity
                            )}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-muted block mt-0.5">
                          Size: <span className="font-bold text-ink">{item.variant.size}</span>
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 font-mono text-xs">
                        <div className="flex items-center border border-hair rounded-[2px] bg-paper">
                          <button
                            onClick={() =>
                              updateQuantity(item.variant.id, item.quantity - 1)
                            }
                            className="px-2 py-0.5 text-ink hover:bg-tile transition-colors font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 font-bold text-ink min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.variant.id, item.quantity + 1)
                            }
                            className="px-2 py-0.5 text-ink hover:bg-tile transition-colors font-bold"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.variant.id)}
                          className="text-muted hover:text-red transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Actions */}
            {items.length > 0 && (
              <div className="p-5 border-t border-hair bg-paper space-y-4">
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-muted">
                    <span>Subtotal</span>
                    <span className="text-ink font-bold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green font-bold" : "text-ink"}>
                      {shipping === 0 ? "FREE" : formatPrice(shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-ink pt-2 border-t border-hair/60">
                    <span>Total</span>
                    <span className="font-display text-base text-red">{formatPrice(total)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-ink hover:bg-ink/90 active:scale-98 text-white py-3.5 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform"
                >
                  <span>Checkout Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
