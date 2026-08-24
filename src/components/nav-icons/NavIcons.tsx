import { NavLink } from "react-router-dom";
import { GenresIcon, SearchIcon, UserIcon } from "../icons/Icons";
import styles from "./NavIcons.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { openAuthModal } from "../../app/slices/modalSlice";
import { openSearch } from "../../app/slices/searchSlice";

interface NavIconsProps {
    isAuth: boolean;
}

export const NavIcons = ({ isAuth }: NavIconsProps) => {

    const dispatch = useAppDispatch();

    const handleOpenSeacrhClick = () => {
        dispatch(openSearch())
    }

    return (
        <div className={styles["nav-icons"]}>
            <NavLink className={styles['nav-icons__link']} to="/genres">
                <GenresIcon className={styles['nav-icons__icon']}></GenresIcon>
            </NavLink>
            <button
                className={styles["nav-icons__btn"]}
                onClick={handleOpenSeacrhClick}
            >
                <SearchIcon className={styles['nav-icons__icon']}></SearchIcon>
            </button>

            {isAuth ? (
                <NavLink className={styles['nav-icons__link']} to="/profile">
                    <UserIcon className={styles['nav-icons__icon']} />
                </NavLink>
            ) : (
                <button
                    type="button"
                    onClick={() => dispatch(openAuthModal())}
                    className={styles["nav-icons__btn"]}
                >
                    <UserIcon className={styles['nav-icons__icon']} />
                </button>
            )}
        </div>
    )
}