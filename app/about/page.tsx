import Link from "next/link";
import { BRAND } from "@/lib/brand";

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] pb-24 bg-bg text-ink">
      <div className="pt-10 sm:pt-16 pb-8 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <span className="font-mono text-xs text-muted uppercase tracking-mono block mb-2">
            (Studio Philosophy)
          </span>
          <h1 className="font-display font-extrabold text-[clamp(40px,7vw,100px)] leading-headline tracking-tighter uppercase text-ink">
            Philosophy
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 space-y-10">
        <p className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-ink leading-snug">
          {BRAND.tagline}
        </p>

        <div className="space-y-6 text-sm text-muted font-body leading-relaxed">
          <p>
            {BRAND.name} was established to counter disposable fast-fashion menswear. We cut heavy, dense textiles with precise architectural drape so every piece holds its silhouette wear after wear.
          </p>
          <p>
            Every micro-run is capped at 250 units nationwide. We source 280+ GSM combed French Terry, breathable Belgian flax linen, and textural waffle weaves. Once a release is archived, it is not reprinted.
          </p>
        </div>

        <div className="pt-4 border-t border-hair font-mono text-xs text-muted flex justify-between">
          <span>{BRAND.name} Studio • {BRAND.season}</span>
          <Link href="/shop" className="text-ink hover:underline">
            View Collection →
          </Link>
        </div>
      </div>
    </div>
  );
}
