import React, { useState } from "react";

const Alarm = () => {
    const [alarmTime, setAlarmTime] = useState("");
    const [savedAlarmTime, setSavedAlarmTime] = useState("");

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setAlarmTime(event.target.value);
    };

    const handleSave = () => {
        setSavedAlarmTime(alarmTime);
    };

    return (
        <>
            <h1>Alarm</h1>

            <div className="alarm-setting">
                <label htmlFor="alarmTime">Set Alarm:</label>
                <input
                    type="time"
                    id="customTime"
                    value={alarmTime}
                    onChange={handleTimeChange}
                    placeholder="Enter custom time"
                />
                <select
                    id="alarmTimeDropdown"
                    value={alarmTime}
                    onChange={handleTimeChange}
                >
                    <option value="">Select a time</option>
                    <option value="06:00">6:00 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                </select>

                <button onClick={handleSave}>Save Alarm Time</button>
            </div>

            {savedAlarmTime && (
                <div className="saved-alarm">
                    <p>Saved Alarm Time: {savedAlarmTime}</p>
                </div>
            )}
        </>
    );
};

export default Alarm;
