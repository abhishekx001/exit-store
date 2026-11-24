import { BRAND } from "@/lib/brand";

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-[100dvh] pb-24">
      <div className="bg-surface/60 border-b border-border py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            Customer Information
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-text mt-2 uppercase">
            Shipping & COD Policy
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 space-y-6 text-sm text-muted leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-text font-display">1. All-India Express Dispatch</h2>
          <p>
            All confirmed drop orders are dispatched from our central atelier within 24 to 48 hours. We partner exclusively with premium express couriers (BlueDart, Delhivery, Xpressbees) to guarantee safe transit.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-text font-display">2. Delivery Timelines</h2>
          <p>
            • Metros (Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad): 2–3 business days.
            <br />
            • Rest of India: 3–5 business days.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-text font-display">3. Free Shipping Threshold</h2>
          <p>
            Complimentary express delivery is automatically applied at checkout for all bag subtotals of ₹{BRAND.freeShippingThreshold} and above. A flat nominal shipping charge of ₹149 applies to smaller orders.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-text font-display">4. Cash on Delivery (COD)</h2>
          <p>
            COD is active for over 19,000 PIN codes across India. When your courier arrives, you may pay with cash or directly scan a UPI QR code on their device.
          </p>
        </section>
      </div>
    </div>
  );
}
