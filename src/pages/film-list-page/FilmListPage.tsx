import { Link } from "react-router-dom";
import { FilmCard } from "../../components/film-card/FilmCard";
import styles from "./FilmListPage.module.scss";
import { translateGenre } from "../../utils/genre-translation";
import { ArrowBackIcon } from "../../components/icons/Icons";
import { Button } from "../../components/button/Button";
import { useFilmList } from "./useFilmList";

export const FilmListPage = () => {
   const {
      genreName,
      movies,
      isError,
      isFetching,
      isShowButtonVisible,
      handleShowMore
   } = useFilmList();

   if (isError) return <div className={styles["films__error"]}>Ошибка при загрузке данных</div>;

   return (
      <div className={styles["films"]}>
         <Link to={"/genres"} className={styles["films__back-link"]}>
            <ArrowBackIcon className={styles["films__back-icon"]} />
            {translateGenre(genreName ? genreName : "")}
         </Link>
         <div className={styles["films__wrapper"]}>
            <ul className={styles["films__list"]}>
               {movies && movies.length > 0 ? (movies?.map((film) => (
                  <li className={styles["films__item"]} key={film.id}>
                     <FilmCard film={film} />
                  </li>
               ))) : (
                  <div className={styles["films__list-empty"]}>
                     В этом жанре пока нет доступных фильмов
                  </div>
               )}
            </ul>
         </div>
         {isShowButtonVisible &&
            <Button className={styles["films__button"]}
               variant="primary"
               type="button"
               disabled={isFetching}
               onClick={handleShowMore}>{isFetching ? "Загрузка ..." : "Показать еще"}</Button>
         }
      </div>
   )
}

export default FilmListPage