import Image from "../../assets/medical-report.png";
import {Link} from "react-router-dom";

const Alarm = () => {
    return (
        <Link className="clickable" to="/alarm">
            <div className="applet">
                <img className="image" src={Image} alt={"Alarm icon"}/>
                <div className="overlay">
                    <div className="overlayText">Alarm</div>
                </div>
            </div>
        </Link>
    );
};

export default Alarm;
