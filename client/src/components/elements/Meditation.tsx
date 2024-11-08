import Image from "../../assets/meditation.svg";
import {Link} from "react-router-dom";

const Meditation = () => {
    return (
        <Link className="clickable" to="/meditation">
            <div className="applet">
                <img className="image" src={Image} alt={"Meditation icon"}/>
                <div className="overlay">
                    <div className="overlayText">Meditation</div>
                </div>
            </div>
        </Link>
    );
};

export default Meditation;
