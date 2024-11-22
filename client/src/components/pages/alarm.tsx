import React from "react";
import "../../css/alarm.css";

const Alarm = () => {
  const alarms = [
    { title: "Morning Alarm", time: "07:00 AM" },
    { title: "Lunch Alarm", time: "12:00 PM" },
    { title: "Evening Workout Alarm", time: "05:00 PM" }
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
            <h2 className="alarm-title">{alarm.title}</h2>
            <strong className="alarm-time">{alarm.time}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alarm;




