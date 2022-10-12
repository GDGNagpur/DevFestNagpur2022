import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Venue.module.css";
import Location from "../../assets/venue/Location.png";
import MobView from "../../assets/venue/MobView.png";
import LargeView from "../../assets/venue/LargeView.png";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const Venue = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className={styles["venueContainer"]}>
      <div id="venue" className={styles["heading"]}>
        <h2 style={{ color: useColorModeValue("#505050", "#ffffff") }}>
          Venue of DevFest
        </h2>
      </div>
      <div className={styles["container"]}>
        <div className={styles["mapContainer"]}>
          <div className={styles["text"]}>
            <div className={styles["locationSvg"]}>
              <img src={Location} alt="location"></img>
            </div>
            <div className={styles["locationText"]}>
              <p style={{ color: useColorModeValue("#505050", "#ffffff") }}>
                Regenta Central Hotel & Convention Centre, <br /> Nagpur
              </p>
            </div>
          </div>
          <div className={styles["maps"]}>
            <iframe
              title="map"
              loading="lazy"
              allowFullScreen
              frameBorder={0}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5jdHJlLcc_weCTCsnnFjt4s2T2viiqKs&q=230,%20Gangabai%20Ghat%20Road,%20Great%20Nag%20Rd,%20Jagnade%20Square,%20Nandanvan,%20Nagpur,%20Maharashtra%20440009"
            ></iframe>
          </div>
        </div>
        <div className={styles["imageContainer"]}>
          <img
            src={isTabletOrMobile ? MobView : LargeView}
            alt="location"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Venue;
