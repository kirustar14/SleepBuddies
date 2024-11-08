import Image from "../../assets/clock.svg";
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <Link className="clickable" to="/signup">
            <div className="applet">
                <img className="image" src={Image} alt={"Login icon"}/>
            </div>
        </Link>
    );
};

export default Signup;
