import { BRAND } from "@/lib/brand";

export default function TermsPage() {
  return (
    <div className="min-h-[100dvh] pb-24">
      <div className="bg-surface/60 border-b border-border py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-display font-black text-text uppercase">
            Terms of Service
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 space-y-4 text-sm text-muted leading-relaxed">
        <p>Welcome to {BRAND.name}. By accessing or placing an order on this store, you agree to comply with our store policies, pricing terms, and customer care guidelines.</p>
        <p>All intellectual property, photography, designs, and branding remain the exclusive property of {BRAND.name}. Limited drop availability is maintained on a first-come, first-served basis.</p>
      </div>
    </div>
  );
}
