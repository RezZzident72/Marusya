import styles from "./UserInfo.module.scss";
import { Button } from "../../components/button/Button";
import { EmailIcon } from "../../components/icons/Icons";
import { ProfileResponse } from "../../services/authApi";
import { useUserInfo } from "./useUserInfo";

interface UserInfoProps {
    user: ProfileResponse | undefined;
}

export const UserInfo = ({ user }: UserInfoProps) => {
    const { isLoading, handleLogout } = useUserInfo();

    return (
        <div className={styles["user-info"]}>
            <div className={styles["user-info__main"]}>
                <div className={styles["user-info__data"]}>
                    <div className={styles["user-info__wrapper-icon"]}>
                        <span className={styles["user-info__avatar"]}>{user?.name?.[0]}{user?.surname?.[0]}</span>
                    </div>
                    <div className={styles["user-info__wrapper-text"]}>
                        <span className={styles["user-info__label"]}>Имя Фамилия</span>
                        <span className={styles["user-info__value"]}>{`${user?.name} ${user?.surname}`}</span>
                    </div>
                </div>
                <div className={styles["user-info__data"]}>
                    <div className={styles["user-info__wrapper-icon"]}>
                        <EmailIcon className={styles["user-info__email-icon"]} />
                    </div>
                    <div className={styles["user-info__wrapper-text"]}>
                        <span className={styles["user-info__label"]}>Электронная почта</span>
                        <span className={styles["user-info__value"]}>{`${user?.email}`}</span>
                    </div>
                </div>
            </div>
            <Button className={styles["user-info__logout-btn"]} type="button" disabled={isLoading} onClick={handleLogout}>Выйти из аккаунта</Button>
        </div>
    )
}