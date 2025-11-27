import { api } from "@/app/api/api";
import { Car, GetCarsResponse } from "@/types/types";

export const getCars = async (page = 1, limit = 12, filters = {}) => {
  const { data } = await api.get<GetCarsResponse>("/cars", {
    params: { page, limit, ...filters },
  });

  let items = data.cars;

  if (filters.brand) {
    items = items.filter((car) => car.brand === filters.brand);
  }

  if (filters.rentalPrice) {
    items = items.filter(
      (car) => Number(car.rentalPrice) <= Number(filters.rentalPrice)
    );
  }

   if (filters.mileageFrom) {
    items = items.filter((car) => car.mileage >= Number(filters.mileageFrom));
  }

  if (filters.mileageTo) {
    items = items.filter((car) => car.mileage <= Number(filters.mileageTo));
  }

  return {
    cars: items.slice(0, limit),
    totalPages: Math.ceil(items.length / limit),
  };
};

export const getCarById = async (id: string) => {
    const { data } = await api.get<Car>(`/cars/${id}`);
    console.log(id);

    return data;
   
};





