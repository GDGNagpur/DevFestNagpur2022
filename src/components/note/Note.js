import React from 'react'
import styles from "./Note.module.css"

const Note = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <p>
          <span>Important:</span>{" "}Last Min Passes are subject to availability on certain quantity . It might get refunded if needed.
        </p>
      </div>
    </div>
  );
}

export default Note
