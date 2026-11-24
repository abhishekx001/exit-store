import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND, BRAND_NAME } from "@/lib/brand";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { MenuDrawer } from "@/components/layout/MenuDrawer";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchModal } from "@/components/search/SearchModal";
import { BottomTabBar } from "@/components/layout/BottomTabBar";
import { IntroOverlay } from "@/components/home/IntroOverlay";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: `${BRAND_NAME} — Men's Fashion & Daily Wear`,
  description: `${BRAND_NAME}: Premium menswear, heavyweight tees, oversized fits and tailored garments.`,
  manifest: "/manifest.webmanifest",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://exitstore.in"),
  openGraph: {
    title: `${BRAND_NAME} | Men's Fashion`,
    description: "Premium menswear, heavyweight tees, oversized fits and tailored garments.",
    images: ["/brand/logo.svg"],
    type: "website",
  },
  icons: {
    icon: "/brand/logo.svg",
    apple: "/brand/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-bg text-ink min-h-[100dvh] antialiased selection:bg-red selection:text-white relative">
        {/* Full Black Intro Loader with Centered Red Italic exit store and Left-to-Right Transition */}
        <IntroOverlay />

        <div className="relative z-10 flex flex-col min-h-[100dvh]">
          {/* Subtle 32px Announcement Strip */}
          <AnnouncementBar />

          {/* AJIO-Style Header (3-row Mobile, Single-row Desktop) */}
          <Navbar />

          {/* Main View */}
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>

          {/* Clean Commercial Footer */}
          <Footer />

          {/* Overlays & Drawers */}
          <MenuDrawer />
          <CartDrawer />
          <SearchModal />

          {/* Mobile Bottom Tab Bar */}
          <BottomTabBar />

          {/* Toaster */}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#0B0B0B",
                border: "1px solid #0B0B0B",
                color: "#FFFFFF",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                borderRadius: "4px",
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
