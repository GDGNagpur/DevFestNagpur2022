import React from "react";
import styles from "./Schedule.module.css";

export const EventCard = ({time,date,event,bordercolor}) => {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.timeFlexbox}>
        <div className={styles.timeContainer}>
          <div className={styles.time}>{time}</div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
      <div className={styles.eventNameFlexbox}>
        <div className={styles.eventName} style={{borderLeft:"5px solid "+bordercolor}}>{event}</div>
      </div>
    </div>
  );
};
