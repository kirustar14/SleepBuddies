import React, { useEffect } from "react";

const Music = () => {

    useEffect(() => {
        document.title = "Sleep Buddies - Music";
    }, []);

    return (
        <>
            <h1>Music</h1>
        </>
    );
};

export default Music;
