import { Car } from "@/types/types";
import css from "./CarItem.module.css";
// import { useFavoriteStore } from "@/lib/store/favoriteStore";
import { Button } from "../Button/Button";

interface CarItemProps {
    car: Car;
}

export default function CarItem({ car }: CarItemProps) {
    
    // const toggleFavorite = useFavoriteStore((s) => s.toggleFavorite);
    // const favorites = useFavoriteStore((s) => s.favorites);
    // const isFav = favorites.includes(car.id);

    const [city, country] = car.address.split(", ");
  
return (
    <li className={css.card}>
        <div className={css.imgwrapper}>
            <img src={car.img} alt={car.model} className={css.image} />
       
            {/* <button
                className={css.like}
                onClick={() => toggleFavorite(car.id)}
                aria-label="Add to favorites"
            >
            <Heart
                fill={isFav ? "#3470FF" : "transparent"}
                stroke="#3470FF"
                strokeWidth={2}
            />
            </button> */}
        </div>
      
        <div className={css.info}>  
            <h3 className={css.title}>{car.brand}{" "} 
                <span className={css.span}>
                    {car.model}
                </span>, {car.year} </h3>
            <p className={css.title}>${car.rentalPrice}</p>
        </div>
        <div className={css.details}>
            <span>{city}</span>
            <span className={css.dot}> | </span>
            <span>{country}</span>
            <span className={css.dot}> | </span>
            <span>{car.rentalCompany}</span>
            <span className={css.dot}> | </span>
            <span>{car.type}</span>
            <span className={css.dot}> | </span>
            <span>{car.mileage.toLocaleString()} km</span>
        </div>

        <Button href={`/catalog/${car.id}`}>Read more</Button>
    </li>
  );
}

