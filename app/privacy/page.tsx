import { BRAND } from "@/lib/brand";

export default function PrivacyPage() {
  return (
    <div className="min-h-[100dvh] pb-24">
      <div className="bg-surface/60 border-b border-border py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-display font-black text-text uppercase">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 space-y-4 text-sm text-muted leading-relaxed">
        <p>Your privacy is of utmost importance to {BRAND.name}. We collect delivery and contact information strictly to fulfill orders, provide shipment SMS/WhatsApp updates, and deliver opt-in drop alerts.</p>
        <p>We do not sell, rent, or trade your personal data to any third-party marketing brokers. All payment transactions are encrypted via 256-bit SSL industry standards.</p>
      </div>
    </div>
  );
}
