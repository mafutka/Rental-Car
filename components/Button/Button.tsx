"use client"

import Link from "next/link";
import css from "./Button.module.css";


export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    href: string;
}

export function Button({ children, href }: ButtonProps) {
    return (
        <Link href={href} className={css.button}>
            {children}
        </Link>
    );
}