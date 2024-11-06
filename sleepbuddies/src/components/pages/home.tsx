import React from "react";
import Meditation from "../elements/Meditation";
import Sleep from "../elements/Sleep";
import Alarm from "../elements/Alarm";

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <div className="projects-container-div">
                <Sleep/>
                <Meditation/>
                <Alarm/>
            </div>
        </>
    );
};
