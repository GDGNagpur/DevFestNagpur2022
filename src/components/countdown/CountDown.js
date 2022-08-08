import React from "react";
import styles from "../hero/Hero.module.css";
import Countdown from "react-countdown";

const CountDown = () => {
    // Random component
    const Completionist = () => <h3>We are live now !</h3>;
    const [state, setState] = React.useState(0);
    const [isTrue, setIsTrue] = React.useState(false);
    const Minref = React.useRef("")

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            const daysString = days > 1 ? "Days" : "Day"
            const hoursString = hours > 1 ? "Hours" : "Hour";
            const minsString = minutes > 1 ? "Minutes" : "Minute";
            
            // setState(minutes)

            return (
                <ul className={styles["countdown"]}>
                    <li className={styles["google-blue"]}><span className={styles["days-span"]} >{days}</span>{daysString}</li>
                    <li className={styles["google-yello"]}><span className={styles["hr-span"]} >{hours}</span>{hoursString}</li>
                    <li className={styles["google-green"]}><span ref={Minref}>{minutes}</span>{minsString}</li>
                    <li className={styles["google-red"]}><span className={styles["sec-span"]} >{seconds}</span>Seconds</li>
                </ul>

            );
        }
    };

    React.useEffect(() => {
        if (!isTrue) {
            setIsTrue(true)
            return
        } 
        Minref.current.classList.add(styles["min-span"])
        setTimeout(() => {
            Minref.current.classList.remove(styles["min-span"])
        }, 1000);
    }
        , [state])

    return (
        <Countdown date={new Date(2022, 10, 5, 0, 0, 0, 0)} renderer={renderer} />
    );
};

export default CountDown;
