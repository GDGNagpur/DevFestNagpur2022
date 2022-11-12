import React from "react";
import { ReactComponent as TwitterSvg } from "../../assets/hero/twitter.svg";
import { ReactComponent as InstagramSvg } from "../../assets/hero/instagram.svg";
import { ReactComponent as Linkedinsvg } from "../../assets/hero/linkedin.svg";
import styles from "./Footer.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const Footer = () => {
  return (
    <div
      style={{ background: useColorModeValue("#fcfcfc", "#181818") }}
      className={useColorModeValue(
        styles["email-social"],
        `${styles["email-social"]} ${styles["dark"]}`
      )}
    >
      <div className={styles["email"]}>
        <p>Reach out to us at <span>:</span></p>
        <a
          style={{
            color: useColorModeValue(
              "rgba(66, 133, 244, 1)",
              "rgba(15, 157, 86, 1)"
            ),
          }}
          href="mailto:gdgnagpurofficial@gmail.com"
        >
          gdgnagpurofficial@gmail.com
        </a>
      </div>
      <p className={styles['community-guidlines']}><a style={{
        color: useColorModeValue(
          "rgba(66, 133, 244, 1)",
          "white"
        ),
      }} href="https://developers.google.com/community-guidelines" target="_blank" rel="noreferrer">Community Guidelines</a></p>
      <div className={styles["social"]}>
        <p>Follow us on</p>
        <div>
          <a
            className={useColorModeValue(
              `${styles["light-link"]}`,
              `${styles["dark-link"]}`
            )}
            href="https://twitter.com/GDGNagpur_"
            target={"_blank"}
            rel="noreferrer"
          >
            <TwitterSvg></TwitterSvg>
          </a>
          <a
            className={useColorModeValue(
              `${styles["light-link"]}`,
              `${styles["dark-link"]}`
            )}
            href="https://www.instagram.com/gdgnagpur"
            target={"_blank"}
            rel="noreferrer"
          >
            <InstagramSvg></InstagramSvg>
          </a>

          <a
            className={useColorModeValue(
              `${styles["light-link"]}`,
              `${styles["dark-link"]}`
            )}
            href="https://www.linkedin.com/company/gdgnagpur/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Linkedinsvg></Linkedinsvg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
