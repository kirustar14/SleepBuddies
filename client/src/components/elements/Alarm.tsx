// Import necessary libraries
import { Link } from "react-router-dom";
import "../../css/alarm.css";

const Alarm = () => {
    return (
        <Link className="clickable" to="/alarm">
            <div className="applet">
                <div className="alarm-page-title">Alarms</div>
                <div className="overlay">
                    <div className="overlayText">Alarms</div>
                </div>
            </div>
        </Link>
    );
};

export default Alarm;
