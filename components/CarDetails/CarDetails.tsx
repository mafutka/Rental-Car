import css from "./CarDetails.module.css"
import { Car } from "@/types/types";

export default function CarDetails({car}: {car:Car}) {

    const addressParts = car.address.split(", ").map(p => p.trim());
    const city = addressParts[addressParts.length - 2];
    const country = addressParts[addressParts.length - 1];
    
    return (
        <div className={css.wrapper}>
        <h2 className={css.title}>{car.brand} {car.model}, {car.year} <span className={css.span}>  id: {car.mileage}</span></h2>
            <div className={css.addressWrapper}>
            <svg width="16" height="16" className={css.icon}>
                <use href="/symbol-defs.svg#icon-Location"></use>
            </svg>
                <p className={css.address}>{city}, {country} {' '}</p>
                <p className={css.address}>{' '} Mileage: {car.mileage} km</p>
            </div>
                <p className={css.price}>${car.rentalPrice}</p>
                <p className={css.description}>{car.description}</p>
            <ul className={css.cardatails}>
                <h3 className={css.itemtitle}>Rental Conditions: </h3>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.rentalConditions[0]}</p></li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.rentalConditions[1]}</p></li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.rentalConditions[2]}</p></li>
            </ul>
            <ul className={css.cardatails}>
                <h3 className={css.itemtitle}>Car Specifications:</h3>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-calendar"></use>
                    </svg>
                    <p className={css.option}>Year: {car.year}</p>
                </li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-car"></use>
                    </svg>
                    <p className={css.option}>Type: {car.type}</p>
                </li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-fuel-pump"></use>
                    </svg>
                    <p className={css.option}>Fuel Consumption: {car.fuelConsumption}</p>
                </li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-gear"></use>
                    </svg>
                    <p className={css.option}>Engine Size: {car.engineSize}</p>
                </li>
            </ul>
            <ul className={css.cardatails}>
                 <h3 className={css.itemtitle}>Accessories and functionalities:</h3>
                <li className={css.item}>
                   <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.accessories[0]}</p>
                </li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.accessories[1]}</p>
                </li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.accessories[2]}</p>
                </li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.functionalities[0]}</p>
                </li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.functionalities[1]}</p>
                </li>
                <li className={css.item}>
                    <svg width="16" height="16" className={css.icon}>
                        <use href="/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    <p className={css.option}>{car.functionalities[2]}</p>
                </li>
            </ul>
        </div>
    )
}