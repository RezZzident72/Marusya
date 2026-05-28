import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout = () => {
    return (
        <div className={styles.appContainer}>
            <header className={styles.header}>
                <Link to="/" className={styles.logo}>Маруся</Link>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>Главная</Link>
                    <Link to="/movie/genres" className={styles.link}>Жанры</Link>
                    <div className={styles.search}>
                        <input type="text" id="search-film" className={styles.searchField} placeholder="Поиск"/>
                        <label htmlFor="search-film"></label>
                    </div>
                </nav>
                <Link to="/profile" className={styles.link}>Профиль</Link>
            </header>

            <main className={styles.content}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                <p>© 2026 Онлайн-кинотеатр.</p>
            </footer>
        </div>
    );
}