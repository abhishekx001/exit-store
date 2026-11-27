"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice, buildWhatsAppCartLink } from "@/lib/utils";
import { BRAND, BRAND_NAME, BRAND_RED } from "@/lib/brand";
import { MessageCircle, ShieldCheck, Truck, RefreshCw, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  const { items, getSubtotal, getShippingFee, getTotal } = useCartStore();

  const subtotal = getSubtotal();
  const shipping = getShippingFee();
  const total = getTotal();

  const [customerName, setCustomerName] = useState("");
  const [customerCity, setCustomerCity] = useState("");

  if (items.length === 0) {
    return (
      <div className="min-h-[70dvh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-4 font-mono text-xs text-muted bg-white">
        <p className="text-sm font-body text-ink">Your bag is currently empty.</p>
        <Link
          href="/shop"
          className="bg-ink hover:bg-ink/90 text-white font-mono font-bold px-6 py-2.5 rounded-[4px] uppercase tracking-wider"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  // Construct customized WhatsApp message with optional customer info
  const number = BRAND.whatsappNumber.replace(/[^0-9]/g, "");
  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}* (Size: ${item.variant?.size || "Free Size"}, Qty: ${item.quantity}) — ₹${(item.product.price * item.quantity).toLocaleString("en-IN")}`
    )
    .join("\n");

  const customerInfo = customerName || customerCity
    ? `\n*Customer Info:*\n${customerName ? `• Name: ${customerName}\n` : ""}${customerCity ? `• City: ${customerCity}\n` : ""}`
    : "";

  const text = `Hello ${BRAND.name}, I would like to book my order:\n\n${itemsList}\n\n*Total Amount: ₹${total.toLocaleString("en-IN")}*${customerInfo}\nPlease confirm availability and dispatch details!`;
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-[100dvh] pb-24 bg-white text-ink">
      {/* Header */}
      <div className="pt-6 sm:pt-10 pb-4 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <span
              className="font-display italic font-black text-xl sm:text-2xl tracking-tight uppercase"
              style={{ color: BRAND_RED }}
            >
              {BRAND_NAME}
            </span>
            <span className="text-muted text-sm">•</span>
            <h1 className="font-display font-bold text-lg sm:text-xl uppercase tracking-tight text-ink">
              WHATSAPP BOOKING
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: WhatsApp Direct Confirmation */}
          <div className="md:col-span-7 space-y-6">
            <div className="p-5 sm:p-6 bg-paper rounded-lg border border-hair space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5 fill-[#25D366]" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-base uppercase text-ink">
                    Direct WhatsApp Checkout
                  </h2>
                  <p className="font-body text-xs text-muted">
                    Instant studio confirmation with zero online payment hassle
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                    City / Pincode (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    placeholder="e.g. Mumbai 400001"
                    className="w-full bg-white border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                  />
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-13 bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 text-white rounded-[4px] font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer mt-4"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>CONFIRM &amp; BOOK ON WHATSAPP</span>
              </a>

              <p className="font-mono text-[11px] text-muted text-center pt-1">
                Tapping opens WhatsApp with your order details pre-filled.
              </p>
            </div>

            {/* Service Guarantees */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-paper/60 rounded-lg border border-hair text-center font-mono text-[11px] text-muted">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-ink" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-ink" />
                <span>Cash on Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-4 h-4 text-ink" />
                <span>7-Day Doorstep Exchange</span>
              </div>
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {/* Right: Bag Items Summary */}
          <div className="md:col-span-5">
            <div className="border border-hair rounded-lg p-5 bg-paper space-y-4 sticky top-24 font-body text-xs">
              <div className="flex items-center justify-between border-b border-hair pb-3">
                <span className="font-display font-bold text-sm uppercase text-ink">
                  Bag Items ({items.length})
                </span>
                <Link href="/cart" className="font-mono text-[11px] text-red underline hover:text-red/80">
                  Edit
                </Link>
              </div>

              {/* Items List */}
              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1 divide-y divide-hair/40">
                {items.map((item) => (
                  <div key={item.variant.id} className="pt-2.5 first:pt-0 flex gap-3">
                    <div className="relative w-14 h-18 bg-tile rounded-[3px] overflow-hidden flex-shrink-0 border border-hair">
                      <Image
                        src={item.product.images[0]?.url || "/images/5-sleeve/1.jpeg"}
                        alt={item.product.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-bold text-xs text-ink truncate">
                        {item.product.name}
                      </p>
                      <p className="font-mono text-[11px] text-muted mt-0.5">
                        Size: {item.variant.size} • Qty: {item.quantity}
                      </p>
                      <p className="font-mono font-bold text-xs text-red mt-1">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-hair pt-3 space-y-2 font-mono">
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
                <div className="flex justify-between text-sm font-bold text-ink pt-2 border-t border-hair">
                  <span>Total Due</span>
                  <span className="font-display text-base text-red">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
