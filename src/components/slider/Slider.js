import React from "react";
import styles from "./Slider.module.css";
import SliderData from "./SliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useColorModeValue } from "../../hooks/useColorModeValue";

function Slider() {
const currentTheme = useColorModeValue("light", "dark");

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
        className="DevFestSlider"
      >
        {SliderData.map((slide) => {
          return (
            <SwiperSlide
              key={slide.id}
              style={{ background: slide.theme.backgroundColor }}
            >
              <div className={styles[`slider-container-${currentTheme}`]}>
                <div className={styles["slide-pic"]}>
                  <img draggable={false} src={slide.imgSrc} alt="React Logo" />
                </div>
                <div className={styles["slide-info"]}>
                  <p>“{slide.whatSaid}”</p>
                  <div
                    className={styles["role"]}
                    style={{ color: slide.theme.Color }}
                  >
                    <span>{slide.name}</span>
                    <span>{slide.designation}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Slider;
