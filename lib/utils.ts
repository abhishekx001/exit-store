import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BRAND } from "./brand";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `${BRAND.currencySymbol}${amount.toLocaleString("en-IN")}`;
}

export function calculateDiscount(price: number, compareAtPrice?: number | null): number {
  if (!compareAtPrice || compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

export function safeVibrate(pattern: number | number[] = 6): void {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Ignore vibration error if not supported
    }
  }
}

export function buildWhatsAppLink(productName?: string, size?: string, url?: string): string {
  const base = `https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, "")}`;
  const text = productName
    ? `Hello ${BRAND.name}, I would like to order: *${productName}*${size ? ` (Size: ${size})` : ""}.\nLink: ${url || (typeof window !== 'undefined' ? window.location.href : '')}`
    : `Hello ${BRAND.name}, I have an inquiry regarding your collection.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function buildInstagramDMLink(productName?: string): string {
  return `${BRAND.instagramUrl}?text=${encodeURIComponent(`Hello! Inquiring about ${productName || "garment"}`)}`;
}
