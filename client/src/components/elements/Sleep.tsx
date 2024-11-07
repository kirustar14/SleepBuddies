import Image from "../../assets/moon-sleep.svg";
import {Link} from "react-router-dom";

const Sleep = () => {
    return (
        <Link className="clickable" to="/sleep">
            <div className="applet">
                <img className="image" src={Image} alt={"Sleep icon"}/>
                <div className="overlay">
                    <div className="overlayText">Sleep</div>
                </div>
            </div>
        </Link>
    );
};

export default Sleep;
