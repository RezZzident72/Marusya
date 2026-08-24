import styles from "./Registration.module.scss";
import { Button } from "../../components//button/Button";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { EmailIcon } from "../../components/icons/Icons";
import { PasswordIcon } from "../../components/icons/Icons";
import { UserIcon } from "../../components/icons/Icons";
import { useRegistration } from "./useRegistration";

type RegistrationProps = {
    switchForm: () => void;
}

export const Registration = ({ switchForm }: RegistrationProps) => {
    const {
        isLoading,
        success,
        errorMessage,
        setEmail,
        setName,
        setSurname,
        setPassword,
        setPasswordDouble,
        handleSubmit
    } = useRegistration();

    return (
        <div className={styles["registration"]}>
            {success ? (
                <div className={styles["registration__success"]}>
                    <h2 className={styles["registration__title"]}>Регистрация завершена</h2>
                    <span className={styles["registration__text"]}>Используйте вашу электронную почту для входа</span>
                    <Button className={styles["registration__button-login"]} onClick={switchForm} variant="primary" type="button" disabled={isLoading}>Войти</Button>
                </div>
            ) : (
                <form className={styles["registration__form"]} onSubmit={(e) => { void handleSubmit(e); }} onInvalid={(e) => { e.currentTarget.classList.add(styles["registration__form--errors"]); }}>
                    <h2 className={styles["registration__title"]}>Регистрация</h2>
                    <div className={styles["registration__fields"]}>
                        <CustomInput type="email" placeholder="Электронная почта" id="user-email" label={<EmailIcon />} onChange={e => { setEmail(e.target.value); }} required />
                        <CustomInput type="text" placeholder="Имя" id="user-name" label={<UserIcon />} onChange={e => { setName(e.target.value); }} required />
                        <CustomInput type="text" placeholder="Фамилия" id="user-surname" label={<UserIcon />} onChange={e => { setSurname(e.target.value); }} required />
                        <CustomInput type="password" placeholder="Пароль" id="user-password" label={<PasswordIcon />} onChange={e => { setPassword(e.target.value); }} required />
                        <CustomInput type="password" placeholder="Подтвердите пароль" id="user-password-replay" label={<PasswordIcon />} onChange={e => { setPasswordDouble(e.target.value); }} required />

                        {errorMessage && (
                            <div className={styles["registration__error-text"]}>
                                {errorMessage}
                            </div>
                        )}
                    </div>

                    <Button className={styles["registration__button-submit"]} variant="primary" type="submit" disabled={isLoading}>Создать аккаунт</Button>
                    <button className={styles["registration__login-btn"]} type="button" onClick={switchForm}>
                        У меня есть пароль
                    </button>
                </form>
            )
            }
        </div >
    )
}