import React from "react";
import "../../css/alarm.css";

const Alarm = () => {
  const alarms = [
    { title: "Shower Alarm", time: "07:30 PM", description: "Reminder to take your shower", frequency: "Everyday" },
    { title: "Medication Alarm", time: "08:00 PM", description: "Take morning medication", frequency: "Mon, Wed, Fri" },
    { title: "Brush Teeth Alarm", time: "09:00 PM", description: "Reminder to brush your teeth before bed", frequency: "Tues, Thurs" }
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
            <div className="alarm-title-time">
              <h2 className="alarm-title">{alarm.title}</h2>
              <strong className="alarm-time">{alarm.time}</strong>
              <label className="alarm-toggle">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="alarm-description-frequency">
              <p className="alarm-description">{alarm.description}</p>
              <p className="alarm-frequency">{alarm.frequency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alarm;
