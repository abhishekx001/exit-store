"use client";

import { useState } from "react";
import { BRAND } from "@/lib/brand";
import { buildWhatsAppLink } from "@/lib/utils";
import { toast } from "sonner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Studio inquiry received");
  };

  return (
    <div className="min-h-[100dvh] pb-24 bg-bg text-ink">
      <div className="pt-10 sm:pt-16 pb-8 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <span className="font-mono text-xs text-muted uppercase tracking-mono block mb-2">
            (Concierge)
          </span>
          <h1 className="font-display font-extrabold text-[clamp(40px,7vw,100px)] leading-headline tracking-tighter uppercase text-ink">
            Studio Inquiries
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 space-y-12">
        <div className="divide-y divide-hair border-y border-hair font-mono text-xs">
          <div className="py-4 flex items-center justify-between">
            <span className="text-muted">Direct WhatsApp:</span>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:underline"
            >
              Chat with Concierge ↗
            </a>
          </div>
          <div className="py-4 flex items-center justify-between">
            <span className="text-muted">Email:</span>
            <span className="text-ink">{BRAND.supportEmail}</span>
          </div>
          <div className="py-4 flex items-center justify-between">
            <span className="text-muted">Atelier Location:</span>
            <span className="text-ink">Indiranagar, Bengaluru, India</span>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 border border-hair font-mono text-xs text-ink">
            Thank you for reaching out. A studio representative will reply shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
            <div>
              <label className="text-muted uppercase tracking-mono block mb-2">Your Name</label>
              <input
                type="text"
                required
                placeholder="Full name"
                className="w-full bg-transparent border-b border-hair py-2 text-sm text-ink focus:outline-none focus:border-ink placeholder:text-muted/50"
              />
            </div>
            <div>
              <label className="text-muted uppercase tracking-mono block mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                className="w-full bg-transparent border-b border-hair py-2 text-sm text-ink focus:outline-none focus:border-ink placeholder:text-muted/50"
              />
            </div>
            <div>
              <label className="text-muted uppercase tracking-mono block mb-2">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Inquiry regarding fit, styling, or custom order..."
                className="w-full bg-transparent border-b border-hair py-2 text-sm text-ink focus:outline-none focus:border-ink placeholder:text-muted/50"
              />
            </div>
            <button
              type="submit"
              className="btn-ink py-4 px-8 text-xs font-mono uppercase tracking-mono cursor-pointer"
            >
              Send Inquiry →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
