import { create } from "zustand";
import { Car } from "@/types/types";

interface CarsState {
  cars: Car[];
  page: number;
  hasMore: boolean;
  totalPages: number;

  setTotalPages: (value: number) => void;
  setCars: (items: Car[]) => void;
  addCars: (items: Car[]) => void;
  increasePage: () => void;
  setHasMore: (value: boolean) => void;
}

export const useCarsStore = create<CarsState>((set) => ({
  cars: [],
  page: 1,
  hasMore: true,
  totalPages: 1,

  setCars: (items) => set({ cars: items }),
  addCars: (items) => set((state) => ({ cars: [...state.cars, ...items] })),
  increasePage: () => set((state) => ({ page: state.page + 1 })),
  setHasMore: (value) => set({ hasMore: value }),
  setTotalPages: (value) => set({ totalPages: value }),
}));