import { useGetGenreQuery } from "../../services/cinemaApi";
import styles from "./GenrePage.module.scss";
import { GenreCard } from "../../components/genre-card/GenreCard";
import { genreDictionary } from "./GenrePage";

export const GenrePage = () => {
   const { data: genres, isError } = useGetGenreQuery()

   if (isError) return <div>Ошибка при загрузке данных</div>;

   return (
      <div className={styles["genres"]}>
         <h1 className={styles["genres__title"]}>Жанры фильмов</h1>
         <ul className={styles['genres__list']}>
            {genres?.map((genre) => {
               const info = genreDictionary[genre] || { title: genre, image: "" };

               return (
                  <li key={info.id} className={styles['genres__item']}>
                     <GenreCard genre={info.id} title={info.title} image={info.image}/>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default GenrePage