import React from "react";

interface SleepLogProps {
    averageSleep: number;
    bestDay: { day: string; hours: number };
    worstDay: { day: string; hours: number };
    goal: number;
}

export const SleepLog: React.FC<SleepLogProps> = ({ averageSleep, bestDay, worstDay, goal }) => {
    return (
        <div>
            <h2>Your Sleep Journey</h2>
            <h4>Average Hours Slept: {averageSleep.toFixed(2)}</h4>
            <h4>Sleep Goal: {goal}</h4>
            <h4>Best Day: {bestDay.day} ({bestDay.hours.toFixed(2)} hours)</h4>
            <h4>Worst Day: {worstDay.day} ({worstDay.hours.toFixed(2)} hours)</h4>
        </div>
    );
};
