import styles from "./Social.module.scss";
import { VkIcon, YoutubeIcon, OkIcon, TelegramIcon } from "../icon/Icons";

export const Socials = () => {
    return (
        <div className={styles.socials}>
            <a href="https://vk.com" className={styles['socials__link']} aria-label="ВК" target="_blank" rel="noreferrer">
                <VkIcon className={styles['socials__icon']} />
            </a>

            <a href="https://www.youtube.com/" className={styles['socials__link']} aria-label="YouTube" target="_blank" rel="noreferrer">
                <YoutubeIcon className={styles['socials__icon']} />
            </a>

            <a href="https://ok.ru/" className={styles['socials__link']} aria-label="Одноклассники" target="_blank" rel="noreferrer">
                <OkIcon className={styles['socials__icon']} />
            </a>

            <a href="https://web.telegram.org/" className={styles['socials__link']} aria-label="Telegram" target="_blank" rel="noreferrer">
                <TelegramIcon className={styles['socials__icon']} />
            </a>
        </div>
    )
}