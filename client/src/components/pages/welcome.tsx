import React, { useEffect } from "react";
import Login from "../elements/Login";
import Signup from "../elements/Signup";
import "../../css/welcome.css";

const Welcome = () => {

    useEffect(() => {
        document.title = "Sleep Buddies";
    }, []);

    // if (sessionLoggedIn) {
    //     return (
    //         <>
    //             <div className="welcome_page-div">
    //                 <Home/>
    //             </div>
    //         </>
    //     );
    // } else {
        return (
            <>
                <div className="welcome_page-div">
                    <Login/>
                    <Signup/>
                </div>
            </>
        );
    // }
};

export default Welcome;
