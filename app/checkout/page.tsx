"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { BRAND, BRAND_NAME, BRAND_RED } from "@/lib/brand";
import { toast } from "sonner";
import { ShieldCheck, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, getSubtotal, getDiscount, getShippingFee, getTotal, clearCart } =
    useCartStore();

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const shipping = getShippingFee();
  const total = getTotal();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"cod" | "razorpay">("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [placedOrderNumber, setPlacedOrderNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Autofill city/state if user types 6-digit Indian PIN code
    if (name === "pincode" && value.length === 6) {
      if (value.startsWith("11")) {
        setFormData((p) => ({ ...p, city: "New Delhi", state: "Delhi" }));
      } else if (value.startsWith("40")) {
        setFormData((p) => ({ ...p, city: "Mumbai", state: "Maharashtra" }));
      } else if (value.startsWith("56")) {
        setFormData((p) => ({ ...p, city: "Bengaluru", state: "Karnataka" }));
      } else if (value.startsWith("60")) {
        setFormData((p) => ({ ...p, city: "Chennai", state: "Tamil Nadu" }));
      }
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.line1 || !formData.pincode) {
      toast.error("Please fill in your delivery details");
      return;
    }

    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);
    const orderNumber = `EX-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      const newOrder = {
        order_number: orderNumber,
        items,
        subtotal,
        discount,
        shipping,
        total,
        address: formData,
        payment_method: paymentMethod,
        payment_status: paymentMethod === "cod" ? "pending" : "paid",
        status: "confirmed",
        created_at: new Date().toISOString(),
      };

      try {
        const existing = JSON.parse(localStorage.getItem("exit_orders") || "[]");
        localStorage.setItem("exit_orders", JSON.stringify([newOrder, ...existing]));
      } catch {}

      clearCart();
      setIsSubmitting(false);
      setPlacedOrderNumber(orderNumber);
      setOrderComplete(true);
    }, 600);
  };

  // Order Confirmed View
  if (orderComplete) {
    return (
      <div className="min-h-[85dvh] flex items-center justify-center px-4 py-16 bg-white text-ink">
        <div className="max-w-md w-full space-y-6 text-center select-none bg-paper p-8 rounded-[6px] border border-hair">
          <div className="w-16 h-16 rounded-full bg-green/10 text-green flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="font-mono text-xs text-red font-bold uppercase tracking-wider block mb-1">
              {BRAND_NAME}
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-ink">
              ORDER CONFIRMED
            </h1>
            <p className="text-xs font-mono text-muted mt-1">
              Order ID: <span className="font-bold text-ink">{placedOrderNumber}</span>
            </p>
          </div>

          <div className="border-t border-b border-hair py-4 font-mono text-xs space-y-2 text-left">
            <div className="flex justify-between">
              <span className="text-muted">Recipient:</span>
              <span className="text-ink font-bold">{formData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Deliver To:</span>
              <span className="text-ink text-right max-w-[200px] truncate">
                {formData.line1}, {formData.city} - {formData.pincode}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Payment Mode:</span>
              <span className="text-ink uppercase font-bold">{paymentMethod}</span>
            </div>
            <div className="flex justify-between text-sm pt-2 border-t border-hair font-bold">
              <span className="text-muted">Total Due:</span>
              <span className="text-red font-display">{formatPrice(total)}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 font-mono text-xs">
            <Link
              href={`/track-order?id=${placedOrderNumber}`}
              className="bg-ink hover:bg-ink/90 text-white py-3 px-6 rounded-[4px] uppercase tracking-wider font-bold transition-colors"
            >
              Track Order Status →
            </Link>
            <Link
              href="/"
              className="border border-hair hover:border-ink py-2.5 px-6 rounded-[4px] text-muted hover:text-ink uppercase tracking-wider transition-colors"
            >
              Return to Store
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[70dvh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-4 font-mono text-xs text-muted bg-white">
        <p>No items in bag to checkout.</p>
        <Link href="/shop" className="bg-ink text-white font-mono font-bold px-6 py-2.5 rounded-[4px]">
          Return to Store
        </Link>
      </div>
    );
  }

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
              EXPRESS CHECKOUT
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-6 sm:pt-10">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left: Input Sections */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Contact Information */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-red font-bold uppercase tracking-wider block">
                01. CONTACT INFORMATION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                    Mobile Number (SMS & WhatsApp updates) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    className="w-full bg-paper border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full bg-paper border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Address */}
            <div className="space-y-4 pt-4 border-t border-hair">
              <span className="font-mono text-xs text-red font-bold uppercase tracking-wider block">
                02. SHIPPING ADDRESS
              </span>
              <div className="space-y-3">
                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Recipient's name"
                    className="w-full bg-paper border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                    House / Flat / Building No. *
                  </label>
                  <input
                    type="text"
                    name="line1"
                    required
                    value={formData.line1}
                    onChange={handleInputChange}
                    placeholder="Street address, building, apartment"
                    className="w-full bg-paper border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                    Landmark / Area (Optional)
                  </label>
                  <input
                    type="text"
                    name="line2"
                    value={formData.line2}
                    onChange={handleInputChange}
                    placeholder="Near metro station, landmark"
                    className="w-full bg-paper border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      maxLength={6}
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="6 digits"
                      className="w-full bg-paper border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="w-full bg-paper border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-muted uppercase tracking-mono block mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      className="w-full bg-paper border border-hair rounded-[4px] p-2.5 text-xs text-ink font-mono focus:outline-none focus:border-ink placeholder:text-muted/60"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="space-y-4 pt-4 border-t border-hair font-mono text-xs">
              <span className="font-bold text-red uppercase tracking-wider block">
                03. PAYMENT METHOD
              </span>
              <div className="space-y-2">
                <label
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-start gap-3 p-4 rounded-[4px] border cursor-pointer transition-colors ${
                    paymentMethod === "cod"
                      ? "border-ink bg-paper text-ink font-bold"
                      : "border-hair text-muted hover:border-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mt-0.5 accent-ink"
                  />
                  <div>
                    <span className="block text-ink uppercase tracking-mono font-bold">
                      Cash on Delivery (COD)
                    </span>
                    <span className="text-[11px] text-muted font-normal block mt-0.5">
                      Pay via Cash or UPI QR scan when the package arrives at your door.
                    </span>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod("razorpay")}
                  className={`flex items-start gap-3 p-4 rounded-[4px] border cursor-pointer transition-colors ${
                    paymentMethod === "razorpay"
                      ? "border-ink bg-paper text-ink font-bold"
                      : "border-hair text-muted hover:border-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === "razorpay"}
                    onChange={() => setPaymentMethod("razorpay")}
                    className="mt-0.5 accent-ink"
                  />
                  <div>
                    <span className="block text-ink uppercase tracking-mono font-bold">
                      Prepaid Online (UPI / GPay / Cards / NetBanking)
                    </span>
                    <span className="text-[11px] text-muted font-normal block mt-0.5">
                      Faster dispatch and 100% contactless doorstep handover.
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5">
            <div className="border border-hair rounded-[4px] p-6 bg-paper space-y-5 sticky top-24 font-body text-xs">
              <span className="font-display font-bold text-sm uppercase text-ink block border-b border-hair pb-3">
                Order Items ({items.length})
              </span>

              {/* Items row */}
              <div className="divide-y divide-hair max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.variant.id} className="py-3 flex gap-3">
                    <div className="relative w-12 h-14 bg-tile rounded-[2px] overflow-hidden flex-shrink-0 border border-hair">
                      <Image
                        src={item.product.images[0]?.url || "/images/5-sleeve/1.jpeg"}
                        alt={item.product.name}
                        fill
                        sizes="50px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-ink font-bold truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-muted text-[11px] block mt-0.5 font-mono">
                        Size: {item.variant.size} • Qty: {item.quantity}
                      </span>
                    </div>
                    <span className="font-display font-bold text-ink text-xs">
                      {formatPrice(
                        (item.variant.price_override ?? item.product.price) *
                          item.quantity
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtotal & Total */}
              <div className="border-t border-hair pt-4 space-y-2 font-mono text-xs">
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
                  <span>Total Amount</span>
                  <span className="font-display text-base text-red">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ink hover:bg-ink/90 active:scale-98 text-white py-4 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform disabled:opacity-50"
              >
                <span>{isSubmitting ? "Placing Order..." : "Confirm & Place Order"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-red" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-muted pt-2 border-t border-hair/60">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-red" /> Secure SSL
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-red" /> Fast Dispatch
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
