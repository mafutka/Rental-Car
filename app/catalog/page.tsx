import css from "./page.module.css";
import CarList from "../../components/CarList/CarList"
import SearchBar from "@/components/SearchBar/SearchBar";

export default async function CatalogPage() {
  return (
    <section className={css.wrapper}>
      <SearchBar />
      <CarList />
    </section>
  );
}