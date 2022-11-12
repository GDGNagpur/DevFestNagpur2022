import React from 'react'
import style from './certificate.module.css'
import GDG from '../../assets/ticket/gdg.svg'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

function Certificate() {

    const [data, setData] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [ticket, setTicket] = useState("");


    const handleFormSubmit = (e) =>{
        e.preventDefault()
        postData()
    }

    const postData = async () => {
       
        await axios
          .post(
            `https://devfest2022tickets.scattrhq.repl.co/api/v1/counter_api`,
            {
                id: ticket,
                email:email,
                name:name
            },
          )
          .then((response) => response.json())
          .then((data) => {
            setData(data)
         })
         .catch((err) => {
    
         });
    
      };

  return (
    <div className="layout-content">

       <div className={style.mainContainer}>
          {/* <div className={style.gdDiv}>
             <img className={style.googleDevelopers} style={{margin:"1em 0em"}} src={GDG} alt="" />
          </div> */}

       <div className={style.inputDiv}>
        <form onSubmit={handleFormSubmit} className={style.certificateForm}>

          <h1 style={{color:"gray", margin:"1em 0em"}}>Get Your Certificate Here !!</h1>

            <input onChange={setEmail} required className={style.dataInputs} placeholder='Email*' type="email" />
              <input onChange={setTicket} className={style.dataInputs} placeholder='Ticket Id' type="text" />
              <input onChange={setName} className={style.dataInputs} placeholder='Name On Certificate' type="text" />

                 <button type="submit" className={style.submitButton}>Get Certificate</button>
        </form>
          </div>
    </div>
    </div>
  )
}

export default Certificate