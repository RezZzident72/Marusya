import styles from "./UserFavorites.module.scss";
import { FilmCard } from "../../components/film-card/FilmCard";
import { useGetFavoritesQuery } from "../../services/favoriteApi";
import { useMediaQuery } from "../../app/custom-hooks/useMediaQuery";
import { SwiperMovies } from "../swiper-movies/SwiperMovies";


export const UserFavorites = () => {
    const isMobile = useMediaQuery("(max-width: 767px)");

    const { data: films } = useGetFavoritesQuery()

    return (
        <div className={styles["user-favorites"]}>
            {isMobile ? (
                <SwiperMovies
                    films={films}
                    gap={40}
                    renderItem={(film) => (
                        <FilmCard film={film} />
                    )} />
            ) : films && films.length > 0 ? (
                <ul className={styles["user-favorites__list"]}>
                    {films?.map((film) => (
                        <li className={styles["user-favorites__item"]} key={film.id}>
                            <FilmCard film={film} />
                        </li>
                    ))}
                </ul>
            ) : (
                <span className={styles["user-favorites__list-empty"]}>
                    В избранном пока нет доступных фильмов
                </span>
            )}
        </div>
    )
}