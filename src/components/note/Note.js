import React from 'react'
import styles from "./Note.module.css"
import { useColorModeValue } from '../../hooks/useColorModeValue';

const Note = () => {
  return (
    <div className={styles["container"]}>
      <div
        style={{
          background: useColorModeValue("#fde9e7", "white"),
          color: useColorModeValue("black", "black"),
        }}
        className={styles["content"]}
      >
        <p>
          <span>Important:</span> For Bookings done on 4th and 5th November,
          contact Raghav Agrawal on{" "}
          <a
            style={{ color: "#0f9d56", borderBottom: "1px underline #0f9d56" }}
            href="tel:+917042347146"
          >
            7042347146
          </a>{" "}
          after making the purchase to receive your tickets.
        </p>
      </div>
    </div>
  );
}

export default Note
