import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product, ProductVariant, Coupon } from "@/types";
import { BRAND } from "@/lib/brand";
import { MOCK_COUPONS } from "@/lib/mock-data";
import { safeVibrate } from "@/lib/utils";

interface CartState {
  items: CartItem[];
  appliedCoupon: Coupon | null;
  
  // Actions
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  
  // Computed helpers
  getSubtotal: () => number;
  getDiscount: () => number;
  getShippingFee: () => number;
  getTotal: () => number;
  getItemCount: () => number;
  getFreeShippingProgress: () => { remaining: number; percentage: number };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      appliedCoupon: null,

      addItem: (product, variant, quantity = 1) => {
        safeVibrate(12);
        set((state) => {
          const existingIndex = state.items.findIndex(
            (i) => i.variant.id === variant.id
          );
          if (existingIndex > -1) {
            const updated = [...state.items];
            updated[existingIndex].quantity += quantity;
            return { items: updated };
          }
          return {
            items: [
              ...state.items,
              {
                variant_id: variant.id,
                product,
                variant,
                quantity,
              },
            ],
          };
        });
      },

      removeItem: (variantId) => {
        safeVibrate(8);
        set((state) => ({
          items: state.items.filter((i) => i.variant.id !== variantId),
        }));
      },

      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.variant.id === variantId ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [], appliedCoupon: null }),

      applyCoupon: (code) => {
        const cleaned = code.trim().toUpperCase();
        const found = MOCK_COUPONS.find((c) => c.code === cleaned && c.is_active);
        if (!found) {
          return { success: false, message: "Invalid or expired promo code" };
        }
        const subtotal = get().getSubtotal();
        if (subtotal < found.min_order) {
          return {
            success: false,
            message: `Minimum order of ₹${found.min_order} required for ${found.code}`,
          };
        }
        set({ appliedCoupon: found });
        safeVibrate([10, 50, 10]);
        return { success: true, message: `Coupon ${found.code} applied successfully!` };
      },

      removeCoupon: () => set({ appliedCoupon: null }),

      getSubtotal: () => {
        return get().items.reduce((sum, item) => {
          const price = item.variant.price_override ?? item.product.price;
          return sum + price * item.quantity;
        }, 0);
      },

      getDiscount: () => {
        const { appliedCoupon } = get();
        if (!appliedCoupon) return 0;
        const subtotal = get().getSubtotal();
        if (appliedCoupon.type === "percentage") {
          return Math.round((subtotal * appliedCoupon.value) / 100);
        }
        return Math.min(appliedCoupon.value, subtotal);
      },

      getShippingFee: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0 || subtotal >= BRAND.freeShippingThreshold) {
          return 0;
        }
        return 149;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        const discount = get().getDiscount();
        const shipping = get().getShippingFee();
        return Math.max(0, subtotal - discount + shipping);
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getFreeShippingProgress: () => {
        const subtotal = get().getSubtotal();
        const target = BRAND.freeShippingThreshold;
        if (subtotal >= target) {
          return { remaining: 0, percentage: 100 };
        }
        const remaining = target - subtotal;
        const percentage = Math.min(100, Math.round((subtotal / target) * 100));
        return { remaining, percentage };
      },
    }),
    {
      name: "veer-cart-store",
    }
  )
);
