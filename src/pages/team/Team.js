import React from "react";
import styles from "./Team.module.css";
import AvatarCard from "../../components/avatarCard/AvatarCard";
import teamData from "./teamData";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const Team = () => {
  return (
    <div className="layout-content">
      <div className={styles["container"]}>
        <div className={styles["heading"]}>
          <h1 style={{ color: useColorModeValue("#3F3F3F", "#ffffff") }}>
            Our Team
          </h1>
        </div>
        <div className={styles["content"]}>
          {teamData.map((data) => {
            return <AvatarCard key={data.id} {...data}></AvatarCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
