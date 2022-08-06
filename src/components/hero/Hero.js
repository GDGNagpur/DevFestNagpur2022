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
import { ReactComponent as TwitterSvg } from "../../assets/hero/twitter.svg";
import { ReactComponent as InstagramSvg } from "../../assets/hero/instagram.svg";
import { ReactComponent as CutSvg } from "../../assets/hero/cut.svg";
import { ReactComponent as Linkedinsvg } from "../../assets/hero/linkedin.svg";
import { ReactComponent as IllustrationLightMobileBg } from "../../assets/hero/mobile-illustration-light-mode.svg";
import { ReactComponent as IllustrationDarkMobileBg } from "../../assets/hero/mobile-illustration-dark-mode.svg";
import gdgDarkLogo from "../../assets/hero/gdg-dark-logo.png";
import gdgLightLogo from "../../assets/hero/gdg-light-logo.png";
import styles from "./Hero.module.css";

import { useThemeContext } from "../../theme/ThemeProvider";
import CountDown from "../countdown/CountDown";

const Hero = () => {
  const { theme, changeTheme } = useThemeContext();

  const handleClick = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

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
          <div data-aos="none" className={styles["devfest-svg"]}>
            {theme === "light" ? (
              <DevfestDarkSvg></DevfestDarkSvg>
            ) : (
              <DevfestLightSvg></DevfestLightSvg>
            )}
          </div>
        </div>
        <div className={styles["heading"]}>
          <h1
            style={{
              color:
                theme === "light"
                  ? "rgba(97, 97, 97, 1)"
                  : "rgba(232, 234, 237, 1)",
            }}
          >
            <p>
              Central{" "}
              <span className={styles["cut-mask"]}>
                <CutSvg></CutSvg>
              </span>
            </p>{" "}
            India's Largest
          </h1>
          <h1
            style={{
              color: theme === "light" ? "black" : "rgba(255, 255, 255, 1)",
            }}
          >
            Developer Conference
          </h1>
        </div>
        <div
          style={{
            color: theme === "light" ? "#202124" : "#E8EAED",
          }}
          className={styles["counter"]}
        >
          <CountDown></CountDown>
        </div>
        <div className={styles["timeline"]}>
          <h3>5-6 November</h3>
          <p>#Staytuned</p>
        </div>
        <div
          style={
            theme === "light"
              ? { background: "#fcfcfc" }
              : { background: "#181818" }
          }
          className={
            theme === "light"
              ? styles["email-social"]
              : `${styles["email-social"]} ${styles["dark"]}`
          }
        >
          <div className={styles["email"]}>
            <p>Reach out to us at</p>
            <a href="mailto:support@devfestnagpur.in">
              support@devfestnagpur.in
            </a>
          </div>
          <div className={styles["social"]}>
            <p>Follow us on</p>
            <div>
              <a
                className={
                  theme === "light"
                    ? `${styles["light-link"]}`
                    : `${styles["dark-link"]}`
                }
                href="https://twitter.com/GDGNagpur_"
                target={"_blank"}
                rel="noreferrer"
              >
                <TwitterSvg></TwitterSvg>
              </a>
              <a
                className={
                  theme === "light" ? styles["light-link"] : styles["dark-link"]
                }
                href="https://www.instagram.com/gdgnagpur"
                target={"_blank"}
                rel="noreferrer"
              >
                <InstagramSvg></InstagramSvg>
              </a>

              <a
                className={
                  theme === "light" ? styles["light-link"] : styles["dark-link"]
                }
                href="https://www.linkedin.com/company/gdgnagpur/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Linkedinsvg></Linkedinsvg>
              </a>
            </div>
            {/* <a
                className={
                  theme === "light" ? styles["light-link"] : styles["dark-link"]
                }
                href="mailto:support@devfestnagpur.in"
                target={"_blank"}
                rel="noreferrer"
              >
                <EmailSvg></EmailSvg>
              </a> */}
          </div>
        </div>
      </div>
      <div className={styles["toggle"]}>
        <button onClick={handleClick}>
          {theme === "light" ? (
            <span>
              <SunSvg />
            </span>
          ) : (
            <span className={styles["moon"]}>
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
          {theme === "light" ? (
            <LionSvg data-aos-duration="800" data-aos="zoom-in-left"></LionSvg>
          ) : (
            <span>
              <LionSvg
                data-aos-duration="800"
                data-aos="zoom-in-left"
              ></LionSvg>
            </span>
          )}
        </div>
        <div className={styles["monument"]}>
          {theme === "light" ? (
            <MonumentSvgGreen
              data-aos-duration="700"
              data-aos="fade-up"
            ></MonumentSvgGreen>
          ) : (
            <MonumentSvgWhite
              data-aos-duration="700"
              data-aos="fade-up"
            ></MonumentSvgWhite>
          )}
        </div>
        <div className={styles["bridge"]}>
          {theme === "light" ? (
            <BridgeSvg
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos="fade-down-left"
            ></BridgeSvg>
          ) : (
            <span>
              <BridgeSvg
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos="fade-down-left"
              ></BridgeSvg>
            </span>
          )}
        </div>
      </div>
      <div className={styles["mobile-illustration-container"]}>
        <div className={styles["mobile-illustration"]}>
          {theme === "light" ? (
            <IllustrationLightMobileBg></IllustrationLightMobileBg>
          ) : (
            <IllustrationDarkMobileBg></IllustrationDarkMobileBg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
