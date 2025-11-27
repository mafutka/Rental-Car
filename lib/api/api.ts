import { api } from "@/app/api/api";
import { Car, GetCarsResponse } from "@/types/types";

export const getCars = async (page = 1, limit = 12, filters = {}) => {
  const { data } = await api.get<GetCarsResponse>("/cars", {
    params: { page, limit, ...filters },
  });

  return data;
};

export const getCarById = async (id: string) => {
    const { data } = await api.get<Car>(`/cars/${id}`);
    console.log(id);

    return data;
   
};





