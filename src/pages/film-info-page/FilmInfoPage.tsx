import { useParams } from "react-router-dom";
import { useGetFilmQuery } from "../../services/cinemaApi";
import { PromoFilm } from "../../components/promo-film/PromoFilm";
import { DetailsFilm } from "../../components/details-film/DetailsFilm";
import { Link } from "react-router-dom";
import styles from "./FilmInfoPage.module.scss";

export const FilmInfoPage = () => {
    const { movieId } = useParams<{ movieId: string }>()
    const { data: film, isLoading, isError } = useGetFilmQuery(movieId ?? "")

    if (!isLoading && (isError || !film || String(film.id) !== String(movieId))) {
        //Попытка грамотно проверить наличие фильма по id :)

        return (
            <div className={styles["film-info__empty"]}>
                <h2>Упс... Фильм не найден</h2>
                <p>Возможно, ссылка устарела или такого фильма никогда не было.</p>
                <Link to="/" className={styles["film-info__back-btn"]}>
                    Вернуться на главную страницу
                </Link>
            </div>
        );
    }

    return (
        <div className={styles["film-info"]}>
            {film && (
                <>
                    <PromoFilm film={film} />
                    <DetailsFilm film={film} />
                </>
            )}
        </div>
    )
}

export default FilmInfoPage