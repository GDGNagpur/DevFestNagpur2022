import React from "react";
import TicketForm from "../../components/ticket/TicketForm";
import styles from "./GetTicket.module.css"
import { Link } from "react-router-dom";

const GetTicket = () => {
  return (
    <div className="layout-content">
      <div className={styles["container"]}>
        <TicketForm></TicketForm>
        <div className={styles["notices"]}>
          <h4>Please note:</h4>
          <ul>
            <li>
              You have to use the same email as you used for registration. If you still haven't registered then you can <Link to={"/"} >register here.</Link>
            </li>
            <li>
              Those who have booked tickets on 3rd November, will be able to
              download their passes on 4th November 12:00 PM.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetTicket;
