import React from "react";
import styles from "./WhatIsDevfest.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import Devfest from "../../assets/whatIsDevfest/devfest.png";
import { ReactComponent as BgSvg } from "../../assets/whatIsDevfest/bg.svg";
import { Cloud3 } from "../../assets/whatIsDevfest/cloud3.js";
import { Bottom3 } from "../../assets/whatIsDevfest/bottom3.js";
import { Bottom2 } from "../../assets/whatIsDevfest/bottom2";

const WhatIsDevfest = () => {
  return (
    <div
      className={styles.container}
      style={{ background: useColorModeValue("#202124", "#202124") }}
      id="why-devfest"
    >
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          <div
            data-aos="fade-up-right"
            data-aos-duration="1500"
            className={styles.cloudContainer}
          >
            <Cloud3
              color={useColorModeValue("#ffffff", "#ffffff")}
              className={styles.cloud3}
            />
          </div>
          <div
            className={styles.headText}
            style={{ color: useColorModeValue("#ffffff", "#ffffff") }}
          >
            What is DevFest ?
          </div>
        </div>
      </div>
      <div className={styles.devfestBodyContainer}>
        <div className={styles.image}>
          <div className={styles.imgWrapper}>
            <div className={styles.imgContainer}>
              <img
                src={Devfest}
                alt="What is DevFest ?"
              ></img>
            </div>
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className={styles.svgContainer}
            >
              <BgSvg />
            </div>
          </div>
        </div>
        <div
          className={styles.bodyText}
          style={{ color: useColorModeValue("#ffffff", "#ffffff") }}
        >
          <strong>DevFest</strong> is a community led tech conference, hosted by
          the Google Developer Groups (GDG) with a strong focus on knowledge
          exchange, networking,and learning about Google technologies to nurture
          the needs and interests of local-dev community.
          <br />
          <br />
          DevFest Nagpur is an initiative by{" "}
          <strong style={{ color: "#4285F4" }}>GDG Nagpur</strong> with a strong
          focus on knowledge exchange, networking and learning about
          technologies to nurture the needs and interests of local developer
          community ecosystem.
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <span
          data-aos="slide-right"
          data-aos-offset="-50"
          data-aos-duration="3000"
        >
          <Bottom2 color={useColorModeValue("#E8EAED", "#E8EAED")} />
        </span>
        <span data-aos="fade-up" data-aos-duration="1500">
          <Bottom3
            color={useColorModeValue("#E8EAED", "#E8EAED")}
            className={styles.bottom3}
          />
        </span>
      </div>
    </div>
  );
};

export default WhatIsDevfest;
