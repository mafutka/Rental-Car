import { create } from "zustand";
import { Car } from "@/types/types";
import { CarFilters } from "@/types/types";

interface Filters {
  brand?: string;
  rentalPrice?: number;
  mileageFrom?: number;
  mileageTo?: number;
}

interface CarsState {
  cars: Car[];
  page: number;
  hasMore: boolean;
  totalPages: number;
  filters: Filters;
  resetPage: () => void;
  setFilters: (filters: Filters) => void;
  setTotalPages: (value: number) => void;
  setCars: (items: Car[]) => void;
  addCars: (items: Car[]) => void;
  increasePage: () => void;
  setHasMore: (value: boolean) => void;
  resetFilters: () => void;
}

export const useCarsStore = create<CarsState>((set) => ({
  cars: [],
  page: 1,
  hasMore: true,
  totalPages: 1,

  filters: {},

  setFilters: (filters: CarFilters) => set({ filters, page: 1 }),
  resetFilters: () => set({ filters: {}, page: 1 }),
  setCars: (items) => set({ cars: items }),
  addCars: (items) => set((state) => ({ cars: [...state.cars, ...items] })),
  increasePage: () => set((state) => ({ page: state.page + 1 })),
  setHasMore: (value) => set({ hasMore: value }),
  setTotalPages: (value) => set({ totalPages: value }),
  resetPage: () => set({ page: 1 }),
}));