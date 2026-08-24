import { useGetRandomFilmQuery } from "../../services/cinemaApi";
import { PromoFilm } from "../../components/promo-film/PromoFilm";
import { PromoFilmSkeleton } from "../../components/promo-film/PromoFilmSkeleton";
import { TopFilms } from "../../features/top-films/TopFilms";

export const HomePage = () => {
   let { data: film, refetch, isLoading } = useGetRandomFilmQuery()

   if (isLoading) {
      return (
         <PromoFilmSkeleton />
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