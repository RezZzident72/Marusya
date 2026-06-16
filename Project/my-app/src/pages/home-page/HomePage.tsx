import { useGetRandomFilmQuery } from "../../services/cinemaApi";
import { PromoFilm } from "../../components/promo-film/PromoFilm";
import { TopFilms } from "../../features/top-films/TopFilms";

export const HomePage = () => {
   let { data: film, refetch, isLoading } = useGetRandomFilmQuery()

   if (isLoading) {
      return (
         <div style={{
            minHeight: '552px',
            backgroundColor: '#111',
            borderRadius: '16px',
            margin: '20px 0'
         }} />
      );
   }

   return (
      <>
         {film &&
            <PromoFilm film={film} isHome={true} updateFilm={refetch} />
         }
         <TopFilms />
      </>
   )
}

export default HomePage