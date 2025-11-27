import { getCarById } from "@/lib/api/api";
import css from "./page.module.css"
import BookForm from "@/components/ClientForm/ClientForm";
import CarDetails from "../../../components/CarDetails/CarDetails"


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
    <section className={css.wrapper}>
        <div className={css.left}>
            <img src={car.img} alt={car.model} className={css.img} />
            <BookForm></BookForm>
        </div>
        <div className={css.right}>
            <CarDetails car={car}></CarDetails>
            
        </div>
    </section>
  );
}