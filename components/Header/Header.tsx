import Navigation from "../Navigation/Navigation"
import css from "./Header.module.css"
import Link from "next/link"

export default function Header() {
    return (
        <header className={css.header}>
            <Link href="/" className={css.logo}>
                <img src="/Logo-1.svg" alt="Logo" width="102" height="16" />
            </Link>
            <Navigation></Navigation>
        </header>
    )
}