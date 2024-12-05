import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Link className="clickable" to="/home">
            <div className="applet">
                <p className="button-text">Home</p>
            </div>
        </Link>
    );
};

export default Home;
