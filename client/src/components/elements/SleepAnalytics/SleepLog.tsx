import React, { useEffect, useState } from "react";
import { fetchHours } from "../../utils/sleep-utils";

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

// SOME TESTING CHANGES
type Log = {
    date: Date;
    hours: number;
};

let defaultLogs: Log[] = [
    {
        date: new Date('2024-12-01'), // December 1, 2024
        hours: 7,
    },
    {
        date: new Date('2024-12-01'), // December 1, 2024
        hours: 9,
    },
];

export const SleepLogs = () => {
    const [logs, setLogs] = useState<Log[]>(defaultLogs);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLogs = async () => {
            try {
                const logs = await fetchHours();
                setLogs(logs);
            } catch (error) {
                setError("Failed to fetch sleep logs");
            }
        };

        getLogs();
    }, []);

    return (
        <div>
            <h1>Sleep Logs</h1>
            {logs.length > 0 ? (
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>
                            <strong>{new Date(log.date).toLocaleDateString()}:</strong> {log.hours} hours
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No sleep logs available.</p>
            )}
        </div>
    );
};