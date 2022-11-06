import React, { useState } from "react";
import { EventCard } from "./EventCard";
import styles from "./Schedule.module.css";
import { SpeakerCard } from "./SpeakerCard";
import Speaker1 from "../../assets/schedule/Speaker1.png";
import Speaker2 from "../../assets/schedule/Speaker2.png";
import Speaker3 from "../../assets/schedule/Speaker3.png";
import Speaker4 from "../../assets/schedule/Speaker4.png";
import Speaker5 from "../../assets/schedule/Speaker5.png";
import Speaker6 from "../../assets/schedule/Speaker6.png";
import Speaker7 from "../../assets/schedule/Speaker7.png";
import Speaker8 from "../../assets/schedule/Speaker8.png";
import Speaker9 from "../../assets/schedule/Speaker9.png";
import Speaker10 from "../../assets/schedule/Speaker10.png";
import Speaker11 from "../../assets/schedule/Speaker11.png";
import Speaker12 from "../../assets/schedule/Speaker12.png";
import Speaker13 from "../../assets/schedule/Speaker13.png";
import Speaker14 from "../../assets/schedule/Speaker14.png";
import Speaker15 from "../../assets/schedule/Speaker15.png";
import Speaker16 from "../../assets/schedule/Speaker16.png";
import Speaker17 from "../../assets/schedule/Speaker17.png";
import Speaker18 from "../../assets/schedule/Speaker18.png";
import Speaker19 from "../../assets/schedule/Speaker19.png";
import Speaker20 from "../../assets/schedule/Speaker20.png";
import Speaker21 from "../../assets/schedule/Speaker21.png";

export const Schedule = () => {
  const green = "#0F9D56",
    red = "#DB4437",
    blue = "#4285F4",
    yellow = "#F4B400";
  const events = [
    {
      time: "9:00 AM",
      date: "Nov 05",
      event: ["Gates Open", "Morning Tea  ☕"],
      bordercolor: ["#DB4437", green],
      multiEvent: true,
      bg: [
        ["#e8eaed", "#28292B"],
        ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
      ],
    },
    {
      time: "10:45 AM",
      date: "Nov 05",
      event: "Event Start & Chief Guest Falicitation",
      bordercolor: green,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "12:00 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker1]}
          event={"Opening Keynote"}
          speaker={"Kartik Padmanabhan"}
        />
      ),
      bordercolor: "#4285F4",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    // {
    //   time: "11:55 AM",
    //   date: "Nov 05",
    //   event: (
    //     <SpeakerCard
    //       path={[Speaker16]}
    //       event={"Key Insights on building a startup"}
    //       speaker={"Paresh Mayani"}
    //     />
    //   ),
    //   bordercolor: blue,
    //   multiEvent: false,
    //   bg: ["#e8eaed", "#28292B"],
    // },
    {
      time: "12:30 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker2]}
          event={"Digital Modernization with APIfication using Google Apigee"}
          speaker={"Anmol Krishnan Sachdev"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
     {
      time: "01:00 PM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker3]}
          event={"The Flutter Fire Adventure"}
          speaker={"Pawan Kumar"}
        />
      ),
      bordercolor: blue,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "01:30 PM",
      date: "Nov 05",
      event: "Lunch Break 🍕",
      bordercolor: green, //green
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    {
      time: "02:30 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker4]}
          event={"I am not a good designer"}
          speaker={"Faiz Malkani"}
        />
      ),
      bordercolor: red,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    
    // {
    //   time: "3:05 PM",
    //   date: "Nov 05",
    //   event: (
    //     <SpeakerCard
    //       path={[Speaker7]}
    //       event={"Flutter: CustomPaint and Generative Art"}
    //       speaker={"Deven Joshi"}
    //     />
    //   ),
    //   bordercolor: "#DB4437",
    //   multiEvent: false,
    //   bg: ["#e8eaed", "#28292B"],
    // },
    {
      time: "03:00 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker14]}
          event={"Architecting your Compose UI"}
          speaker={"Bhavna Thacker"}
        />
      ),
      bordercolor: "#4285F4",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
      {
      time: "3:30 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker7]}
          event={"Flutter: CustomPaint and Generative Art"}
          speaker={"Deven Joshi"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    // {
    //   time: "04:30 PM",
    //   date: "Nov 05",
    //   event: (
    //     <SpeakerCard
    //       path={[Speaker13]}
    //       event={
    //         "Workshop: A different way to think about animations with Jetpack Compose"
    //       }
    //       speaker={"Sanju S"}
    //     />
    //   ),
    //   bordercolor: yellow,
    //   multiEvent: false,
    //   bg: ["#e8eaed", "#28292B"],
    // },
    {
      time: "04:00 PM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker8]}
          event={"Anatomy of Capstone ML Projects"}
          speaker={"Sayak Paul"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "04:30 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker9]}
          event={"Scaling Startups - Engage, Innovate, Evolve"}
          speaker={"Nitin Sachdeva"}
        />
      ),
      bordercolor: blue,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "5:00 PM",
      date: "Nov 05",
      event: "High Tea ☕",
      bordercolor: green,
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    {
      time: "5:30 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker10]}
          event={"Drive to Thrive"}
          speaker={"Shailesh Lambe"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "6:00 PM",
      date: "Nov 05",
      event: (
        <div className="special-event">
          {" "}
          <div>
            Fireside Chat: What's cooking as the Next Startup and Developer
            ecosystem for the city and country -- Jobs, Diversity Inclusion
          </div>
          <div style={{ fontSize: "14px" }}>Panel Discussion</div>
        </div>
      ),
      bordercolor: blue,
      multiEvent: false,
      smallBg: blue,
      bg: ["rgba(66, 133, 244, 0.2)", "#263D64"],
    },
    {
      time: "7:00 PM",
      date: "Nov 05",
      event: "See you next morning! 🌞",
      bordercolor: yellow, //green
      multiEvent: false,
      smallBg: yellow,
      bg: ["rgba(244, 180, 0, 0.2)", "#483D1C"],
    },
  ];

  //===============================================================
  const events2 = [
    {
      time: "8:30 AM",
      date: "Nov 06",
      event: ["Gates Open", "Morning Tea  ☕"],
      bordercolor: ["#DB4437", green],
      multiEvent: true,
      bg: [
        ["#e8eaed", "#28292B"],
        ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
      ],
    },
    {
      time: "09:30 AM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker11]}
          event={"Opening Keynote"}
          speaker={"Swaima Ahmad"}
        />
      ),
      bordercolor: green,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "10:00 AM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker12]}
          event={"Take Data to the Next Level With Graph Machine Learning"}
          speaker={"Joinal Ahmed"}
        />
      ),
      bordercolor: blue,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "10:30 AM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker13]}
          event={
            "Workshop: A different way to think about animations with Jetpack Compose"
          }
          speaker={"Sanju S"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "11:00 AM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker5, Speaker6]}
          event={
            "Closing the Gaps: Education requirement & 21st century workforce. "
          }
          speaker={"Rasika Chafle, Nilesh Sahare"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "11:30 AM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker15]}
          event={
            "Bringing synergy between development and security - an essential aspect"
          }
          speaker={"Shrutirupa Banerjee"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "12:00 PM",
      date: "Nov 05",
      event: (
        <SpeakerCard
          path={[Speaker16]}
          event={"Key Insights on building a startup"}
          speaker={"Paresh Mayani"}
        />
      ),
      bordercolor: blue,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "12:30 PM",
      date: "Nov 06",
      event: "Lunch Break 🍕",
      bordercolor: green, //green
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    {
      time: "01:30 PM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker17]}
          event={"Why Startups Fail"}
          speaker={"Chanchal Loya"}
        />
      ),
      bordercolor: red,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    // {
    //   time: "09:05 AM",
    //   date: "Nov 06",
    //   event: (
    //     <SpeakerCard
    //       path={[Speaker3]}
    //       event={"The Flutter Fire Adventure"}
    //       speaker={"Pawan Kumar"}
    //     />
    //   ),
    //   bordercolor: blue,
    //   multiEvent: false,
    //   bg: ["#e8eaed", "#28292B"],
    // },

    {
      time: "02:00 PM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker18]}
          event={"Ace Your LinkedIn Presence "}
          speaker={"Sukhada Choudhary"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "02:30 PM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker19]}
          event={"Transitioning into Product Management"}
          speaker={"Sneh Pandya"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    // {
    //   time: "01:30 PM",
    //   date: "Nov 06",
    //   event: (
    //     <SpeakerCard
    //       path={[Speaker17]}
    //       event={"Why Startups Fail"}
    //       speaker={"Chanchal Loya"}
    //     />
    //   ),
    //   bordercolor: red,
    //   multiEvent: false,
    //   bg: ["#e8eaed", "#28292B"],
    // },
    {
      time: "3:00 PM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker20]}
          event={"Build resilient applications using orchestration"}
          speaker={"Cherish Santoshi"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "3:30 PM",
      date: "Nov 06",
      event: "High Tea ☕",
      bordercolor: green,
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    {
      time: "4:00 PM",
      date: "Nov 06",
      event: "Special Activities",
      bordercolor: blue,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "4:30 PM",
      date: "Nov 06",
      event: (
        <SpeakerCard
          path={[Speaker21]}
          event={"Women Tech Makers"}
          speaker={"Ramya Kappagantu"}
        />
      ),
      bordercolor: "#DB4437",
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "5:00 PM",
      date: "Nov 06",
      event: (
        <div className="special-event">
          {" "}
          <div>Women In Tech: Opportunities, Challenges, Solutions</div>
          <div style={{ fontSize: "14px" }}>Panel Discussion</div>
        </div>
      ),
      bordercolor: blue,
      multiEvent: false,
      smallBg: blue,
      bg: ["rgba(66, 133, 244, 0.2)", "#263D64"],
    },
    {
      time: "6:00 PM",
      date: "Nov 06",
      event: "Closing Keynote and Vote of Thanks",
      bordercolor: yellow, //green
      multiEvent: false,
      smallBg: yellow,
      bg: ["rgba(244, 180, 0, 0.2)", "#483D1C"],
    },
  ];

  const [day, setDay] = useState(2);
  const handleClick = () => {
    // setDay(day === 1 ? 2 : 1);
  };

  return (
    <div className={styles.scheduleMainContainer}>
      <div className={styles.heading}>Schedule</div>
      <div className={styles.scheduleContainer}>
        <div className={styles.dayContainer}>
          {/* <div
            className={styles[day === 1 ? "active" : "dayButn"]}
            onClick={handleClick}
          >
            Day 1
          </div> */}
          <div
            className={styles[day === 2 ? "active" : "dayButn"]}
            onClick={handleClick}
            style={{cursor: "auto"}}
          >
            Day 2
          </div>
        </div>
        {day === 1
          ? events.map((event) => {
              return (
                <EventCard
                  date={event.date}
                  time={event.time}
                  event={event.event}
                  bordercolor={event.bordercolor}
                  multiEvent={event.multiEvent}
                  bg={event.bg}
                  smallBg={event.smallBg === undefined ? "" : event.smallBg}
                />
              );
            })
          : events2.map((event) => {
              return (
                <EventCard
                  date={event.date}
                  time={event.time}
                  event={event.event}
                  bordercolor={event.bordercolor}
                  multiEvent={event.multiEvent}
                  bg={event.bg}
                  smallBg={event.smallBg === undefined ? "" : event.smallBg}
                />
              );
            })}
      </div>
    </div>
  );
};
