import type { Movie } from "../../services/cinemaApi";
import styles from "./DetailsFilm.module.scss";
import { convertAndFormatCurrency, getRussianLanguageName, translateAwards, translateDirectorName } from "./index.ts";

type DetailsFilmProps = {
    film: Movie;
}

export const DetailsFilm = ({ film }: DetailsFilmProps) => {
    const languageName = getRussianLanguageName(film.language);

    return (
        <div className={styles["details"]}>
            <h2 className={styles["details__description"]}>О фильме</h2>
            <ul className={styles["details__list"]}>
                <li className={styles["details__item"]}>
                    <span className={styles["details__label"]}>Язык оригинала</span>
                    <span className={styles["details__value"]}>
                        {languageName}
                    </span>
                </li>
                <li className={styles["details__item"]}>
                    <span className={styles["details__label"]}>Бюджет</span>
                    <span className={styles["details__value"]}>{convertAndFormatCurrency(film.budget)}</span>
                </li>
                <li className={styles["details__item"]}>
                    <span className={styles["details__label"]}>Выручка</span>
                    <span className={styles["details__value"]}>{convertAndFormatCurrency(film.revenue)}</span>
                </li>
                <li className={styles["details__item"]}>
                    <span className={styles["details__label"]}>Режиссёр</span>
                    <span className={styles["details__value"]}>{translateDirectorName(film.director)}</span>
                </li>
                <li className={styles["details__item"]}>
                    <span className={styles["details__label"]}>Продакшен</span>
                    <span className={styles["details__value"]}>{film.production || "Нет информации"}</span>
                </li>
                <li className={styles["details__item"]}>
                    <span className={styles["details__label"]}>Награды</span>
                    <span className={styles["details__value"]}>{translateAwards(film.awardsSummary)}</span>
                </li>
            </ul>
        </div>
    )
}