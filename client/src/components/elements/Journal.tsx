import Image from "../../assets/journal.svg";
import {Link} from "react-router-dom";

const Journal = () => {
    return (
        <Link className="clickable" to="/journal">
            <div className="applet">
                <img className="image" src={Image} alt={"Journal icon"}/>
                <div className="overlay">
                    <div className="overlayText">Journal</div>
                </div>
            </div>
        </Link>
    );
};

export default Journal;
