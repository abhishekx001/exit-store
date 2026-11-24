"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const router = useRouter();
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

  if (items.length === 0) {
    return (
      <div className="min-h-[70dvh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-4 font-body bg-white text-ink">
        <div className="w-16 h-16 rounded-full bg-paper flex items-center justify-center text-muted">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h1 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-ink">
          YOUR BAG IS EMPTY
        </h1>
        <p className="max-w-xs text-xs text-muted leading-relaxed">
          Explore our collection of heavyweight T-shirts, oversized fits, and tailored pants.
        </p>
        <Link
          href="/shop"
          className="bg-ink hover:bg-ink/90 text-white font-mono text-xs font-bold px-8 py-3 rounded-[4px] uppercase tracking-wider transition-colors"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] pb-24 bg-white text-ink">
      <div className="pt-6 sm:pt-10 pb-4 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex items-baseline gap-3">
            <h1 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-ink">
              SHOPPING BAG
            </h1>
            <span className="font-mono text-sm sm:text-base text-muted">
              ({items.length} Items)
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Items */}
          <div className="lg:col-span-8 space-y-6">
            {/* Free Shipping Bar with Red Accent */}
            <div className="p-4 bg-paper rounded-[4px] border border-hair font-mono text-xs text-muted">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-ink">
                  {remaining === 0
                    ? "🎉 Free shipping unlocked!"
                    : `Add ${formatPrice(remaining)} more for free shipping`}
                </span>
                <span>{percentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-hair rounded-full overflow-hidden">
                <div
                  className="h-full bg-red transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="divide-y divide-hair border-y border-hair">
              {items.map((item) => (
                <div key={item.variant.id} className="py-5 flex gap-4 sm:gap-6">
                  <div className="relative w-20 h-24 bg-tile rounded-[4px] overflow-hidden flex-shrink-0 border border-hair">
                    <Image
                      src={item.product.images[0]?.url || "/images/drop-1.jpg"}
                      alt={item.product.name}
                      fill
                      sizes="90px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-body font-bold text-sm text-ink hover:text-red transition-colors truncate"
                        >
                          {item.product.name}
                        </Link>
                        <span className="font-display font-bold text-sm text-ink flex-shrink-0">
                          {formatPrice(
                            (item.variant.price_override ?? item.product.price) *
                              item.quantity
                          )}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-muted block mt-1">
                        Size: <span className="font-bold text-ink">{item.variant.size}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3 font-mono text-xs">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-hair rounded-[3px] bg-paper">
                        <button
                          onClick={() =>
                            updateQuantity(item.variant.id, item.quantity - 1)
                          }
                          className="px-2.5 py-1 text-ink hover:bg-tile transition-colors font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-bold text-ink min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.variant.id, item.quantity + 1)
                          }
                          className="px-2.5 py-1 text-ink hover:bg-tile transition-colors font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.variant.id)}
                        className="text-muted hover:text-red transition-colors flex items-center gap-1 text-[11px]"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4">
            <div className="border border-hair rounded-[4px] p-6 bg-paper space-y-5 sticky top-24 font-body text-xs">
              <span className="font-display font-bold text-sm uppercase text-ink block border-b border-hair pb-3">
                Order Summary
              </span>

              <div className="space-y-3 font-mono">
                <div className="flex justify-between text-muted">
                  <span>Subtotal</span>
                  <span className="text-ink font-bold">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between text-muted">
                  <span>Delivery</span>
                  <span className={shipping === 0 ? "text-green font-bold" : "text-ink"}>
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>

                <div className="pt-3 border-t border-hair flex justify-between text-sm font-bold text-ink">
                  <span>Estimated Total</span>
                  <span className="font-display text-base text-red">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full bg-ink hover:bg-ink/90 text-white py-3.5 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5 text-red" />
              </button>

              <div className="text-[11px] font-mono text-muted text-center space-y-1">
                <p>✓ Cash on Delivery available at checkout</p>
                <p>✓ 7-Day easy doorstep exchange</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
