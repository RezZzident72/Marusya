import styles from "./CustomInput.module.scss";
import { InputHTMLAttributes, ReactNode } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: ReactNode;
}


export const CustomInput = ({ id, label, type = "text", placeholder, onChange, ...rest }: CustomInputProps) => {
    return (
        <div className={styles["custom-input"]}>
            <input className={styles["custom-input__field"]} type={type} placeholder={placeholder} id={id} onChange={onChange} {...rest} />
            <label className={styles["custom-input__label"]} htmlFor={id}>
                {label}
            </label>
        </div>
    )
}