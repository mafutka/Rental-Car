import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteState {
  favorites: string[]; 
  toggleFavorite: (id: string) => void;
}

export const useFavoriteStore = create(
  persist<FavoriteState>(
    (set, get) => ({
      favorites: [], 
      toggleFavorite: (id) => {
        const favorites = get().favorites;
        if (favorites.includes(id)) {
          set({ favorites: favorites.filter((f) => f !== id) });
        } else {
          set({ favorites: [...favorites, id] });
        }
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);