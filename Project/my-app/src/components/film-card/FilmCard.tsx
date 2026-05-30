import { Movie } from "../../services/moviesApi";
import styles from "./FilmCard.module.scss";

interface MovieCardProps {
    film: Movie;
}

export const FilmCard = ({ film }: MovieCardProps) => {
    return (
        <div className={styles['film-card']}>
            <img className={styles['film-card__poster']} src={film.posterUrl} alt={film.title} />
        </div>
    )
}