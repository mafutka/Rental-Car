"use client";

import css from "./page.module.css";
import CarList from "../../components/CarList/CarList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useCarsStore } from "@/lib/store/carStore";

export default function CatalogPage() {
  const resetFilters = useCarsStore((s) => s.resetFilters);

  useEffect(() => {
    resetFilters();
  }, [resetFilters]);

  return (
    <section className={css.wrapper}>
      <SearchBar />
      <CarList />
    </section>
  );
}
