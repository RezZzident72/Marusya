import styles from "./Profile.module.scss";
import { FavoriteIcon } from "../../components/icons/Icons";
import { UserIcon } from "../../components/icons/Icons";
import { useState } from "react";
import { useProfileQuery } from "../../services/authApi";
import { UserInfo } from "../../features/user-info/UserInfo";
import { UserFavorites } from "../../features/user-favorites/UserFavorites";
import { useMediaQuery } from "../../app/custom-hooks/useMediaQuery";

export const Profile = () => {
   const isMobile = useMediaQuery("(max-width: 767px)");

   const [activeTab, setActiveTab] = useState('favorite')
   const { data: user } = useProfileQuery()

   return (
      <div className={styles["profile"]}>
         <h1 className={styles["profile__title"]}>Мой аккаунт</h1>
         <div className={styles["profile__naviagte"]}>
            <button
               className={`${styles["profile__btn"]} ${activeTab === 'favorite' ? styles['profile__btn--active'] : ''}`}
               onClick={() => { setActiveTab("favorite"); }}>
               <FavoriteIcon />
               {isMobile ? (
                  <span className={styles["profile__btn-text"]}>Избранное</span>
               ) : (
                  <span className={styles["profile__btn-text"]}>Избранные фильмы</span>
               )
               }
            </button>
            <button
               className={`${styles["profile__btn"]} ${activeTab === 'settings' ? styles['profile__btn--active'] : ''}`}
               onClick={() => { setActiveTab("settings"); }}>
               <UserIcon className={styles["profile__user-icon"]} />
               {isMobile ? (
                  <span className={styles["profile__btn-text"]}>Настройки</span>
               ) : (
                  <span className={styles["profile__btn-text"]}>Настройка аккаунта</span>
               )
               }
            </button>
         </div>
         <div className={styles["profile__info"]}>
            {activeTab === "favorite"
               ? <UserFavorites />
               : <UserInfo user={user} />
            }
         </div>
      </div>
   )
}

export default Profile