import React from 'react'
import styles from "./Ticket.module.css"
import gdgDarkLogo from "../../assets/hero/gdg-dark-logo.png";
import gdgLightLogo from "../../assets/hero/gdg-light-logo.png";
import { ReactComponent as DevfestLightSvg } from "../../assets/hero/devfest-light.svg";
import { ReactComponent as DevfestDarkSvg } from "../../assets/hero/devfest-dark.svg";
import {useColorModeValue} from "../../hooks/useColorModeValue"

const Ticket = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["main"]}>
          <div className={styles["gdg-logo"]}>
            <img
              draggable={false}
              src={useColorModeValue(gdgDarkLogo, gdgLightLogo)}
              alt="Google Developers Groups, Nagpur"
            />
          </div>
          <div data-aos="none" className={styles["devfest-svg"]}>
            {useColorModeValue(<DevfestDarkSvg/>, <DevfestLightSvg/>)}
          </div>
        </div>
        <div className={styles["aside"]}></div>
      </div>
    </div>
  );
}

export default Ticket