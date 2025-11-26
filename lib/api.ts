import axios from "axios";
import { Car, GetCarsResponse } from "@/types/types";

export const getCars = async (page = 1, limit = 12, filters = {}) => {
  const { data } = await axios.get<GetCarsResponse>("/cars", {
    params: { page, limit, ...filters },
  });

  return data;
};

export const getCarById = async (id: string) => {
    const { data } = await axios.get<Car>(`/catalog/${id}`);

    return data;
};


