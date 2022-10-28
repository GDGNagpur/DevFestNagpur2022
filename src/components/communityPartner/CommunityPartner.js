import React from "react";
import styles from "./CommunityPartner.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import { ReactComponent as Community1 } from "../../assets/community/community1.svg";
import { ReactComponent as Community2 } from "../../assets/community/community2.svg";
import { ReactComponent as Community3 } from "../../assets/community/community3.svg";
import { ReactComponent as Community4 } from "../../assets/community/community4.svg";
import { ReactComponent as Community5 } from "../../assets/community/community5.svg";
import { ReactComponent as Community6 } from "../../assets/community/community6.svg";
import { ReactComponent as Community7 } from "../../assets/community/community7.svg";
import { ReactComponent as Community8 } from "../../assets/community/community8.svg";
import { ReactComponent as Community9 } from "../../assets/community/community9.svg";
import { ReactComponent as Community10 } from "../../assets/community/community10.svg";
import { ReactComponent as Community11 } from "../../assets/community/community11.svg";
import { ReactComponent as Community12 } from "../../assets/community/community12.svg";

import { ReactComponent as Community14 } from "../../assets/community/community14.svg";
import { ReactComponent as Community15 } from "../../assets/community/community15.svg";

import { ReactComponent as Community1Dark } from "../../assets/community/community1-dark.svg";
import { ReactComponent as Community2Dark } from "../../assets/community/community2-dark.svg";
import { ReactComponent as Community3Dark } from "../../assets/community/community3-dark.svg";
import { ReactComponent as Community4Dark } from "../../assets/community/community4-dark.svg";
import { ReactComponent as Community5Dark } from "../../assets/community/community5-dark.svg";
import { ReactComponent as Community6Dark } from "../../assets/community/community6-dark.svg";
import { ReactComponent as Community7Dark } from "../../assets/community/community7-dark.svg";
import { ReactComponent as Community8Dark } from "../../assets/community/community8-dark.svg";
import { ReactComponent as Community9Dark } from "../../assets/community/community9-dark.svg";
import { ReactComponent as Community10Dark } from "../../assets/community/community10-dark.svg";
import { ReactComponent as Community11Dark } from "../../assets/community/community11-dark.svg";
import { ReactComponent as Community12Dark } from "../../assets/community/community12-dark.svg";

import { ReactComponent as Community14Dark } from "../../assets/community/community14-dark.svg";
import { ReactComponent as Community15Dark } from "../../assets/community/community15-dark.svg";

const CommunityPartner = () => {
  return (
    <div className={styles["community-partners"]}>
      <h2 style={{ color: useColorModeValue("#505050", "#ffffff") }}>
        Community Partners
      </h2>
      {useColorModeValue(
        <section>
          <Community1 />
          <Community2 />
          <Community3 />
          <Community4 />
          <Community5 />
          <Community6 />
          <Community7 />
          <Community8 />
          <Community9 />
          <Community10 />
          <Community11 />
          <Community12 />
          <Community14 />
          <Community15 />
        </section>,
        <section>
          <Community1Dark />
          <Community2Dark />
          <Community3Dark />
          <Community4Dark />
          <Community5Dark />
          <Community6Dark />
          <Community7Dark />
          <Community8Dark />
          <Community9Dark />
          <Community10Dark />
          <Community11Dark />
          <Community12Dark />
          <Community14Dark />
          <Community15Dark />
        </section>
      )}
    </div>
  );
};

export default CommunityPartner;
