import styles from "./Login.module.scss";
import { Button } from "../../components/button/Button";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { EmailIcon } from "../../components/icons/Icons";
import { PasswordIcon } from "../../components/icons/Icons";
import { useLogin } from "./useLogin";

type LoginProps = {
    switchForm: () => void;
}

export const Login = ({ switchForm }: LoginProps) => {
    const {
        isLoading,
        errorMessage,
        setEmail,
        setPassword,
        handleSubmit
    } = useLogin();

    return (
        <div className={styles["login"]}>
            <form className={styles["login__form"]} onSubmit={(e) => { void handleSubmit(e); }} onInvalid={(e) => { e.currentTarget.classList.add(styles["login__form--errors"]); }}>
                <div className={styles["login__fields"]}>
                    <CustomInput type="email" placeholder="Электронная почта" id="user-email" label={<EmailIcon />} onChange={e => { setEmail(e.target.value); }} required />
                    <CustomInput type="password" placeholder="Пароль" id="user-password" label={<PasswordIcon />} onChange={e => { setPassword(e.target.value); }} required />

                    {errorMessage && (
                        <div className={styles["login__error-text"]}>
                            {errorMessage}
                        </div>
                    )}
                </div>

                <Button className={styles["login__button-submit"]} variant="primary" type="submit" disabled={isLoading}>Войти</Button>
                <button type="button" className={styles["login__registration-btn"]} onClick={switchForm}>
                    Регистрация
                </button>
            </form>
        </div>
    )
}