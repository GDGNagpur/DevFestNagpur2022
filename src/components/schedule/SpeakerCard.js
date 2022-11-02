import React from "react";
import styles from "./Schedule.module.css";

export const SpeakerCard = ({ path, event, speaker }) => {
  return (
    <div className={styles.speakerContainer}>
      {path.map((speaker) => {
        return (
          <img
            src={speaker}
            className={styles.speakerImage}
            alt="speaker"
          ></img>
        );
      })}
      <div className={styles.speakerCardEventContainer}>
        <div className={styles.speakerCardEvent}>{event}</div>
        <div className={styles.speakerCardSpeaker}>{speaker}</div>
      </div>
    </div>
  );
};
