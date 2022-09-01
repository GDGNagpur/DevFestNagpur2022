import React from "react";
import DataCard from "./Card";
import weAreSpeakingLouderData from "./data";
import styles from "./WeAreSpeakingLouderMain.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const WeAreSpeakingLouderMain = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1 style={{ color: useColorModeValue("#505050", "#ffffff") }}>
          We're Speaking Louder
        </h1>
      </div>
      <div className={styles["content"]}>
        <div className={styles["data-cards"]}>
          {weAreSpeakingLouderData.map((card) => {
            return <DataCard key={card.id} {...card}></DataCard>;
          })}
        </div>
        <div className={styles["note"]}>
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
