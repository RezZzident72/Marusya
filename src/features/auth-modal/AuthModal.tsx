import styles from "./AuthModal.module.scss";
import LogoBlack from "../../assets/image/LogoBlack.png";
import { Login } from "../login/Login";
import { CloseIcon } from "../../components/icons/Icons";
import { useState, useEffect } from "react";
import { Registration } from "../registration/Registration";
import { useAppDispatch } from "../../app/hooks";
import { closeAuthModal } from "../../app/slices/modalSlice";

export const AuthModal = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => setIsLogin((login) => !login);

    const dispatch = useAppDispatch()

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    
    return (
        <div className={styles["auth-modal"]}>
            <div className={styles["auth-modal__wrapper"]}>
                <div className={styles["auth-modal__window"]}>
                    <button className={styles["auth-modal__close-btn"]} onClick={()=>{dispatch(closeAuthModal())}}><CloseIcon /></button>
                    <img className={styles["auth-modal__logo"]} src={LogoBlack} alt="Маруся" />
                    {isLogin
                        ? <Login switchForm={toggleForm}/>
                        : <Registration switchForm={toggleForm} />
                    }
                </div>
            </div>
        </div>
    )
}