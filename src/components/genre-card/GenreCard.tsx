import { Link } from "react-router-dom";
import styles from "./GenreCard.module.scss";
import { translateGenre } from "../../utils/genre-translation";

type GenreCardProps = {
    genre: string;
    title: string;
    image: string;
}

export const GenreCard = ({genre, title, image }: GenreCardProps) => {

    return (
        <Link to={`/genres/filmList/${genre}`} className={styles["genre-card"]}>
            <div className={styles["genre-card__wrapper"]}>
                <img className={styles["genre-card__img"]} src={image} alt={title} />
                <span className={styles["genre-card__title"]}>{translateGenre(title)}</span>
            </div>
        </Link>
    )
}