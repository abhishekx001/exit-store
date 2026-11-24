import { BRAND } from "@/lib/brand";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-[100dvh] pb-24">
      <div className="bg-surface/60 border-b border-border py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            Customer Guarantee
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-text mt-2 uppercase">
            7-Day Exchange & Returns
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 space-y-6 text-sm text-muted leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-text font-display">1. 7-Day Exchange Window</h2>
          <p>
            We offer hassle-free size and fit exchanges within 7 days of delivery. If an oversized cut does not fit your proportions as anticipated, our team will dispatch a pickup and replacement promptly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-text font-display">2. Return Eligibility</h2>
          <p>
            Garments must be unwashed, unworn, and returned in their original condition with all brand tags and compostable mailer packaging intact.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-text font-display">3. Reverse Pickup Process</h2>
          <p>
            To initiate an exchange or return, simply message our WhatsApp Concierge at {BRAND.whatsappNumber} or email {BRAND.supportEmail} with your Order ID. Our logistics team will schedule a doorstep pickup within 24 hours.
          </p>
        </section>
      </div>
    </div>
  );
}
