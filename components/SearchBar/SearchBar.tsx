"use client";

import { useState } from "react";
import { useCarsStore } from "@/lib/store/carStore";
import css from "./SearchBar.module.css";
import { Button } from "../Button/Button";

export default function SearchBar() {
  const setFilters = useCarsStore((s) => s.setFilters);

  const [brand, setBrand] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    setFilters({
      brand: brand || undefined,
      rentalPrice: rentalPrice ? Number(rentalPrice) : undefined,
      mileageFrom: from ? Number(from) : undefined,
      mileageTo: to ? Number(to) : undefined,
    });
  };

  return (
    <div className={css.wrapper}>
      <div className={css.field}>
        <label className={css.label}>Car brand</label>
        <select
          className={css.select} 
          value={brand} 
          onChange={(e) => setBrand(e.target.value)}>
          <option value="">Choose a brand</option>
          <option>Audi</option>
          <option>BMW</option>
          <option>Buick</option>
          <option>Chevrolet</option>
          <option>Toyota</option>
          <option>Volvo</option>
          <option>Hummer</option>
        </select>
      </div>

      <div className={css.field}>
        <label className={css.label}>Price / 1 hour</label>
        <select
          className={css.select}
          value={rentalPrice}
          onChange={(e) => setRentalPrice(e.target.value)}
        >
          <option value="">Choose a price</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>60</option>
          <option>70</option>
          <option>80</option>
        </select>
      </div>

      <div className={css.field}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.range}>
          <input
            type="number"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="number"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </div>

      <Button className={css.button} onClick={handleSearch} type="submit"> Search </Button>
    </div>
  );
}
