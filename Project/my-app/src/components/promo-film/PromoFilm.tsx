import { Movie } from "../../services/cinemaApi";
import styles from "./PromoFilm.module.scss";
import { FavoriteIcon, FavoriteActiveIcon, StarIcon, UpdateIcon } from "../icons/Icons";
import { translateGenre } from "../../utils/genre-translation";
import { formatRuntime } from "../../utils/format-run-time";
import { getRatingColor } from "../../utils/get-raiting-color";
import { Button } from "../button/Button";
import NoPoster from "../../assets/image/NoPoster.jpg";
import { Trailer } from "../../features/trailer/Trailer";
import { usePromoFilm } from "./usePromoFilm";

type PromoFilmProps = {
    film: Movie;
    isHome?: boolean;
    updateFilm?: () => void;
}

export const PromoFilm = ({ film, isHome = false, updateFilm }: PromoFilmProps) => {

    const {
        isTrailerOpen,
        isFavorite,
        isButtonsDisabled,
        handleFavoriteClick,
        handleTrailerClick,
        handleDetailsClick
    } = usePromoFilm(film);

    return (
        <div className={`${styles["promo"]}`}>
            <div className={styles["promo__main"]}>
                <div className={styles["promo__info"]}>
                    <div className={styles["promo__film-meta"]}>
                        <div className={styles["promo__raiting"]} style={{ backgroundColor: getRatingColor(film.tmdbRating) }}>
                            <StarIcon className={styles["promo__star-icon"]} />
                            <span className={styles["promo__raiting-value"]}>{film?.tmdbRating ? film.tmdbRating.toFixed(1) : "—"}</span>
                        </div>
                        <span className={styles["promo__film-meta-text"]}>{film.releaseYear}</span>
                        <span className={styles["promo__film-meta-text"]}>{translateGenre(film.genres[0])}</span>
                        <span className={styles["promo__film-meta-text"]}>{formatRuntime(film.runtime)}</span>
                    </div>
                    <h1 className={styles["promo__title"]}>{film.originalTitle}</h1>
                    <p className={styles["promo__plot"]}>{film.plot}</p>
                </div>
                <div className={`${styles["promo__btns"]} ${isHome ? (styles["promo__btns--home-page"]) : ('')}`}>
                    <Button className={styles["promo__trailer-btn"]} onClick={handleTrailerClick}>Трейлер</Button>
                    {isHome &&
                        <Button className={`${styles["promo__details-btn"]} `} variant="secondary" onClick={handleDetailsClick}>О фильме</Button>
                    }
                    <Button
                        className={`${styles["promo__favorite-btn"]} ${isFavorite ? styles["promo__favorite-btn--active"] : ""}`}
                        variant="icon"
                        onClick={handleFavoriteClick}
                        disabled={isButtonsDisabled}>
                        {isFavorite ? <FavoriteActiveIcon className={styles[`promo__icon-active`]} /> : <FavoriteIcon className={styles[`promo__icon`]} />}
                    </Button>
                    {isHome &&
                        <Button className={styles["promo__update-btn"]} variant="icon" onClick={updateFilm}>
                            <UpdateIcon className={styles[`promo__icon`]} />
                        </Button>
                    }
                </div>
            </div>
            <div className={styles["promo__cover"]}>
                <img className={styles["promo__img"]} src={film.backdropUrl ? film.backdropUrl : NoPoster} fetchPriority="high" alt="Постер фильма" />
            </div>
            {isTrailerOpen && <Trailer />}
        </div>
    )
}