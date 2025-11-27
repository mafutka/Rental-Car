"use client"

import Link from "next/link";
import css from "./Button.module.css";


export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    href?: string;
    className?: string;
}

export function Button({ children, href, onClick, type = "button", className }: ButtonProps) {
    const classes = `${css.button} ${className || ""}`;
    if (href) {
    return (
        <Link href={href} className={css.button}>
            {children}
        </Link>
    );
    };
    return (
    <button onClick={onClick} type={type} className={css.classes}>
      {children}
    </button>
  );
}