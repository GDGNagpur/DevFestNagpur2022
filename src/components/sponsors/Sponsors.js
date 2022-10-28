import React from "react";
import styles from "./Sponsors.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";

export const Sponsors = () => {
  return (
    <div className={styles.sponsorContainer}>
      <div className={styles.sponsorHeading}>Our Sponsors</div>
      <div className={styles.sponsorFlexContainer}>
        <div className={styles["titlesponsor"]}>
          <div
            className={useColorModeValue(false,true)?`${styles.GoogleDevDark} ${styles.GoogleDev}`:styles.GoogleDev}
            style={{ backgroundColor: useColorModeValue("#e8eaed", "#313235")}}
          >
            <div
              className={styles["title"]}
              style={{ color: useColorModeValue("white", "black") }}
            >
              Title Sponsor
            </div>
          </div>
        </div>
        <div className={styles["goldsponsor"]}>
          <div
            className={useColorModeValue(false,true)?`${styles.StreamDark} ${styles.Stream}`:styles.Stream}
            style={{ backgroundColor: useColorModeValue("#e8eaed", "#313235") }}
          >
            <div
              className={styles["gold"]}
              style={{ color: useColorModeValue("white", "black") }}
            >
              Gold Sponsor
            </div>
          </div>
        </div>
        <div className={styles["rubysponsor"]}>
          <div
            className={useColorModeValue(false,true)?`${styles.PeerListDark} ${styles.PeerList}`:styles.PeerList}
            style={{ backgroundColor: useColorModeValue("#e8eaed", "#313235") }}
          >
            <div
              className={styles["ruby"]}
              style={{ color: useColorModeValue("white", "black") }}
            >
              Ruby Sponsor
            </div>
          </div>
        </div>
        <div className={styles["silversponsor"]}>
          <div className={styles["silversponsorFlex"]}>
            <div
              className={useColorModeValue(false,true)?`${styles.MoreficentDark} ${styles.Moreficent}`:styles.Moreficent}
              style={{
                backgroundColor: useColorModeValue("#e8eaed", "#313235"),
              }}
            >
              <div
                className={styles["silver"]}
                style={{ color: useColorModeValue("white", "black") }}
              >
                Silver Sponsor
              </div>
            </div>
            <div
              className={useColorModeValue(false,true)?`${styles.OrkesDark} ${styles.Orkes}`:styles.Orkes}
              style={{
                backgroundColor: useColorModeValue("#e8eaed", "#313235"),
              }}
            >
              <div
                className={styles["silver"]}
                style={{ color: useColorModeValue("white", "black") }}
              >
                Silver Sponsor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
