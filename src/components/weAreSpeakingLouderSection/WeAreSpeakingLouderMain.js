import React from "react";
import DataCard from "./Card";
import weAreSpeakingLouderData from "./data";
import styles from "./WeAreSpeakingLouderMain.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import { useMediaQuery } from "react-responsive";

const WeAreSpeakingLouderMain = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  
  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1 style={{ color: useColorModeValue("#505050", "#ffffff") }}>
          We're Speaking Louder
        </h1>
      </div>
      <div className={styles["content"]}>
        <div className={styles["data-cards"]}>
          {weAreSpeakingLouderData.map((card, index) => {
            return <DataCard index={index} key={card.id} {...card}></DataCard>;
          })}
        </div>
        <div data-aos={isMobile ? "fade-up" : "fade-in"} data-aos-duration="800" className={styles["note"]}>
          <p>
            Building web experience for everyone{" "}
            <span role={"img"} aria-label="Cheers">
              🙌🏻
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeAreSpeakingLouderMain;
