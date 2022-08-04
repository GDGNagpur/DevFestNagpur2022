import devload from "../../assets/hero/illustration/dev.gif";
import   "./Loader.css";

function Loader(){
    return(
        <div className="loader-container"
        >
            <img src={devload} alt="GDG Loader" className="loadimg" />
        </div>

    );

}

export default Loader;