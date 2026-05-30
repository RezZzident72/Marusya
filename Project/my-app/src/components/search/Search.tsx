import styles from "./Search.module.scss";
import { SearchIcon } from "../icon/Icons";

export const Search = () => {
    return (
        <div className={styles['search']}>
            <input type="text" id="search-film" className={styles['search__field']} placeholder="Поиск" />
            <label htmlFor="search-film">
                <SearchIcon className={styles['search__icon']} />
            </label>
        </div>
    )
}