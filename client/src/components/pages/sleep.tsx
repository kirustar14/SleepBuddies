import React from "react";

import '../../css/Sleep.css';

<<<<<<< HEAD
import { SleepLog } from "../elements/SleepAnalytics/SleepLog";
import { Graph } from "../elements/SleepAnalytics/Graph";
import { Statistics } from "../elements/SleepAnalytics/Statistics";
=======
import {SleepLog} from "../elements/SleepAnalytics/SleepLog";
import {Chart} from "../elements/SleepAnalytics/Chart";
import {Statistics} from "../elements/SleepAnalytics/Statistics";
>>>>>>> 9a78190e86fb0623d15072af42a90009d75d4cc1

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
