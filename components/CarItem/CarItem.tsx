import { Car } from "@/types/types";
import css from "./CarItem.module.css";
import { useFavoriteStore } from "@/lib/store/favoriteStore";
import { Button } from "../Button/Button";

interface CarItemProps {
    car: Car;
}

export default function CarItem({ car }: CarItemProps) {
    const toggleFavorite = useFavoriteStore((s) => s.toggleFavorite);
    const favorites = useFavoriteStore((s) => s.favorites);
    const isFav = favorites.includes(car.id);

    const addressParts = car.address.split(", ").map(p => p.trim());
    const city = addressParts[addressParts.length - 2];
    const country = addressParts[addressParts.length - 1];
  
return (
    <li className={css.card}>
        <div className={css.imgwrapper}>
            <img src={car.img} alt={car.model} className={css.image} />
            <button
          className={`${css.heartButton} ${isFav ? css.favorite : ""}`}
          onClick={() => toggleFavorite(car.id)}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
            <svg className={css.heartIcon} width="16" height="15" viewBox="0 0 24 24">
                <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
              5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 
              3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 
              3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={isFav ? "#3470FF" : "transparent"}
              stroke={isFav ? "#3470FF" : "#f2f4f7"}
              strokeWidth="2"
            />
            </svg>
        </button>
       
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
            <span className={css.break}></span>
            <span>{car.type}</span>
            <span className={css.dot}> | </span>
            <span>{car.mileage.toLocaleString()} km</span>
        </div>

        <Button className={css.readmoreButton} href={`/catalog/${car.id}`}>Read more</Button>
    </li>
  );
}

