import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";
import { safeVibrate } from "@/lib/utils";

interface FavouritesState {
  items: Product[];
  toggleFavourite: (product: Product) => void;
  isFavourite: (productId: string) => boolean;
  clearFavourites: () => void;
}

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      items: [],

      toggleFavourite: (product) => {
        safeVibrate([8, 30, 12]);
        set((state) => {
          const exists = state.items.some((p) => p.id === product.id);
          if (exists) {
            return { items: state.items.filter((p) => p.id !== product.id) };
          }
          return { items: [product, ...state.items] };
        });
      },

      isFavourite: (productId) => {
        return get().items.some((p) => p.id === productId);
      },

      clearFavourites: () => set({ items: [] }),
    }),
    {
      name: "veer-favourites-store",
    }
  )
);
