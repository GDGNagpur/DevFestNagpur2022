import React from "react";
import { ReactComponent as DevfestLightSvg } from "../../assets/hero/devfest-light.svg";
import { ReactComponent as DevfestDarkSvg } from "../../assets/hero/devfest-dark.svg";
import { ReactComponent as IllustrationLightBg } from "../../assets/hero/illustration/illustration-light-mode-bg.svg";
import { ReactComponent as IllustrationDarkBg } from "../../assets/hero/illustration/illustration-dark-mode-bg.svg";
import { ReactComponent as LionSvg } from "../../assets/hero/illustration/lion.svg";
import { ReactComponent as MonumentSvgWhite } from "../../assets/hero/illustration/monument-white.svg";
import { ReactComponent as MonumentSvgGreen } from "../../assets/hero/illustration/monument-green.svg";
import { ReactComponent as BridgeSvg } from "../../assets/hero/illustration/bridge.svg";
import { ReactComponent as SunSvg } from "../../assets/hero/sun.svg";
import { ReactComponent as MoonSvg } from "../../assets/hero/moon.svg";
import gdgDarkLogo from "../../assets/hero/gdg-dark-logo.png";
import gdgLightLogo from "../../assets/hero/gdg-light-logo.png";
import styles from "./Hero.module.css";
import { useThemeContext } from "../../theme/ThemeProvider";

const Hero = () => {
  const { theme, changeTheme } = useThemeContext();

  console.log(theme);

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["banner"]}>
          <div className={styles["gdg-logo"]}>
            <img
              draggable={false}
              src={theme === "light" ? gdgDarkLogo : gdgLightLogo}
              alt="Google Developers Groups, Nagpur"
            />
          </div>
          <div className={styles["devfest-svg"]}>
            {theme === "light" ? (
              <DevfestDarkSvg></DevfestDarkSvg>
            ) : (
              <DevfestLightSvg></DevfestLightSvg>
            )}
          </div>
        </div>
        <div className={styles["heading"]}>
          <h1>
            <span>Central</span> India's Largest Developer Conference
          </h1>
        </div>
        <div className={styles["counter"]}>30 Hours : 10 mins: 15 Sec</div>
        <div className={styles["timeline"]}></div>
        <div className={styles["social"]}></div>
      </div>
      <div className={styles["toggle"]}>
        <button
          onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <span>
              <SunSvg />
            </span>
          ) : (
            <span className={styles["moon"]} >
              <MoonSvg />
            </span>
          )}
        </button>
      </div>
      <div className={styles["desktop-illustration-container"]}>
        <div className={styles["illustration-bg"]}>
          {theme === "light" ? (
            <IllustrationLightBg></IllustrationLightBg>
          ) : (
            <IllustrationDarkBg></IllustrationDarkBg>
          )}
        </div>
        <div className={styles["lion"]}>
          <LionSvg></LionSvg>
        </div>
        <div className={styles["monument"]}>
          {theme === "light" ? (
            <MonumentSvgGreen></MonumentSvgGreen>
          ) : (
            <MonumentSvgWhite></MonumentSvgWhite>
          )}
        </div>
        <div className={styles["bridge"]}>
          <BridgeSvg></BridgeSvg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
