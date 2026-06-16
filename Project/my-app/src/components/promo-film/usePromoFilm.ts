// src/components/promo-film/usePromoFilm.ts
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openAuthModal } from "../../app/slices/modalSlice";
import { openTrailerWindow } from "../../app/slices/trailerSilice";
import { authApi } from "../../services/authApi";
import { useAddFavoritesMutation, useDeleteFavoritesMutation, useGetFavoritesQuery } from "../../services/favoriteApi";
import { Movie } from "../../services/cinemaApi";

export const usePromoFilm = (film: Movie) => {
    const isTrailerOpen = useAppSelector((state) => state.trailer.isTrailerOpen);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { data: user } = authApi.endpoints.profile.useQueryState();
    const { data: favorites } = useGetFavoritesQuery(undefined, { skip: !user });

    const [addFilmToFavorite, { isLoading: isAdding }] = useAddFavoritesMutation();
    const [deleteFilmToFavorite, { isLoading: isDeleting }] = useDeleteFavoritesMutation();

    const isFavorite = favorites?.some(favFilm => Number(favFilm.id) === Number(film.id));

    const handleFavoriteClick = async () => {
        if (!film) return;

        if (!user) {
            dispatch(openAuthModal());
            return;
        }

        try {
            if (isFavorite) {
                await deleteFilmToFavorite({ movieId: Number(film.id) }).unwrap();
            } else {
                await addFilmToFavorite({ movieId: String(film.id) }).unwrap();
            }
        } catch (error) {
            alert("Произошла ошибка. Попробуйте позже.");
        }
    };

    const handleTrailerClick = () => {
        dispatch(openTrailerWindow({
            url: film.trailerYouTubeId,
            title: film.originalTitle
        }));
    };

    const handleDetailsClick = () => {
        navigate(`/${film.id}`);
    };

    return {
        isTrailerOpen,
        isFavorite,
        isButtonsDisabled: isAdding || isDeleting,
        handleFavoriteClick,
        handleTrailerClick,
        handleDetailsClick
    };
};
