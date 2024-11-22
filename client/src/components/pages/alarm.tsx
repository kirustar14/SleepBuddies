import React, { useState, useEffect } from "react";
import AlarmModal from "../elements/AlarmModal";
import "../../css/alarm.css";

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState<string>("");
  const [savedAlarmTime, setSavedAlarmTime] = useState<string>("");
  const [isAlarmTriggered, setIsAlarmTriggered] = useState<boolean>(false);

  // Handle change in alarm time input
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlarmTime(event.target.value);
  };

  // Save the alarm time
  const handleSave = () => {
    setSavedAlarmTime(alarmTime);
    setIsAlarmTriggered(false); // Reset if previously triggered
  };

  // Effect to check if the current time matches the alarm time
  useEffect(() => {
    if (savedAlarmTime) {
      const interval = setInterval(() => {
        const currentTime = new Date();
        const formattedCurrentTime = currentTime.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        });

        if (formattedCurrentTime === savedAlarmTime) {
          setIsAlarmTriggered(true);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [savedAlarmTime]);

  // Stop the alarm modal
  const handleStop = () => {
    setIsAlarmTriggered(false);
  };

  // Snooze the alarm for 5 minutes
  const handleSnooze = () => {
    const snoozeMinutes = 5;
    const newAlarmTime = new Date();
    newAlarmTime.setMinutes(newAlarmTime.getMinutes() + snoozeMinutes);

    const formattedNewAlarmTime = newAlarmTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setSavedAlarmTime(formattedNewAlarmTime);
    setIsAlarmTriggered(false);
  };

  return (
    <div className="alarm-page">

    <div className="alarm-icon-container">
        <img src="/alarm-bear.jpg" alt="Alarm" className="alarm-icon" />
    </div>

    <div className="alarm-setting-inline">
        <label htmlFor="alarmTime" className="alarm-label">Set Alarm:</label>
        <input
          type="time"
          id="customTime"
          value={alarmTime}
          onChange={handleTimeChange}
          placeholder="Enter custom time"
        />
        <button onClick={handleSave}>Save Alarm Time</button>
    </div>


      {savedAlarmTime && (
        <div className="saved-alarm">
          <p>Saved Alarm Time: {savedAlarmTime}</p>
        </div>
      )}

      {isAlarmTriggered && (
        <AlarmModal
          onStop={handleStop}
          onSnooze={handleSnooze}
        />
      )}
    </div>
  );
};

export default Alarm;
