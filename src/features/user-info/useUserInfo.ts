import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import type { ResponseError } from "../../services/authApi";
import { useLogoutMutation, authApi } from "../../services/authApi";
import { favoriteApi } from "../../services/favoriteApi";

export const useUserInfo = () => {
    const [logout, { isLoading }] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        const resetStoresAndRedirect = () => {
            dispatch(authApi.util.resetApiState());
            dispatch(favoriteApi.util.resetApiState());
            void navigate("/");
        };

        try {
            const response = await logout().unwrap();
            if (response.result) {
                resetStoresAndRedirect();
            }
        } catch (error) {
            const err = error as ResponseError;
            const isInvalidCredentials = err.data?.result === false;

            const serverErrorMessage = isInvalidCredentials
                ? "Сессия уже недействительна."
                : "Произошла непредвиденная ошибка на сервере.";

            console.error(`Ошибка выхода: ${serverErrorMessage}`);
            resetStoresAndRedirect();
        }
    };

    return {
        isLoading,
        handleLogout
    };
};
