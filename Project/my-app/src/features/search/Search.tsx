import styles from "./Search.module.scss";
import { SearchIcon, CloseIcon } from "../../components/icons/Icons";
import { PromoMini } from "../../components/promo-mini/PromoMini";
import { SwiperMovies } from "../swiper-movies/SwiperMovies";
import { useSearch } from "./useSearch";

export const Search = () => {
    const {
        inputValue,
        setInputValue,
        isSearchOpen,
        isMobile,
        films,
        isFetching,
        handleCloseSearchClick
    } = useSearch();

    const searchClassName = `${styles['search']} ${isSearchOpen ? styles['search--mobile-open'] : ''}`;

    return (
        <div className={searchClassName}>
            <input
                type="text"
                id="search-film"
                className={styles['search__field']}
                placeholder="Поиск"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <label className={styles['search__label']} htmlFor="search-film">
                <SearchIcon className={styles['search__icon']} />
            </label>

            {isSearchOpen && (
                <>
                    <button
                        className={styles['search__close-btn']}
                        onClick={handleCloseSearchClick}
                        type="button"
                        aria-label="Закрыть поиск"
                    >
                        <CloseIcon className={styles['search__icon']} />
                    </button>

                    {inputValue.trim() !== "" && (
                        <div className={styles['search__result']}>
                            {films && films.length > 0 ? (
                                isMobile ? (
                                    <div className={styles["search__swiper-container"]}>
                                        <SwiperMovies
                                            films={films}
                                            gap={16}
                                            renderItem={(film) => <PromoMini film={film} />}
                                        />
                                    </div>
                                ) : (
                                    <ul className={styles["search__list"]}>
                                        {films.map((film) => (
                                            <li
                                                className={styles["search__item"]}
                                                key={film.id}
                                                onClick={handleCloseSearchClick}
                                            >
                                                <PromoMini film={film} />
                                            </li>
                                        ))}
                                    </ul>
                                )
                            ) : (
                                !isFetching && <div className={styles["search__item--empty"]}>Список пуст</div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
