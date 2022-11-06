import React from "react";
import styles from "./NewHero.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import { ReactComponent as CalendarSvg } from "../../assets/hero/calendar.svg";
import { ReactComponent as CutSvg } from "../../assets/hero/cut.svg";
import { ReactComponent as MapSvg } from "../../assets/hero/map.svg";
import {ReactComponent as MobileGdgSvg} from "../../assets/hero/mobile-gdg-logo.svg"


import gdgDarkLogo from "../../assets/hero/gdg-dark-logo.png";
import gdgLightLogo from "../../assets/hero/gdg-light-logo.png";

const NewHero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-info"]}>
        <div className={styles["gdg-logo"]}>
          <img
            className={styles["desktop-img"]}
            draggable={false}
            src={useColorModeValue(gdgDarkLogo, gdgLightLogo)}
            alt="Google Developers Groups, Nagpur"
          />
          <div
            className={useColorModeValue(
              styles["mobile-img"],
              `${styles["mobile-img"]} ${styles["img-dark"]}`
            )}
          >
            <MobileGdgSvg></MobileGdgSvg>
          </div>
        </div>
        <div className={styles["heading"]}>
          <h1
            style={{
              color: useColorModeValue(
                "rgba(97, 97, 97, 1)",
                "rgba(232, 234, 237, 1)"
              ),
            }}
          >
            <p>
              Central{" "}
              <span className={styles["cut-mask"]}>
                <CutSvg />
              </span>
            </p>{" "}
            India's Largest
          </h1>
          <h1
            style={{
              color: useColorModeValue("black", "rgba(255, 255, 255, 1)"),
            }}
          >
            Developer Conference
          </h1>
        </div>
        <div className={styles["cta-container"]}>
          <div
            style={{ color: useColorModeValue("#202124", "white") }}
            className={styles["date"]}
          >
            <CalendarSvg
              className={useColorModeValue(
                styles["cal-svg"],
                `${styles["cal-svg"]} ${styles["svg-dark"]}`
              )}
            ></CalendarSvg>
            <span>
              5<sup>th</sup> & 6<sup>th</sup> November, 2022
            </span>
          </div>
          <div className={styles["register-cta"]}>
            <a style={{cursor: "auto"}} href="#">Registeration Closed</a>
          </div>
        </div>
      </div>

      <div className={styles["hero-map-container"]}>
        {useColorModeValue(
          <MapSvg></MapSvg>,
          <div>
            <MapSvg></MapSvg>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewHero;
