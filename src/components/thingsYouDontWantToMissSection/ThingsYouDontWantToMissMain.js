import React from "react";
import styles from "./ThingsYouDontWantToMiss.module.css";
import thingsYouDontWantToMissData from "./data";
import DataCard from "./Card";
import { ReactComponent as EyesSvg } from "../../assets/thingsYouDontWantToMiss/eyes.svg";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const ThingsYouDontWantToMissMain = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1 style={{ color: useColorModeValue("#505050", "#ffffff") }}>
          Things you don't want to miss{" "}
          <span>
            <EyesSvg></EyesSvg>
          </span>
        </h1>
      </div>
      <div
        style={{
          background: useColorModeValue(
            " linear-gradient(180deg, #FFF6DD 0%, #FFE9E9 100%)",
            "#32312c"
          ),
        }}
        className={styles["content"]}
      >
        <div className={styles["data-cards"]}>
          {thingsYouDontWantToMissData.map((card) => {
            return <DataCard key={card.id} {...card}></DataCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ThingsYouDontWantToMissMain;
