import type { Movie } from "../../services/cinemaApi";
import NoImg from "../../assets/image/NoImg.jpeg";
import styles from "./FilmCard.module.scss";
import { Link } from "react-router-dom";

type MovieCardProps = {
    film: Movie;
}

export const FilmCard = ({ film }: MovieCardProps) => {

    return (
        <Link to={`/${String(film.id)}`} className={styles["film-card"]}>
            <div className={styles['film-card']}>
                {film.posterUrl
                    ? <img className={styles['film-card__poster']} decoding="async" loading="lazy" src={film.posterUrl} alt={film.title} />
                    : <img className={styles['film-card__poster']} decoding="async" loading="lazy" src={NoImg} alt={film.title} />
                }
            </div>
        </Link>
    )
}