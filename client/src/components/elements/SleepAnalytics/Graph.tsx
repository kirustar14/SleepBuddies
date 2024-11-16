import { title } from "process";
import React from "react";
import { Chart } from "react-google-charts";
// https://www.react-google-charts.com/docs/quick-walkthrough

export const Graph = () =>{
    const hardCodeData = [
        ["Day", "Hours"],
        ["Monday", 6],
        ["Tuesday", 7],
        ["Wednesday", 7.5],
        ["Thursday", 6],
        ["Friday", 9],
        ["Saturday", 10],
        ["Sunday", 8],
    ];

    const options = {
        title: "Sleep Trends in a 1 Week Period",
        hAxis: {title: "Days"},
        vAxis: {title: "Hours"},
        backgroundColor: "white",
    };

    return (
        <>
            <h2>WIP</h2>
            <Chart
                chartType="ColumnChart"
                data={hardCodeData}
                options={options}
            />
        </>
    );
};