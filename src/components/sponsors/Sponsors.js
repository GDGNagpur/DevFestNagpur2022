import React from "react";
import styles from "./Sponsors.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import { useThemeContext } from "../../theme/ThemeProvider";

export const Sponsors = () => {
  const { theme } = useThemeContext();

  const handleHover = (e) =>{
    e.currentTarget.style.backgroundColor = theme==="dark"?"#47484d":"#aeb1b5";
  }

  const handleOut = (e) =>{
    e.currentTarget.style.backgroundColor = theme==="dark"?"#313235":"#e8eaed";
  }

  return (
    <div className={styles.sponsorContainer}>
      <div id="sponsors" className={styles.sponsorHeading}>Our Sponsors</div>
      <div className={styles.sponsorFlexContainer}>
        <div className={styles["titlesponsor"]}>
          <a href="https://developers.google.com/"
            className={useColorModeValue(false,true)?`${styles.GoogleDevDark} ${styles.GoogleDev}`:styles.GoogleDev}
            style={{ backgroundColor: useColorModeValue("#e8eaed", "#313235")}}
            onMouseOver={handleHover}
            onMouseOut={handleOut}
          >
            <div
              className={styles["title"]}
              style={{ color: useColorModeValue("white", "black") }}
            >
              Title Sponsor
            </div>
          </a>
        </div>
        <div className={styles["goldsponsor"]}>
          <a href="https://getstream.io/"
            className={useColorModeValue(false,true)?`${styles.StreamDark} ${styles.Stream}`:styles.Stream}
            style={{ backgroundColor: useColorModeValue("#e8eaed", "#313235") }}
            onMouseOver={handleHover}
            onMouseOut={handleOut}

          >
            <div
              className={styles["gold"]}
              style={{ color: useColorModeValue("white", "black") }}
            >
              Gold Sponsor
            </div>
          </a>
        </div>
        <div className={styles["rubysponsor"]}>
          <a href="https://peerlist.io/"
            className={useColorModeValue(false,true)?`${styles.PeerListDark} ${styles.PeerList}`:styles.PeerList}
            style={{ backgroundColor: useColorModeValue("#e8eaed", "#313235") }}
            onMouseOver={handleHover}
            onMouseOut={handleOut}
          >
            <div
              className={styles["ruby"]}
              style={{ color: useColorModeValue("white", "black") }}
            >
              Ruby Sponsor
            </div>
          </a>
        </div>
        <div className={styles["silversponsor"]}>
          <div className={styles["silversponsorFlex"]}>
            <a href="https://moreficent.com/"
              className={useColorModeValue(false,true)?`${styles.MoreficentDark} ${styles.Moreficent}`:styles.Moreficent}
              style={{
                backgroundColor: useColorModeValue("#e8eaed", "#313235"),
              }}
              onMouseOver={handleHover}
              onMouseOut={handleOut}
            >
              <div
                className={styles["silver"]}
                style={{ color: useColorModeValue("white", "black") }}
              >
                Silver Sponsor
              </div>
            </a>
            <a href="https://orkes.io/"
              className={useColorModeValue(false,true)?`${styles.OrkesDark} ${styles.Orkes}`:styles.Orkes}
              style={{
                backgroundColor: useColorModeValue("#e8eaed", "#313235"),
              }}
              onMouseOver={handleHover}
              onMouseOut={handleOut}
            >
              <div
                className={styles["silver"]}
                style={{ color: useColorModeValue("white", "black") }}
              >
                Silver Sponsor
              </div>
            </a>
            <a href="https://www.dhiwise.com/"
              className={useColorModeValue(false,true)?`${styles.DhiWiseDark} ${styles.DhiWise}`:styles.DhiWise}
              style={{
                backgroundColor: useColorModeValue("#e8eaed", "#313235"),
              }}
              onMouseOver={handleHover}
              onMouseOut={handleOut}
            >
              <div
                className={styles["silver"]}
                style={{ color: useColorModeValue("white", "black") }}
              >
                Silver Sponsor
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
