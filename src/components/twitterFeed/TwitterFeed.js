import React from 'react'
import { Tweet } from "react-twitter-widgets";
import { useColorModeValue } from '../../hooks/useColorModeValue';
import styles from "./TwitterFeed.module.css"

const TwitterFeed = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <h2
          id="testimonials"
          style={{ color: useColorModeValue("#505050", "#ffffff") }}
        >
          What community says...
        </h2>
      </div>
      <div className={styles["content"]}>
        <div className={styles["tweets"]}>
          <div className={styles["tweet"]}>
            <Tweet
              onLoad={() => {
                // console.log("loaded");
              }}
              tweetId="1180407434218618881"
              options={{
                width: "100%",
                theme: useColorModeValue("white", "dark"),
                cards: "hidden",
                maxWidth: "300",
              }}
            />
          </div>
          <div className={styles["tweet"]}>
            <Tweet
              tweetId="1183111889573699584"
              options={{
                width: "100%",
                theme: useColorModeValue("white", "dark"),
                cards: "hidden",
                maxWidth: "300",
              }}
            />
          </div>
          <div className={styles["tweet"]}>
            <Tweet
              tweetId="1188107280882921472"
              options={{
                width: "100%",
                theme: useColorModeValue("white", "dark"),
                cards: "hidden",
                maxWidth: "300",
              }}
            />
          </div>
          <div className={styles["tweet"]}>
            <Tweet
              tweetId="1181062009430765569"
              options={{
                width: "100%",
                theme: useColorModeValue("white", "dark"),
                cards: "hidden",
                maxWidth: "300",
              }}
            />
          </div>
          <div className={styles["tweet"]}>
            <Tweet
              tweetId="1180479369074003969"
              options={{
                width: "100%",
                theme: useColorModeValue("white", "dark"),
                cards: "hidden",
                maxWidth: "300",
              }}
            />
          </div>
          <div className={styles["tweet"]}>
            <Tweet
              tweetId="1180407470188982273"
              options={{
                width: "100%",
                theme: useColorModeValue("white", "dark"),
                cards: "hidden",
                maxWidth: "300",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwitterFeed