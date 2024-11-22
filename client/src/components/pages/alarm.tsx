import React from "react";
import "../../css/alarm.css";

const Alarm = () => {
  const alarms = [
    "07:00 AM - Morning Alarm",
    "12:00 PM - Lunch Alarm",
    "05:00 PM - Evening Workout Alarm",
  ];

  return (
    <div className="alarm-page">
      <div className="alarm-header">
        <h1 className="alarm-page-title">Alarms</h1>
        <button className="add-alarm-button">+</button>
      </div>
      <div className="alarm-list">
        {alarms.map((alarm, index) => (
          <div key={index} className="alarm-item">
            {alarm}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alarm;



