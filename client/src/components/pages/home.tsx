import React, { useEffect } from "react";
import Meditation from "../elements/Meditation";
import Sleep from "../elements/Sleep";
import Alarm from "../elements/Alarm";
import Music from "../elements/Music";
import Journal from "../elements/Journal";

const Home = () => {

    useEffect(() => {
        document.title = "Sleep Buddies - Home";
    }, []);

    return (
        <>
            <h1>Home</h1>
            <div className="projects-container-div">
                <Sleep/>
                <Meditation/>
                <Alarm/>
                <Music/>
                <Journal/>
            </div>
        </>
    );
};

export default Home;
