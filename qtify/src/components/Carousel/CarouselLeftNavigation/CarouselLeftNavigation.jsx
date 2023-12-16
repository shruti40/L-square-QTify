import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from './CarouselLeftNavigation.module.css';
import { ReactComponent as LeftArrow } from "../../../assets/left.svg";

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsBeginning(swiper.isBeginning);
        })
    });

    return (
        <div className={styles.leftNaviagation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
        </div>
    )
}