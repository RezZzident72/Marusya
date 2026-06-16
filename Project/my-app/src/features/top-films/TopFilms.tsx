import styles from "./TopFilms.module.scss";
import { useGetTopFilmsQuery } from "../../services/cinemaApi";
import { FilmCard } from "../../components/film-card/FilmCard";
import { useMediaQuery } from "../../app/custom-hooks/useMediaQuery";
import { lazy } from "react";

const LazyMobileSwiper = lazy(() => import('../swiper-movies/SwiperMovies'));

export const TopFilms = () => {
    const { data: movies, isError } = useGetTopFilmsQuery()
    const isMobile = useMediaQuery("(max-width: 767px)")

    if (isError) return <div>Ошибка при загрузке данных</div>;

    return (
        <div className={styles["top-10-films"]}>
            <h2 className={styles["top-10-films__title"]}>Топ 10 фильмов</h2>
            <div className={styles["top-10-films__result"]}>
                {isMobile ? (
                    <LazyMobileSwiper
                        films={movies}
                        gap={40}
                        renderItem={(film) => (
                                <FilmCard film={film} />
                        )} />
                ) : (
                    <ul className={styles["top-10-films__list"]}>
                        {movies && movies.map((film) => {
                            return (
                                <li className={styles["top-10-films__item"]} key={film.id}>
                                    <FilmCard film={film} />
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}