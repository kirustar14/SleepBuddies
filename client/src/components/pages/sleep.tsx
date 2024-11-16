import React from "react";

import '../../css/Sleep.css';

import { SleepLog } from "../elements/SleepAnalytics/SleepLog";
import { Graph } from "../elements/SleepAnalytics/Graph";
import { Statistics } from "../elements/SleepAnalytics/Statistics";

const Sleep = () => {
    return (
        <>
            <h1>Sleep Analytics</h1>
            <div className="Comps">
                <div className="item"><SleepLog/></div>
                <div className="item"><Graph/></div>
                <div className="item"><Statistics/></div>
            </div>
        </>
    );
};

export default Sleep;
