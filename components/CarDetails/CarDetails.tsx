import css from "./CarDetails.module.css"
import { Car } from "@/types/types";

export default function CarDetails({car}: {car:Car}) {
    return (
        <div>
        <h2 className={css.title}>{car.brand} {car.model}, {car.year}</h2>
            <p className={css.address}>{car.address}</p>
            <p className={css.price}>${car.rentalPrice}</p>
            <p className={css.description}>${car.description}</p>
            <ul className={css.cardatails}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </div>
    )
}