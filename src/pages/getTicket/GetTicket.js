import React from "react";
import TicketForm from "../../components/ticket/TicketForm";
import styles from "./GetTicket.module.css"
import { Link } from "react-router-dom";

const GetTicket = () => {
  return (
    <div className="layout-content">
      <div className={styles["container"]}>
        {/* <div className={styles["one"]}>
          <p>
            ALL ACCESS PASS will be available to download after some time. Please try later. 
          </p>
        </div> */}
        <TicketForm></TicketForm>
        <div className={styles["notices"]}>
          <h4>Please note:</h4>
          <ul>
            <li>
              You have to use the same email as you used for registration. If
              you still haven't registered then you can{" "}
              <Link to={"/"}>register here.</Link>
            </li>
            <li>
              Those who have booked tickets on <b>4th November</b>, will be able
              to download their passes from <b>5th November</b> 01:00 AM.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetTicket;
