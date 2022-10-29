import React from 'react'
import Ticket from "../../components/ticket/Ticket"
import styles from "./TicketMain.module.css"

const TicketMain = () => {
  return (
    <div className="layout-content">
      <div className={styles["container"]}>
        <Ticket></Ticket>
      </div>
    </div>
  );
}

export default TicketMain