import React from 'react'
import styles from "./Card.module.css"
import { useColorModeValue } from '../../hooks/useColorModeValue'

const Card = (props) => {

    const {title, text, svg} = props
    
  return (
    <div className={styles["container"]}>
      <div
        style={{ background: useColorModeValue("white", "#4a4b4d") }}
        className={styles["content"]}
      >
        <div className={styles["title"]}>
          <span className={styles["svg-container"]}>{svg}</span>
          <h3>{title}</h3>
        </div>
        <div className={styles["text"]}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card