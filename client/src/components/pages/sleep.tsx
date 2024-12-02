import React, { useState } from "react";
import '../../css/Sleep.css';

import { SleepLog } from "../elements/SleepAnalytics/SleepLog";
import { Graph } from "../elements/SleepAnalytics/Graph";
import { Statistics } from "../elements/SleepAnalytics/Statistics";

import GoodJobImage from "../../assets/goodFeedback.png";
import BadJobImage from "../../assets/badFeedback.png";

const Sleep = () => {
    const [hoursSlept, setHoursSlept] = useState<number[]>(Array(7).fill(0));
    const [sleepGoal, setSleepGoal] = useState<number>(6); 

    const updateSleepData = (newHoursSlept: number[]) => {
        setHoursSlept(newHoursSlept);
    };

    // Calculate average sleep
    const validHours = hoursSlept.filter(hours => hours > 0); 
    const averageSleep = validHours.length > 0
        ? validHours.reduce((acc, curr) => acc + curr, 0) / validHours.length
        : 0;

    // Calculate best and worst days
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const maxSleepIndex = hoursSlept.indexOf(Math.max(...hoursSlept));
    const minSleepIndex = hoursSlept.indexOf(Math.min(...hoursSlept));

    const bestDay = {
        day: daysOfWeek[maxSleepIndex],
        hours: hoursSlept[maxSleepIndex],
    };

    const worstDay = {
        day: daysOfWeek[minSleepIndex],
        hours: hoursSlept[minSleepIndex],
    };

    return (
        <>
            <h1>Sleep Analytics</h1>
            <div className="Comps">
                <div className="item">
                    <SleepLog 
                        averageSleep={averageSleep} 
                        bestDay={bestDay}
                        worstDay={worstDay}
                    />
                </div>
                <div className="item"><Graph hoursSlept={hoursSlept}/></div>
                <div className="item"><Statistics updateSleepData={updateSleepData}/></div> 
            </div>

            {averageSleep > sleepGoal && averageSleep > 0 && (
                <div className="feedback">
                    <img
                        src={GoodJobImage}
                        alt="Good Job!"
                        style={{ width: "200px", marginTop: "20px" }}
                    />
                    <h2>Great work! You're exceeding your sleep goal!</h2>
                </div>
            )}

            {averageSleep < sleepGoal && averageSleep > 0 && (
                <div className="feedback">
                    <img
                        src={BadJobImage}
                        alt="Bad Job!"
                        style={{ width: "200px", marginTop: "20px" }}
                    />
                    <h2>Oh-no! Try sleeping more to hit your goal!</h2>
                </div>
            )}
        </>
    );
};

export default Sleep;
