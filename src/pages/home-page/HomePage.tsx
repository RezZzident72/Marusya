import { useGetRandomFilmQuery } from "../../services/cinemaApi";
import { PromoFilm } from "../../components/promo-film/PromoFilm";
import { PromoFilmSkeleton } from "../../components/promo-film/PromoFilmSkeleton";
import { TopFilms } from "../../features/top-films/TopFilms";

export const HomePage = () => {
   const { data: film, refetch, isLoading } = useGetRandomFilmQuery()

   if (isLoading) {
      return (
         <PromoFilmSkeleton />
      );
   }

   return (
      <>
         {film &&
            <PromoFilm film={film} isHome={true} updateFilm={() => { void refetch(); }} />
         }
         <TopFilms />
      </>
   )
}

export default HomePage