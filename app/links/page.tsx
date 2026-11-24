import Link from "next/link";
import { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${BRAND.name} — Studio Bio`,
  description: `Official Instagram links for ${BRAND.name}.`,
};

export default function LinksPage() {
  return (
    <div className="min-h-[100dvh] bg-bg text-ink flex flex-col justify-between p-6 sm:p-12 select-none">
      <div className="max-w-md w-full mx-auto my-auto space-y-8">
        {/* Monogram / Header */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-muted uppercase tracking-mono">
            {BRAND.season} Studio Bio
          </span>
          <h1 className="font-display font-extrabold text-5xl uppercase tracking-tighter text-ink leading-none">
            {BRAND.name}
          </h1>
          <p className="font-mono text-xs text-muted leading-relaxed">
            {BRAND.tagline}
          </p>
        </div>

        <div className="w-full h-px bg-hair" />

        {/* Link Rows with Hairlines */}
        <div className="divide-y divide-hair border-y border-hair font-mono text-xs">
          {BRAND.bioLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="py-4 flex items-center justify-between text-ink hover:underline group cursor-pointer"
            >
              <span>{link.title}</span>
              <span className="text-muted group-hover:text-ink">↗</span>
            </a>
          ))}
        </div>

        <div className="pt-4 text-center font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} {BRAND.name}
        </div>
      </div>
    </div>
  );
}
