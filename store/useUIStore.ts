import { create } from "zustand";

interface UIState {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isMenuOpen: boolean;
  hasSeenIntro: boolean;
  introPlaying: boolean;
  recentSearches: string[];

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;

  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;

  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;

  replayIntro: () => void;
  setIntroPlaying: (playing: boolean) => void;
  markIntroSeen: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  isSearchOpen: false,
  isMenuOpen: false,
  hasSeenIntro: false,
  introPlaying: false,
  recentSearches: ["Heavyweight Tee", "Waffle", "Wide Trousers", "Linen"],

  openCart: () => set({ isCartOpen: true, isMenuOpen: false, isSearchOpen: false }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((s) => ({ isCartOpen: !s.isCartOpen, isMenuOpen: false, isSearchOpen: false })),

  openSearch: () => set({ isSearchOpen: true, isMenuOpen: false, isCartOpen: false }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleSearch: () => set((s) => ({ isSearchOpen: !s.isSearchOpen, isMenuOpen: false, isCartOpen: false })),

  openMenu: () => set({ isMenuOpen: true, isSearchOpen: false, isCartOpen: false }),
  closeMenu: () => set({ isMenuOpen: false }),
  toggleMenu: () => set((s) => ({ isMenuOpen: !s.isMenuOpen, isSearchOpen: false, isCartOpen: false })),

  addRecentSearch: (query) => {
    const q = query.trim();
    if (!q) return;
    set((state) => ({
      recentSearches: [q, ...state.recentSearches.filter((s) => s.toLowerCase() !== q.toLowerCase())].slice(0, 6),
    }));
  },
  clearRecentSearches: () => set({ recentSearches: [] }),

  replayIntro: () => set({ introPlaying: true, isMenuOpen: false, isCartOpen: false }),
  setIntroPlaying: (playing) => set({ introPlaying: playing }),
  markIntroSeen: () => set({ hasSeenIntro: true, introPlaying: false }),
}));
