"use client";

import { useEffect, useState } from "react";
import { getCars } from "@/lib/api/api";
import { useCarsStore } from "@/lib/store/carStore";
import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";
import { Car } from "@/types/types";

export default function CarList() {
  const cars = useCarsStore((s) => s.cars);
  const page = useCarsStore((s) => s.page);
  const hasMore = useCarsStore((s) => s.hasMore);
  const filters = useCarsStore((s) => s.filters);

  const setCars = useCarsStore((s) => s.setCars);
  const addCars = useCarsStore((s) => s.addCars);
  const increasePage = useCarsStore((s) => s.increasePage);
  const setHasMore = useCarsStore((s) => s.setHasMore);
  const setTotalPages = useCarsStore((s) => s.setTotalPages);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const { cars: items, totalPages } = await getCars(1, 12, filters);

      const mileageFrom = filters?.mileageFrom;
      const mileageTo = filters?.mileageTo;

      const filtered: Car[] = items
        .filter((c) => (typeof mileageFrom === "number" ? c.mileage >= mileageFrom : true))
        .filter((c) => (typeof mileageTo === "number" ? c.mileage <= mileageTo : true));

      setCars(filtered);
      setTotalPages(totalPages);
      setHasMore(totalPages > 1);

      setLoading(false);
    };

    load();
  }, [filters, setCars, setHasMore, setTotalPages]);

  useEffect(() => {
    if (page === 1) return;

    const loadMore = async () => {
      setLoading(true);

      const { cars: items, totalPages } = await getCars(page, 12, filters);

      const mileageFrom = filters?.mileageFrom;
      const mileageTo = filters?.mileageTo;

      const filtered: Car[] = items
        .filter((c) => (typeof mileageFrom === "number" ? c.mileage >= mileageFrom : true))
        .filter((c) => (typeof mileageTo === "number" ? c.mileage <= mileageTo : true));

      addCars(filtered);
      setHasMore(page < totalPages);

      setLoading(false);
    };

    loadMore();
  }, [page, filters, addCars, setHasMore]);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>

      {!loading && cars.length === 0 && (
        <p className={css.noResults}>No cars match your search request</p>
      )}

      {loading && <p>Loading...</p>}

      {hasMore && !loading && (
        <button className={css.loadMoreButton} onClick={increasePage}>
          Load more
        </button>
      )}
    </div>
  );
}