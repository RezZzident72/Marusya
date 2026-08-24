import type { Movie } from "../../services/cinemaApi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import styles from "./SwiperMovies.module.scss";
import type { ReactNode } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SwiperProps = {
    films: Movie[] | undefined;
    renderItem: (film: Movie) => ReactNode;
    gap: number;
}

export const SwiperMovies = ({ films, renderItem, gap }: SwiperProps) => {
    return (
        <div className={styles["swiper-container-wrapper"]}>
            <Swiper
                modules={[Navigation, Pagination, Keyboard, Mousewheel]}
                spaceBetween={gap}
                keyboard={{ enabled: true }}
                mousewheel={{ forceToAxis: true }}
                lazyPreloadPrevNext={2}
                slidesPerView={'auto'}
            >
                {films?.map((film) => (
                    <SwiperSlide key={film.id}>
                        {renderItem(film)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperMovies