import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.scss";
import { Search } from "../search/Search";

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `${styles['nav__link']} ${isActive ? styles['nav__link--active'] : ''}`;
};


export const NavMenu = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={getLinkClass}>Главная</NavLink>
            <NavLink to="/movie/genres" className={getLinkClass}>Жанры</NavLink>
            <Search />
        </nav>
    )
}