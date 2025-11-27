import { getCarById } from "@/lib/api/api";

interface CarPageProps {
  params: { id: string };
}

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params; 
  const car = await getCarById(id);

  if (!car) {
    return <h1>Car not found</h1>;
  }

  return (
    <section style={{ padding: "40px" }}>
      <h1>
        {car.brand} {car.model} ({car.year})
      </h1>

      <img
        src={car.img}
        alt={car.model}
        style={{ width: "400px", borderRadius: "10px", marginTop: "20px" }}
      />

      <p style={{ marginTop: "20px" }}>
        <strong>Price:</strong> ${car.rentalPrice}
      </p>

      <p>
        <strong>Type:</strong> {car.type}
      </p>

      <p>
        <strong>Engine:</strong> {car.engineSize}
      </p>

      <p>
        <strong>Fuel:</strong> {car.fuelConsumption}
      </p>

      <p>
        <strong>Description:</strong> {car.description}
      </p>
    </section>
  );
}