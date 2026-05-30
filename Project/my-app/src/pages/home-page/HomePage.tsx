import { useGetMoviesQuery } from "../../services/moviesApi";
import { FilmCard } from "../../components/film-card/FilmCard";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
   const {data: movies, isLoading, isError} = useGetMoviesQuery()

   if (isLoading) return <div>Загрузка фильмов...</div>;
   if (isError) return <div>Ошибка при загрузке данных</div>;

   return (
      <div className={styles.movies}>
         {movies?.map((film)=> (
            <FilmCard film={film}/>
         ))}
      </div>
   )
}