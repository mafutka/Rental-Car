import { create } from "zustand";

interface FavoriteState {
  favorites: string[]; // масив id машин
  toggleFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],
  toggleFavorite: (id) => {
    const favorites = get().favorites;
    if (favorites.includes(id)) {
      set({ favorites: favorites.filter((f) => f !== id) });
    } else {
      set({ favorites: [...favorites, id] });
    }
  },
}));