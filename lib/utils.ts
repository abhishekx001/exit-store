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

export function buildWhatsAppLink(productName?: string, size?: string, price?: number, url?: string): string {
  const number = BRAND.whatsappNumber.replace(/[^0-9]/g, "");
  const base = `https://wa.me/${number}`;
  const text = productName
    ? `Hello ${BRAND.name}, I would like to book:\n\n*${productName}*\n${price ? `• Price: ₹${price.toLocaleString("en-IN")}\n` : ""}${size ? `• Size: ${size}\n` : ""}${url ? `• Link: ${url}\n` : (typeof window !== 'undefined' ? `• Link: ${window.location.href}\n` : "")}\nPlease confirm availability and booking details!`
    : `Hello ${BRAND.name}, I would like to book an item from your collection.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppCartLink(
  items: Array<{ product: { name: string; price: number; slug?: string }; variant?: { size: string }; quantity: number }>,
  total: number
): string {
  const number = BRAND.whatsappNumber.replace(/[^0-9]/g, "");
  const base = `https://wa.me/${number}`;
  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}* (Size: ${item.variant?.size || "Free Size"}, Qty: ${item.quantity}) — ₹${(item.product.price * item.quantity).toLocaleString("en-IN")}`
    )
    .join("\n");

  const text = `Hello ${BRAND.name}, I would like to book the following items from my bag:\n\n${itemsList}\n\n*Total Amount: ₹${total.toLocaleString("en-IN")}*\n\nPlease confirm availability and dispatch details!`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function buildInstagramDMLink(productName?: string): string {
  return `${BRAND.instagramUrl}?text=${encodeURIComponent(`Hello! Inquiring about ${productName || "garment"}`)}`;
}
