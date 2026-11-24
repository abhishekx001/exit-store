"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { BRAND, BRAND_NAME, BRAND_RED } from "@/lib/brand";
import { MOCK_CATEGORIES } from "@/lib/mock-data";
import { ArrowRight, ShieldCheck, Truck, RefreshCw, CreditCard } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubscribed(true);
    toast.success("Subscribed to drop releases");
  };

  return (
    <footer className="bg-paper border-t border-hair text-ink pt-12 sm:pt-16 pb-20 lg:pb-12 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 space-y-10 sm:space-y-12">
        {/* Top Row: Red EXIT STORE Wordmark in Bold Italics ALL CAPS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-hair pb-8">
          <div className="flex items-center">
            <span
              className="font-display italic font-black text-2xl sm:text-4xl tracking-tight uppercase"
              style={{ color: BRAND_RED }}
            >
              {BRAND_NAME}
            </span>
          </div>

          <p className="text-xs font-mono text-muted max-w-sm">
            Architectural men&apos;s silhouettes & everyday heavyweight garments. Designed in India.
          </p>
        </div>

        {/* 4 Columns: Categories | Orders & Help | Information | Newsletter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-body">
          {/* Column 1: Categories */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-mono text-ink font-bold block">
              Categories
            </span>
            <ul className="space-y-2 text-muted">
              {MOCK_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-ink transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/category/sale"
                  className="text-red font-semibold hover:underline"
                >
                  Sale Archive (Up to 70% Off)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Orders & Help */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-mono text-ink font-bold block">
              Orders & Help
            </span>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/track-order" className="hover:text-ink transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-ink transition-colors">
                  Shipping & COD Details
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-ink transition-colors">
                  7-Day Return & Exchange
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
                >
                  WhatsApp Support Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Information & Legal */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-mono text-ink font-bold block">
              Information
            </span>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/about" className="hover:text-ink transition-colors">
                  About EXIT STORE
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-ink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink transition-colors">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-mono text-ink font-bold block">
              Drop Notifications
            </span>
            <p className="text-muted text-xs">
              Subscribe for VIP access to limited drops and exclusive member-only deals.
            </p>
            {subscribed ? (
              <div className="p-3 bg-white border border-hair rounded-[2px] text-xs font-mono text-ink">
                ✓ You&apos;re on the VIP list.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white border border-hair px-3 py-2 text-xs text-ink placeholder:text-muted rounded-[2px] focus:outline-none focus:border-ink flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-ink hover:bg-ink/90 text-white font-mono text-xs font-bold px-4 py-2 rounded-[2px] transition-colors"
                >
                  JOIN
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="border-t border-hair pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-muted">
          <div>
            &copy; 2026 <span className="font-bold text-red uppercase">{BRAND_NAME}</span>. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4 text-ink/70">
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-muted" /> Free Shipping &gt; ₹999
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5 text-muted" /> 7-Day Exchange
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-muted" /> COD / UPI / Cards
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
