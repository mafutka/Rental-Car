"use client";

import {Button} from "../components/Button/Button"
import css from "./page.module.css"

export default function Homepage() {
  
  return (
    <section className={css.container}>
      <div className={css.heroinfo}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.description}>Reliable and budget-friendly rentals for any journey</p>
        
          <Button href="/catalog" className={css.button}>
            View Catalog
          </Button>
        
      </div>
    </section>
  )
}