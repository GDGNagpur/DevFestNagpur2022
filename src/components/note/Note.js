import React from 'react'
import styles from "./Note.module.css"

const Note = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <p>
          <span>Important:</span>{" "}If we don’t get 200 participants for last
          minute passes, we would be refunding back and would cancel this slot.
        </p>
      </div>
    </div>
  );
}

export default Note