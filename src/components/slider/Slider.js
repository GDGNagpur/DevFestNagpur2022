import React from "react";
import styles from './Slider.module.css';
import { ReactComponent as ThomsonPicSvg } from "../../assets/whyDevfest/thomas-ezan-pic.svg";

//slider 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={styles['slider-container']}>
                        <div className={styles['slide-pic']}>
                            <ThomsonPicSvg />
                        </div>
                        <div className={styles['slide-info']}>
                            <p>“DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!”</p>
                            <div className={styles['role']}>
                                <span>Thomas Ezan</span>
                                <span>Developer Advocate at Google</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['slider-container']}>
                        <div className={styles['slide-pic']}>
                            <ThomsonPicSvg />
                        </div>
                        <div className={styles['slide-info']}>
                            <p>“DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!”</p>
                            <div className={styles['role']}>
                                <span>Thomas Ezan</span>
                                <span>Developer Advocate at Google</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['slider-container']}>
                        <div className={styles['slide-pic']}>
                            <ThomsonPicSvg />
                        </div>
                        <div className={styles['slide-info']}>
                            <p>“DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!”</p>
                            <div className={styles['role']}>
                                <span>Thomas Ezan</span>
                                <span>Developer Advocate at Google</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['slider-container']}>
                        <div className={styles['slide-pic']}>
                            <ThomsonPicSvg />
                        </div>
                        <div className={styles['slide-info']}>
                            <p>“DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!”</p>
                            <div className={styles['role']}>
                                <span>Thomas Ezan</span>
                                <span>Developer Advocate at Google</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['slider-container']}>
                        <div className={styles['slide-pic']}>
                            <ThomsonPicSvg />
                        </div>
                        <div className={styles['slide-info']}>
                            <p>“DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!”</p>
                            <div className={styles['role']}>
                                <span>Thomas Ezan</span>
                                <span>Developer Advocate at Google</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['slider-container']}>
                        <div className={styles['slide-pic']}>
                            <ThomsonPicSvg />
                        </div>
                        <div className={styles['slide-info']}>
                            <p>“DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!”</p>
                            <div className={styles['role']}>
                                <span>Thomas Ezan</span>
                                <span>Developer Advocate at Google</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider;