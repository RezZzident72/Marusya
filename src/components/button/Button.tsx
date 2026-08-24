import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className: string;
    variant?: "primary" | "secondary" | "icon";
}

export const Button = ({className = "", children, variant = "primary", ...rest }: ButtonProps) => {

    return (
        <button className={`${className} ${styles["btn"]} ${styles[`btn--${variant}`]}`} {...rest}>
            {children}
        </button>
    );
};