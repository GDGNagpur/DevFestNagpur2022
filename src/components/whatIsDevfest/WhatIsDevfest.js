import React from "react";
import styles from "./WhatIsDevfest.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import Devfest from "../../assets/whatIsDevfest/devfest.png";
import { ReactComponent as BgSvg } from "../../assets/whatIsDevfest/bg.svg";
import {Cloud3} from "../../assets/whatIsDevfest/cloud3.js";
import { Bottom3 } from "../../assets/whatIsDevfest/bottom3.js";

const WhatIsDevfest = () => {
  return (
    <div className={styles.container} style={{background:useColorModeValue("#202124","#ffffff")}}>
      <div className={styles.heading}>
        <div className={styles.cloudContainer}>
          <Cloud3 color={useColorModeValue("#ffffff","#202124")} className={styles.cloud3} />
        </div>
        <div className={styles.headText} style={{color:useColorModeValue("#ffffff","#202124")}}>What is DevFest ?</div>
      </div>
      <div className={styles.devfestBodyContainer}>
        <div className={styles.image}>
          <div className={styles.imgContainer}>
            <img src={Devfest} alt="What is DevFest ?"></img>
          </div>
          <div className={styles.svgContainer}>
            <BgSvg />
          </div>
        </div>
        <div className={styles.bodyText} style={{color:useColorModeValue("#ffffff","#202124")}}>
          <strong>DevFest</strong> is a community led tech conference, hosted by the Google
          Developer Groups (GDG) with a strong focus on knowledge exchange,
          networking,and learning about Google technologies to nurture the needs
          and interests of local-dev community.
          <br />
          <br />
          DevFest Nagpur is an initiative by <strong style={{color:"#4285F4"}}>GDG Nagpur</strong> with a strong focus on
          knowledge exchange, networking and learning about technologies to
          nurture the needs and interests of local developer community
          ecosystem.
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Bottom3 color={useColorModeValue("#E8EAED","#202124")} className={styles.bottom3}/>
      </div>
    </div>
  );
};

export default WhatIsDevfest;
