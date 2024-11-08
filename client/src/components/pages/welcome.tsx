import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <>
            <h1>Welcome to Sleep Buddies</h1>
            <div className="welcome_page-div">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </>
    );
};

export default Welcome;