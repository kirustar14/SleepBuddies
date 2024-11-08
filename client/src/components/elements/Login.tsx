import Image from "../../assets/clock.svg";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <Link className="clickable" to="/login">
            <div className="applet">
                <img className="image" src={Image} alt={"Login icon"}/>
            </div>
        </Link>
    );
};

export default Login;
