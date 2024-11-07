import React from "react";

import '../../css/Sleep.css';

import { SleepLog } from "../elements/SleepAnalytics/SleepLog";
import { Chart } from "../elements/SleepAnalytics/Chart";

const Sleep = () => {
    return (
        <>
            <h1>Sleep Analytics</h1>
            <div className="Comps">
                <div className="item"><SleepLog/></div>

                <div className="item"><Chart/></div>
            </div>
        </>
    );
};

export default Sleep;
