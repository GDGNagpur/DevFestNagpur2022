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
          Venue
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
                Kavivarya Suresh Bhat Auditorium, Nagpur
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3705340819893!2d79.10848641480396!3d21.137647485939475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c74d26cf6151%3A0x1307e588dcaedfb8!2sSuresh%20Bhat%20Auditorium!5e0!3m2!1sen!2sin!4v1666510611583!5m2!1sen!2sin"
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
