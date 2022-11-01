import React from "react";
import styles from "./Schedule.module.css";
import { useThemeContext } from "../../theme/ThemeProvider";

export const EventCard = ({
  time,
  date,
  event,
  bordercolor,
  multiEvent,
  bg,
  smallBg,
}) => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.eventContainer}>
      <div className={styles.timeFlexbox}>
        <div
          className={styles.timeContainer}
          style={{
            backgroundColor:
              smallBg === ""
                ? theme === "dark"
                  ? "#28292B"
                  : "#e8eaed"
                : smallBg,
          }}
        >
          <div
            className={styles.time}
            style={smallBg === "" ? {} : { color: "white" }}
          >
            {time}
          </div>
          <div
            className={styles.date}
            style={smallBg === "" ? {} : { color: "white" }}
          >
            {date}
          </div>
        </div>
      </div>
      {multiEvent ? (
        event.map((event, i) => (
          <div className={styles.eventNameFlexbox}>
            <div
              className={styles.eventNameMulti}
              style={{
                borderLeft: "5px solid " + bordercolor[i],
                backgroundColor: theme === "dark" ? bg[i][1] : bg[i][0],
              }}
            >
              {event}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.eventNameFlexbox}>
          <div
            className={styles.eventName}
            style={{
              borderLeft: "5px solid " + bordercolor,
              backgroundColor: theme === "dark" ? bg[1] : bg[0],
            }}
          >
            {event}
          </div>
        </div>
      )}
    </div>
  );
};
