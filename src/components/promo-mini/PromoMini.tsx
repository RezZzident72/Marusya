import type { Movie } from "../../services/cinemaApi";
import styles from "./PromoMini.module.scss";
import NoPoster from "../../assets/image/NoPoster.jpg";
import { StarIcon } from "../icons/Icons";
import { getRatingColor } from "../../utils/get-raiting-color";
import { translateGenre } from "../../utils/genre-translation";
import { formatRuntime } from "../../utils/format-run-time";
import { useNavigate } from "react-router-dom";
import { closeSearch } from "../../app/slices/searchSlice";
import { useAppDispatch } from "../../app/hooks";

type PromoMiniProps = {
    film: Movie;
}

export const PromoMini = ({ film }: PromoMiniProps) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handlePromoClick = () => {
       void  navigate(`/${String(film.id)}`);
        dispatch(closeSearch())
    };

    return (
        <div className={styles["promo-mini"]} onClick={handlePromoClick}>
            <div className={styles["promo-mini__cover"]}>
                <img className={styles["promo-mini__img"]} loading="lazy" src={film.backdropUrl ? film.backdropUrl : NoPoster} alt="" />
            </div>
            <div className={styles["promo-mini__main"]}>
                <div className={styles["promo-mini__film-meta"]}>
                    <div className={styles["promo-mini__raiting"]} style={{ backgroundColor: getRatingColor(film.tmdbRating) }}>
                        <StarIcon className={styles["promo-mini__star-icon"]} />
                        <span className={styles["promo-mini__raiting-value"]}>{film.tmdbRating ? film.tmdbRating.toFixed(1) : "—"}</span>
                    </div>
                    <span className={styles["promo-mini__film-meta-text"]}>{film.releaseYear}</span>
                    <span className={styles["promo-mini__film-meta-text"]}>{translateGenre(film.genres[0])}</span>
                    <span className={styles["promo-mini__film-meta-text"]}>{formatRuntime(film.runtime)}</span>
                </div>
                <h2 className={styles["promo-mini__title"]}>{film.originalTitle}</h2>
            </div>
        </div>
    )
}