import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MOCK_CATEGORIES, getMockProducts } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/ProductCard";
import { BRAND_NAME } from "@/lib/brand";

interface CategoryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return [
    ...MOCK_CATEGORIES.map((c) => ({ slug: c.slug })),
    { slug: "sale" },
    { slug: "fresh-arrivals" },
  ];
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const cat = MOCK_CATEGORIES.find((c) => c.slug === params.slug);
  const title = cat ? cat.name : "Category";
  return {
    title: `${title} | ${BRAND_NAME}`,
    description: `Shop ${title} at ${BRAND_NAME}. Premium men's silhouettes.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.slug;
  const cat = MOCK_CATEGORIES.find((c) => c.slug === categorySlug);

  if (!cat && categorySlug !== "sale" && categorySlug !== "fresh-arrivals") {
    notFound();
  }

  const title = cat ? cat.name : categorySlug === "sale" ? "Sale Archive" : "Fresh Arrivals";
  const products = getMockProducts({ categorySlug });

  return (
    <div className="min-h-[100dvh] pb-24 bg-white text-ink">
      {/* Category Header */}
      <div className="pt-6 sm:pt-10 pb-4 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex items-baseline gap-3">
            <h1 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-ink">
              {title}
            </h1>
            <span className="font-mono text-sm sm:text-base text-muted">
              ({products.length} Styles)
            </span>
          </div>
        </div>
      </div>

      {/* Grid: 2 columns mobile, 4 columns desktop */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-6 sm:pt-10">
        {products.length === 0 ? (
          <div className="py-20 text-center font-mono text-xs text-muted">
            No items currently available in this category.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
