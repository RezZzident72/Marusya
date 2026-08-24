import styles from "./PromoFilm.module.scss";

export const PromoFilmSkeleton = () => {
    return (
        <div className={`${styles["promo"]} ${styles["promo--skeleton"]}`}>
            <div className={styles["promo__main"]}>
                <div className={styles["promo__info"]}>
                    <div className={styles["promo__film-meta"]}>
                        <div className={styles["promo__raiting"]}></div>
                        <span className={styles["promo__film-meta-text"]}></span>
                        <span className={styles["promo__film-meta-text"]}></span>
                        <span className={styles["promo__film-meta-text"]}></span>
                    </div>
                    <h1 className={styles["promo__title"]}></h1>
                    <p className={styles["promo__plot"]}></p>
                </div>
                <div className={styles["promo__btns"]}>
                </div>
            </div>
            <div className={styles["promo__cover"]}>
            </div>
        </div>
    )
}