export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}

export interface GetCarsResponse {
  cars: Car[];
  total: number;
  totalPages: number;
}

export interface FormFields {
    name: string;
    email: string;
    date: string;
    comment: string;
}