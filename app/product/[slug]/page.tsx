import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getMockProductBySlug, getMockProducts, MOCK_PRODUCTS } from "@/lib/mock-data";
import { ProductDetailView } from "@/components/product/ProductDetailView";
import { BRAND_NAME } from "@/lib/brand";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getMockProductBySlug(params.slug);
  if (!product) {
    return { title: `Product | ${BRAND_NAME}` };
  }
  return {
    title: `${product.name} | ${BRAND_NAME}`,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${BRAND_NAME}`,
      description: product.description,
      images: product.images.map((img) => img.url),
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getMockProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getMockProducts({ limit: 5 }).filter(
    (p) => p.id !== product.id
  ).slice(0, 4);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
