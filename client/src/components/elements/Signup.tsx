import Image from "../../assets/clock.svg";
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <Link className="clickable" to="/signup">
            <div className="applet">
                <img className="image" src={Image} alt={"Login icon"}/>
                {/* <div className="overlay">
                    <div className="overlayText">Sign Up</div>
                </div> */}
            </div>
        </Link>
    );
};

export default Signup;