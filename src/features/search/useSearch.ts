import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openSearch, closeSearch } from "../../app/slices/searchSlice";
import { useGetMoviesQuery } from "../../services/cinemaApi";
import { useMediaQuery } from "../../app/custom-hooks/useMediaQuery";

export const useSearch = () => {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState("");
    const [debouncedTitle, setDebouncedTitle] = useState("");

    const isSearchOpen = useAppSelector(state => state.search.isOpen);

    useEffect(() => {
        if (inputValue.trim() === "") {
            setDebouncedTitle("");
            dispatch(closeSearch());
            return;
        }

        const handler = setTimeout(() => {
            setDebouncedTitle(inputValue);
            dispatch(openSearch());
        }, 400);

        return () => { clearTimeout(handler); };
    }, [inputValue, dispatch]);

    const { data: films, isFetching } = useGetMoviesQuery(
        { title: debouncedTitle, count: 5 },
        { skip: debouncedTitle.trim() === "" }
    );

    const handleCloseSearchClick = () => {
        setInputValue("");
        setDebouncedTitle("");
        dispatch(closeSearch());
    };

    return {
        inputValue,
        setInputValue,
        isSearchOpen,
        isMobile,
        films,
        isFetching,
        handleCloseSearchClick
    };
};
