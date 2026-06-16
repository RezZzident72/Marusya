import styles from "./Loader.module.scss";

interface LoaderProps {
    value: string;
}

export const Loader = ({value}:LoaderProps) => {
    return (
        <>
        <span className={styles["loader"]}></span>
        <div className={styles["loader__value"]}>{value}</div>
        </>
    )
}