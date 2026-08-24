import { useState } from "react";
import { useRegisterMutation, ResponseError } from "../../services/authApi";

export const useRegistration = () => {
    const [registration, { isLoading }] = useRegisterMutation();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordDouble, setPasswordDouble] = useState('');
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);

        if (password !== passwordDouble) {
            setErrorMessage("Пароли должны совпадать");
            return;
        }

        try {
            const response = await registration({ 
                email, 
                name, 
                surname, 
                password 
            }).unwrap();

            if (response) {
                setSuccess(true);
            }
        } catch (error) {
            const err = error as ResponseError;
            const isInvalidCredentials = err.data?.error;

            const serverErrorMessage = isInvalidCredentials
                ? "Пользователь с такой почтой уже существует."
                : "Произошла непредвиденная ошибка на сервере.";

            setErrorMessage(serverErrorMessage);
        }
    };

    return {
        isLoading,
        success,
        errorMessage,
        setEmail,
        setName,
        setSurname,
        setPassword,
        setPasswordDouble,
        handleSubmit
    };
};
