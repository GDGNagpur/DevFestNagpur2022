import React from "react";
import styles from "./Ticket.module.css";
import { ReactComponent as DevfestLightSvg } from "../../assets/ticket/devfest-nagpur.svg";
import { ReactComponent as GdgNagpurSvg } from "../../assets/ticket/gdg-nagpur.svg";
import { ReactComponent as GdgSvg } from "../../assets/ticket/gdg.svg";
import { ReactComponent as MonumentSvg } from "../../assets/ticket/monument.svg";
import { ReactComponent as Monument1Svg } from "../../assets/ticket/monument1.svg";
import { ReactComponent as BridgeSvg } from "../../assets/ticket/bridge.svg";
import { ReactComponent as PeopleSvg } from "../../assets/ticket/people.svg";
import { ReactComponent as PassSvg } from "../../assets/ticket/pass.svg";
import peerlist from "../../assets/sponsors/Peerlist.png";
import stream from "../../assets/sponsors/Stream.png";
import orkes from "../../assets/sponsors/Orkes.png";
import moreficient from "../../assets/sponsors/Moreficient.png";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import QRCode from "react-qr-code";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const [userValues, setUserValues] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const navigate = useNavigate()

  // console.log(localStorage.getItem("user"));

  useEffect(() => {
    // console.log(userValues.name);
  }, []);

  return (
    <div className={styles["container"]}>
      <div style={{ color: "black" }} className={styles["content"]}>
        <div
          style={{
            boxShadow:
              "-2px 2px 5px 0px rgba(26, 30, 38, 0.2), 0px -2px 5px 0px rgba(26, 30, 38, 0.2)",
          }}
          className={styles["main"]}
        >
          <div className={styles["gdg-logo"]}>
            <GdgNagpurSvg></GdgNagpurSvg>
          </div>
          <div className={styles["people-svg"]}>
            <PeopleSvg></PeopleSvg>
          </div>
          <div className={styles["name"]}>
            <h2>{userValues.name || "Your Name"}</h2>
          </div>
          <div className={styles["pass-id"]}>
            <div className={styles["pass"]}>
              <div className={styles["pass-svg"]}>
                <PassSvg></PassSvg>
              </div>
              <p>ALL ACCESS PASS</p>
            </div>
            <div className={styles["ticket-id"]}>
              <p>
                Ticket ID: <span>{userValues.ticketId || "Your Ticket Id"}</span>
              </p>
            </div>
          </div>
          <div className={styles["website"]}>
            <p>@devfestnagpur.in</p>
          </div>
          <div className={styles["sponsors"]}>
            <div className={styles["sponsor"]}>
              <GdgSvg></GdgSvg>
            </div>
            <div className={styles["sponsor"]}>
              <img src={peerlist} alt="peerlist" />
            </div>
            <div className={styles["sponsor"]}>
              <img src={orkes} alt="orkes" />
            </div>
            <div className={styles["sponsor"]}>
              <img src={stream} alt="stream" />
            </div>
            <div className={styles["sponsor"]}>
              <img src={moreficient} alt="moreficient" />
            </div>
          </div>
          <div className={styles["monument"]}>
            <MonumentSvg></MonumentSvg>
          </div>
          <div className={styles["monument1"]}>
            <Monument1Svg></Monument1Svg>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "2px 2px 5px 0px rgba(26, 30, 38, 0.2), 0px -2px 5px 0px rgba(26, 30, 38, 0.2)",
          }}
          className={styles["aside"]}
        >
          <div className={styles["devfest-logo"]}>
            <DevfestLightSvg></DevfestLightSvg>
          </div>
          <div className={styles["details"]}>
            <div className={styles["detail"]}>
              <h4>Event Date:</h4>
              <p>
                5<sup>th</sup> & 6<sup>th</sup> November, 2022
              </p>
            </div>
            <div className={styles["detail"]}>
              <h4>Venue:</h4>
              <p>
                Suresh Bhat Auditorium, <br />
                Nagpur
              </p>
            </div>
            <div className={styles["detail"]}>
              <h4>Reporting Time:</h4>
              <p>09:00 AM IST</p>
            </div>
            <div className={styles["qrcode"]}>
              <QRCode
                size={80}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={
                  // "Hey this is DevFest Nagpur 2022 ALL ACCESS PASS for Bhavesh Chaudhari, payment id XXXXXXX"
                  `Hey this is DevFest Nagpur 2022 ALL ACCESS PASS for ${userValues.name}, \nTicket id: ${userValues.ticketId}`
                }
                viewBox={`0 0 80px 80px`}
              />
            </div>
            <div className={styles["bridge"]}>
              <BridgeSvg></BridgeSvg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
