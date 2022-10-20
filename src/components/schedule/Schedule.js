import React, { useState } from "react";
import { EventCard } from "./EventCard";
import styles from "./Schedule.module.css";

export const Schedule = () => {
  const events = [
    {
      time: "10:00 AM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#DB4437",
    },
    {
      time: "11:00 AM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#0F9D56",
    },
    {
      time: "11:30 AM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#F4B400",
    },
    {
      time: "12:15 PM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#4285F4",
    },
    {
      time: "1:15 PM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#DB4437",
    },
    {
      time: "2:30 PM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#0F9D56",
    },
    {
      time: "4:00 PM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#DB4437",
    },
    {
      time: "5:00 PM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#F4B400",
    },
    {
      time: "5:45 PM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#4285F4",
    },
    {
      time: "6:40 PM",
      date: "Nov 03",
      event: "Gates Open",
      bordercolor: "#F4B400",
    },
  ];

  const [day, setDay] = useState(1);
  const handleClick = () => {
    setDay(day===1?2:1);
  };

  return (
    <div className={styles.scheduleMainContainer}>
      <div className={styles.heading}>Schedule</div>
      <div className={styles.scheduleContainer}>
        <div className={styles.dayContainer}>
          <div
            className={styles[day === 1 ? "active" : "dayButn"]}
            onClick={handleClick}
          >
            Day 1
          </div>
          <div
            className={styles[day === 2 ? "active" : "dayButn"]}
            onClick={handleClick}
          >
            Day 2
          </div>
        </div>
        {events.map((event) => {
          return (
            <EventCard
              date={event.date}
              time={event.time}
              event={event.event}
              bordercolor={event.bordercolor}
            />
          );
        })}
      </div>
    </div>
  );
};
