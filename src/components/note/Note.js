import React from 'react'
import styles from "./Note.module.css"
import { useColorModeValue } from '../../hooks/useColorModeValue';

const Note = () => {
  return (
    <div className={styles["container"]}>
      <div
        style={{ background: useColorModeValue("#fde9e7", "white"), color: useColorModeValue("black", "black") }}
        className={styles["content"]}
      >
        <p>
          <span>Important:</span> Last Min Passes are subject to availability on
          certain quantity . It might get refunded if needed.
        </p>
      </div>
    </div>
  );
}

export default Note
