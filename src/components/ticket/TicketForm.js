import React, { useState } from "react";
import styles from "./TicketForm.module.css";
import { useColorModeValue } from "../../hooks/useColorModeValue";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {PulseLoader} from "react-spinners"

const initialValues = {
  name: "",
  email: "",
  refid: "",
  peer_profile: "",
};

const TicketForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name.trim();
    const value = e.target.value.trim();

    setFormValues({ ...formValues, [name]: value });
  };

  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formValues);

    setLoading(true)

    const isDevMode = process.env.NODE_ENV === "development"

    const res = await fetch(
      isDevMode
        ? `http://localhost:3001/api/v1/check_payment`
        : `https://aap.devfestnagpur.in/api/v1/check_payment`,
      {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    // console.log(data);

    if (res.status === 200 || res.status === 201) {
      // console.log(data.ticket.name);
      // console.log(data)
      setFormValues({ ...formValues, name: data.ticket.name, ticketId: data.ticket.ticket_id });
      setLoading(false)
    }

    if(res.status === 201){
      // console.log(data)
      const key = Object.keys(data.ticket)[0];
       setFormValues({
         ...formValues,
         name: data.ticket[key].name,
         ticketId: data.ticket[key].ticket_id,
       });
       setLoading(false);
    }

    if(res.status === 400 || res.status === 404){
      setError(true)
      setLoading(false)
    }
  };

  useEffect(() => {
    // console.log(formValues);
    localStorage.setItem("user", JSON.stringify({...formValues}));
    if (formValues.name !== "") {
      navigate("/ticket");
    }
  }, [formValues]);

  const isValidPeerProfile = (prof)=>{
    return formValues.peer_profile.startsWith("https://peerlist.io/")
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1
          style={{
            color: useColorModeValue("#505050", "#ffffff"),
            textTransform: "uppercase",
          }}
        >
          Get Your All Access Pass
        </h1>
      </div>
      <div className={styles["content"]}>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          {/* <div className={styles["field"]}>
            <label htmlFor="name">Name</label>
            <input
              value={formValues.name}
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
            />
          </div> */}
          <div className={styles["field"]}>
            <label htmlFor="email">Email</label>
            <input
              value={formValues.email}
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              // placeholder={"Input email you used for buying pass"}
            />
          </div>
          {/* <div className={styles["field"]}>
            <label htmlFor="refid">Payment Ref. Id</label>
            <input
              value={formValues.refid}
              type="text"
              name="refid"
              id="refid"
              onChange={handleChange}
            />
          </div> */}
          <div className={styles["field"]}>
            <label htmlFor="peer_profile">
              Peerlist Profile Link{" "}
              <span>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://bit.ly/devfestXpeerlist"
                >
                  (Create your peerlist profile)
                </a>
              </span>
            </label>
            <input
              value={formValues.peer_profile}
              type="text"
              name="peer_profile"
              id="peer_profile"
              onChange={handleChange}
              placeholder={"https://peerlist.io/your_username_here"}
            />
          </div>
          <button
            style={
              formValues.email === "" ||
              formValues.peer_profile === "" ||
              !isValidPeerProfile(formValues.peer_profile)
                ? {
                    opacity: 0.7,
                    cursor: "not-allowed",
                  }
                : {}
            }
            title={
              formValues.email === "" ||
              formValues.peer_profile === "" ||
              !isValidPeerProfile(formValues.peer_profile)
                ? "Please fill the required information"
                : ""
            }
            disabled={
              formValues.email === "" ||
              formValues.peer_profile === "" ||
              !isValidPeerProfile(formValues.peer_profile)
                ? true
                : false
            }
          >
            {loading ? (
              <PulseLoader color="white" size={10}></PulseLoader>
            ) : (
              "Get Pass"
            )}
          </button>
        </form>
        {error && (
          <div className={styles["error"]}>
            <p>Please input correct details and try again...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketForm;
