import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import "../style/_variables.scss";
import { Socials } from "../../components/social/Social";
import logo from "../../assets/image/Logo.png";
import { AuthModal } from "../../features/auth-modal/AuthModal";
import { useProfileQuery } from "../../services/authApi";
import { getLinkClass } from "../../utils/get-link-class";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openAuthModal } from "../../app/slices/modalSlice";
import { NavIcons } from "../nav-icons/NavIcons";
import { Search } from "../../features/search/Search";
import { Container } from "../container/Container";

export const Layout = () => {
    const { data: user, isSuccess } = useProfileQuery()

    const dispatch = useAppDispatch();
    const isAuthOpen = useAppSelector((state) => state.modal.isAuthOpen);


    return (
        <div className={styles["layout"]}>
            <header className={styles['layout__header']}>
                <Container>
                    <div className={styles['layout__wrapper']}>
                        <Link to="/" className={styles['layout__link--logo']}>
                            <img className={styles['layout__logo']} src={logo} alt="Логотип маруся" />
                        </Link>

                        <div className={styles["layout__main"]}>
                            <NavLink to="/" className={getLinkClass(styles['layout__link'], styles['layout__link--active'])}>Главная</NavLink>
                            <NavLink to="/genres" className={getLinkClass(styles['layout__link'], styles['layout__link--active'])}>Жанры</NavLink>
                            <Search />
                        </div>

                        <NavIcons isAuth={isSuccess} />
                        {isSuccess
                            ? <NavLink to={"/profile"} className={getLinkClass(styles['layout__link'], styles['layout__link--active'])}>
                                {user.name}
                            </NavLink>
                            : <button className={styles['layout__btn']} onClick={() => dispatch(openAuthModal())}>Войти</button>
                        }
                    </div>
                </Container>
            </header>

            <main className={styles['layout__content']}>
                <Container>
                    <Outlet />
                </Container>
            </main>

            {isAuthOpen && <AuthModal />}

            <footer className={styles['layout__footer']}>
                <Container>
                    <Socials />
                </Container>
            </footer>
        </div>
    );
}