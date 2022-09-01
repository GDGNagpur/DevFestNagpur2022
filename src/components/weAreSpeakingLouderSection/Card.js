import React from "react";
import styles from "./Card.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const DataCard = (props) => {
  const { svg, text } = props;

  return (
    <div className={styles["container"]}>
      <div
        style={{ background: useColorModeValue("white", "#4a4b4d") }}
        className={styles["content"]}
      >
        <div className={styles["img"]}>{svg}</div>
        <div className={styles["text"]}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
