import React from "react";
import styles from "./AllAccessPass.module.css";
import { ReactComponent as PassSvg } from "../../assets/hero/pass.svg";
import { ReactComponent as DiscordSvg } from "../../assets/hero/illustration/discord.svg";
import { ReactComponent as FoodSvg } from "../../assets/hero/illustration/food.svg";
import { ReactComponent as HackathonSvg } from "../../assets/hero/illustration/hackathon.svg";
import { ReactComponent as MicSvg } from "../../assets/hero/illustration/mic.svg";
import { ReactComponent as SwagsSvg } from "../../assets/hero/illustration/swags.svg";
import { ReactComponent as SponsorBoothSvg } from "../../assets/hero/illustration/sponsor-booth.svg";
import { ReactComponent as WhiteLionSvg } from "../../assets/hero/illustration/lion-white.svg";
import { ReactComponent as WhiteMmtSvg } from "../../assets/hero/illustration/mmt-white.svg";

const AllAccessPass = () => {
  return (
    <section id="all-access-pass" className={styles["container"]}>
      <div className={styles["heading-and-cta"]}>
        <div>
          <span className={styles["heading"]}>
            <span>
              <PassSvg></PassSvg>
            </span>
            <h2>ALL ACCESS PASS</h2>
          </span>
          <h3 className={styles["early-bird"]}>( Last Minute )</h3>
        </div>
        <span
          className={styles["cta-btn"]}
          // href="https://payments.cashfree.com/forms/dfn22regular"
          // target={"_blank"}
          // rel="noreferrer"
          style={{cursor: "auto"}}
        >
          Registration Closed
        </span>
      </div>

      <div className={styles["perks"]}>
        <div className="perks1">
          <div className={styles["perk"]}>
            <FoodSvg />
            <span>Food and Beverages</span>
          </div>
          <div className={styles["perk"]}>
            <SwagsSvg />
            <span>Swags and Goodies</span>
          </div>
          <div className={styles["perk"]}>
            <SponsorBoothSvg />
            <span>Sponsor Booths</span>
          </div>
        </div>

        <div className="perks2">
          <div className={styles["perk"]}>
            <DiscordSvg />
            <span>Private Discord Server</span>
          </div>
          <div className={styles["perk"]}>
            <MicSvg />
            <span>Commmunity Spaces</span>
          </div>
          <div className={styles["perk"]}>
            <HackathonSvg />
            <span>Hackathons</span>
          </div>
        </div>
      </div>

      <div className={styles["illustrations"]}>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles["mmt-svg"]}
        >
          <WhiteMmtSvg />
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-duration="1000"
          className={styles["lion-svg"]}
        >
          <WhiteLionSvg />
        </div>
      </div>
    </section>
  );
};

export default AllAccessPass;
