import Image from "../../assets/medical-report.png";
import {Link} from "react-router-dom";

const Sleep = () => {
    return (
        <Link className="clickable" to="/sleep">
            <div className="applet">
                <img className="image" src={Image} alt={"Sleep icon"}/>
                <div className="overlay">
                    <div className="overlayText">Appointments</div>
                </div>
            </div>
        </Link>
    );
};

export default Sleep;

