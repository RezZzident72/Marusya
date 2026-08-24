import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";


type ButtonProps = {
    children: ReactNode;
    className: string;
    variant?: "primary" | "secondary" | "icon";
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({className, children, variant = "primary", ...rest }: ButtonProps) => {

    return (
        <button className={`${className} ${styles["btn"]} ${styles[`btn--${variant}`]}`} {...rest}>
            {children}
        </button>
    );
};