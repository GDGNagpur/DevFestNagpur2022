import React from "react";
import styles from "./ThemesSection.module.css";
import BgImgLight from "../../assets/themesSection/BgImgLight.png";
import BgImgDark from "../../assets/themesSection/BgImgDark.png";
import BgImg1 from "../../assets/themesSection/BgImg1.png";
import BgImg1Dark from "../../assets/themesSection/BgImg1Dark.png";
import { Tech } from "../../assets/themesSection/Tech";
import { Startup } from "../../assets/themesSection/Startup";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import { useThemeContext } from "../../theme/ThemeProvider";

const ThemesSection = () => {
  const { theme } = useThemeContext();

  return (
    <div className={styles.container}>
      <div
        className={styles.heading}
        style={{ color: useColorModeValue("#505050", "#ffffff") }}
      >
        Themes 🪄
      </div>
      <div className={styles.themesBody}>
        <img
          className={styles.bgimg1}
          src={theme === "light" ? BgImgLight : BgImgDark}
          alt="background"
        />
        <img
          className={styles.bgimg2}
          src={theme === "light" ? BgImg1 : BgImg1Dark}
          alt="background"
        />
        <div className={styles.textContainer}>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className={styles.techImg}
          >
            <Tech />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className={styles.startupImg}
          >
            <Startup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemesSection;
