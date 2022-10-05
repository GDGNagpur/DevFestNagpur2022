import React from "react";
import styles from "./AvatarCard.module.css";
import { ReactComponent as TwitterSvg } from "../../assets/hero/twitter.svg";
import { ReactComponent as LinkedinSvg } from "../../assets/hero/linkedin.svg";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const PatternCard = (props) => {
  const { imgSrc, name, designation, twitterLink, linkedinLink, patternSrc } =
    props;

  return (
    <div className={styles["container"]}>
      <div
        style={{ color: useColorModeValue("#3F3F3F", "#ffffff") }}
        className={styles["content"]}
      >
        <div className={styles["image"]}>
          <div className={styles["bg"]}>
            <img
              draggable={"false"}
              src={patternSrc}
              alt={`${name}'s avatar pattern`}
            />
          </div>
          <div className={styles["avatar"]}>
            <img draggable={"false"} src={imgSrc} alt={`${name}'s avatar`} />
          </div>
        </div>
        <div className={styles["name"]}>
          <h2>{name}</h2>
        </div>
        {/* <div className={styles["designation"]}>
          <p>{designation}</p>
        </div> */}
        <div className={styles["social-links"]}>
          <div className={styles["link"]}>
            {twitterLink && (
              <a rel="noreferrer" target={"_blank"} href={twitterLink}>
                <TwitterSvg></TwitterSvg>
              </a>
            )}
          </div>
          <div className={styles["link"]}>
            {linkedinLink && (
              <a rel="noreferrer" target={"_blank"} href={linkedinLink}>
                <LinkedinSvg></LinkedinSvg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternCard;
