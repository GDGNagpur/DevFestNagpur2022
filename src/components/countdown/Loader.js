import devload from "../../assets/hero/illustration/dev.gif";
import   "./Loader.css";
import {useState} from "react";

function Loader(){
    const [style, setStyle] = useState("loadstart");


    const handleLoad = () => {


        setTimeout(() => {
            setStyle("loadend");
        }, 5000);
    }
    return(
        <div id="pre-loader" onLoad={handleLoad} className={style}
        >
            <img src={devload} className="loadimg" />

        </div>

    );

}

export default Loader;