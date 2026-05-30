import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import "../style/_variables.scss";
import { Socials } from "../../components/social/Social";
import { NavMenu } from "../../components/nav-menu/NavMenu";
import logoSvg from "../../assets/image/logo.svg";

export const Layout = () => {

    return (
        <div className={styles.layout}>
            <header className={styles['layout__header']}>
                <Link to="/" className={styles['layout__link']}>
                    <img src={logoSvg} alt="Логотип маруся" />
                </Link>
                <NavMenu />
                <Link to="/profile" className={styles['layout__link']}>Войти</Link>
            </header>

            <main className={styles['layout__content']}>
                <Outlet />
            </main>

            <footer className={styles['layout__footer']}>
                <Socials />
            </footer>
        </div>
    );
}