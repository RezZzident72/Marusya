import styles from "./Trailer.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeTrailerWindow } from "../../app/slices/trailerSlice";
import { CloseIcon, PlayIcon } from "../../components/icons/Icons";
import ReactPlayer from 'react-player'
import { useState } from "react";

export const Trailer = () => {
    const dispatch = useAppDispatch()
    const trailerUrl = useAppSelector(state => state.trailer.activeTrailerUrl)
    const trailerTitle = useAppSelector(state => state.trailer.activeTrailerTitle);

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <div className={styles["trailer"]} onClick={() => dispatch(closeTrailerWindow())}>
            <div className={styles["trailer__wrapper"]} onClick={(e) => e.stopPropagation()}>
                <div className={styles["trailer__video-container"]}>
                    {trailerUrl &&
                        <>
                            <ReactPlayer
                                light
                                src={`https://youtube.com/embed/${trailerUrl}`}
                                width="100%"
                                height="100%"
                                playIcon={
                                    <div className={styles["trailer__btn"]}>
                                        <PlayIcon className={styles["trailer__btn-icon"]} />
                                    </div>
                                }
                                playing
                                controls
                                onStart={() => setIsVideoPlaying(true)}
                            />

                            {trailerTitle && !isVideoPlaying && (
                                <div className={styles["trailer__title-container"]}>
                                    <span className={styles["trailer__title"]}>{trailerTitle}</span>
                                </div>
                            )}
                        </>
                    }
                </div>
                <button className={styles["trailer__close-btn"]} onClick={() => dispatch(closeTrailerWindow())}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    )
}