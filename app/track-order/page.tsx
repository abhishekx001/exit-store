"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { buildWhatsAppLink } from "@/lib/utils";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id") || "";

  const [orderId, setOrderId] = useState(initialId);
  const [tracked, setTracked] = useState(!!initialId);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    setTracked(true);
  };

  const steps = [
    { label: "01 • Order Confirmed", date: "Today", completed: true },
    { label: "02 • Quality Inspected & Packed", date: "Within 24 Hours", completed: true },
    { label: "03 • Handed to Express Courier", date: "Expected Tomorrow", completed: false },
    { label: "04 • Out for Doorstep Delivery", date: "Est. 2-3 Days", completed: false },
  ];

  return (
    <div className="min-h-[100dvh] pb-24 bg-bg text-ink">
      <div className="pt-10 sm:pt-16 pb-8 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <span className="font-mono text-xs text-muted uppercase tracking-mono block mb-2">
            (Fulfillment)
          </span>
          <h1 className="font-display font-extrabold text-[clamp(40px,7vw,100px)] leading-headline tracking-tighter uppercase text-ink">
            Track Order
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 space-y-10">
        <form onSubmit={handleTrack} className="flex gap-4">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID (e.g. EX-849201)"
            className="flex-1 bg-transparent border-b border-hair py-3 text-sm text-ink font-mono focus:outline-none focus:border-ink uppercase placeholder:text-muted/60"
          />
          <button
            type="submit"
            className="btn-ink px-6 py-3 font-mono text-xs uppercase tracking-mono cursor-pointer"
          >
            Track
          </button>
        </form>

        {tracked && (
          <div className="border border-hair p-6 sm:p-8 space-y-8 font-mono text-xs">
            <div className="flex justify-between items-baseline border-b border-hair pb-4">
              <span className="text-muted">Order ID:</span>
              <span className="text-ink font-bold text-sm">{orderId || "EX-849201"}</span>
            </div>

            <div className="space-y-4">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className={`flex items-baseline justify-between py-2 ${
                    s.completed ? "text-ink font-bold" : "text-muted"
                  }`}
                >
                  <span>{s.label}</span>
                  <span className="text-[11px] text-muted">{s.date}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-hair flex justify-between items-center text-[11px] text-muted">
              <span>Need immediate assistance?</span>
              <a
                href={buildWhatsAppLink(`Order ${orderId}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:underline cursor-pointer"
              >
                WhatsApp Concierge ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50dvh] flex items-center justify-center font-mono text-xs text-muted">
          Loading tracking...
        </div>
      }
    >
      <TrackOrderContent />
    </Suspense>
  );
}
