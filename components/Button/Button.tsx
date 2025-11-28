"use client"

import Link from "next/link";
import css from "./Button.module.css";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit";
    href?: string;
    className?: string;
}

export function Button({ children, href, onClick, type = "button", className }: ButtonProps) {
    const classes = `${css.button} ${className || ""}`;
    if (href) {
    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
    };
    return (
    <button onClick={onClick} type={type} className={classes}>
      {children}
    </button>
  );
}