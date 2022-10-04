import React from "react";
import DataCard from "./Card";
import weAreSpeakingLouderData from "./data";
import styles from "./WeAreSpeakingLouderMain.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const WeAreSpeakingLouderMain = () => {
  const marqetext = [
    { text: "Optimize experiences with Firebase", color: "#dc362e" },
    { text: "Earn badges", color: "#1b6ef3" },
    { text: "Build for any screen with Flutter", color: "#f09d00" },
    { text: "Find an event near you", color: "#dc362e" },
    { text: "Solve challenges with Google Cloud", color: "#202124" },
    { text: "Follow #DevFest for updates", color: "#1b6ef3" },
    { text: "Explore innovative Machine Learning", color: "#f09d00" },
    { text: "Build Web experiences for everyone", color: "#dc362e" },
    { text: "Connect with local developers", color: "#1b6ef3" },
    { text: "Discover Android development", color: "#202124" },
    { text: "Engage with experts", color: "#f09d00" },
  ];

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["heading"]}>
          <h1 style={{ color: useColorModeValue("#505050", "#ffffff") }}>
            We're Speaking Louder
          </h1>
        </div>
        <div className={styles["content"]}>
          <div className={styles["data-cards"]}>
            {weAreSpeakingLouderData.map((card, index) => {
              return (
                <DataCard index={index} key={card.id} {...card}></DataCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles["marqueeAnimContainer"]}>
        <div className={styles["marqueeAnim"]}>
          <div>
            {marqetext.map((text, index) => {
              return (
                <span key={index} style={{ backgroundColor: text.color }}>{text.text}</span>
              );
            })}
          </div>
          <div>
            {marqetext.map((text, index) => {
              return (
                <span key={index} style={{ backgroundColor: text.color }}>{text.text}</span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAreSpeakingLouderMain;
