import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMoviesQuery } from "../../services/cinemaApi";
import { useMediaQuery } from "../../app/custom-hooks/useMediaQuery";

export const useFilmList = () => {
    const isMobile = useMediaQuery("(max-width: 767px)");
    
    const pageStep = isMobile ? 5 : 10;

    const [count, setCount] = useState(() => (window.innerWidth < 767 ? 5 : 10));
    
    const { genreName } = useParams<{ genreName: string }>();
    
    const { data: movies, isError, isFetching } = useGetMoviesQuery({ 
        genre: genreName, 
        count: count 
    });

    const handleShowMore = () => {
        setCount((prevCount) => prevCount + pageStep);
    };

    const hasMoreFilms = !isError && movies && movies.length === count;
    const isShowButtonVisible = isFetching || hasMoreFilms;

    return {
        genreName: genreName || "",
        movies,
        isError,
        isFetching,
        isShowButtonVisible,
        handleShowMore
    };
};
