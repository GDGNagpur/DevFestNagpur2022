import React from "react";
import styles from "../hero/Hero.module.css";
import Countdown from "react-countdown";

const CountDown = () => {
  // Random component
  const Completionist = () => <h3>We are live now !</h3>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown

      const DaysString = days > 1 ? "Days" : "Day"
      const hoursString = hours > 1 ? "Hours" : "Hour";
      const MinsString = minutes > 1 ? "Mins" : "Min";
      
      return (
        <p>
          <span className={styles["count"]}>{days}</span>
          <span>{DaysString}</span>
          <span className={styles["colon"]}></span>
          <span className={styles["count"]}>{hours}</span>
          <span>{hoursString}</span>
          <span className={styles["colon"]}></span>
          <span className={styles["count"]}>{minutes}</span>
          <span>{MinsString}</span>
          <span className={styles["colon"]}></span>
          <span className={styles["count"]}>{seconds}</span>
          <span>Sec</span>
        </p>
      );
    }
  };

  return (
    <Countdown date={new Date(2022, 10, 5, 0, 0, 0, 0)} renderer={renderer} />
  );
};

export default CountDown;
