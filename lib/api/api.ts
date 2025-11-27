import { api } from "@/app/api/api";
import { Car, GetCarsResponse, CarFilters } from "@/types/types";

export const getCars = async (page = 1, limit = 12, filters: CarFilters = {}) => {
  const { data } = await api.get<GetCarsResponse>("/cars", {
    params: { page, limit, ...filters },
  });

  return {
    cars: data.cars,
    totalPages: data.totalPages ?? 1, 
  };
};

export const getCarById = async (id: string) => {
    const { data } = await api.get<Car>(`/cars/${id}`);
    console.log(id);

    return data;
   
};





