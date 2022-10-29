import React, { useState } from "react";
import styles from "./TicketForm.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";

const initialValues = {
  name: "",
  email: "",
  refid: "",
  peer_profile: "",
};

const TicketForm = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1 style={{ color: useColorModeValue("#505050", "#ffffff") }}>
          Get Your Ticket
        </h1>
      </div>
      <div className={styles["content"]}>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <div className={styles["field"]}>
            <label htmlFor="name">Name</label>
            <input
              value={formValues.name}
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="email">Email</label>
            <input
              value={formValues.email}
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="refid">Payment Ref. Id</label>
            <input
              value={formValues.refid}
              type="text"
              name="refid"
              id="refid"
              onChange={handleChange}
            />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="peer_profile">Peerlist Profile Link</label>
            <input
              value={formValues.peer_profile}
              type="text"
              name="peer_profile"
              id="peer_profile"
              onChange={handleChange}
            />
          </div>
          <button>Get Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
