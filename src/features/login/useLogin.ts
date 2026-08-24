import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import type { ResponseError } from "../../services/authApi";
import { useLoginMutation } from "../../services/authApi";
import { closeAuthModal } from "../../app/slices/modalSlice";

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [loginUser, { isLoading }] = useLoginMutation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);

        try {
            const response = await loginUser({ email, password }).unwrap();

            if (response.result) {
                dispatch(closeAuthModal());
                void navigate("/profile");
            }
        } catch (error) {
            const err = error as ResponseError;
            const isInvalidCredentials = err.data?.result === false;

            const serverErrorMessage = isInvalidCredentials
                ? "Неверный логин или пароль."
                : "Произошла непредвиденная ошибка на сервере.";

            setErrorMessage(serverErrorMessage);
        }
    };

    return {
        isLoading,
        errorMessage,
        setEmail,
        setPassword,
        handleSubmit
    };
};
