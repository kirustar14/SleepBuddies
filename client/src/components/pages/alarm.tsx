import React, { useState, useEffect } from "react";
import "../../css/alarm.css";
import AlarmModal from "../elements/AlarmModal";

const Alarm = () => {
  
  useEffect(() => {
    document.title = "Sleep Buddies - Alarms";
  }, []);
  
  const [alarms, setAlarms] = useState<Array<{
    title: string;
    time: string;
    description: string;
    frequency: string[];
  }>>([
    { title: "Shower Alarm", time: "07:30 PM", description: "Reminder to take your shower", frequency: ["Everyday"] },
    { title: "Medication Alarm", time: "08:00 PM", description: "Take morning medication", frequency: ["Mon", "Wed", "Fri"] },
    { title: "Brush Teeth Alarm", time: "09:00 PM", description: "Reminder to brush your teeth before bed", frequency: ["Tues", "Thurs"] }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAlarm, setNewAlarm] = useState<{
    title: string;
    description: string;
    time: string;
    sound: boolean;
    frequency: string[];
  }>({
    title: "",
    description: "",
    time: "", // Let time be empty initially, it will be set in the AlarmModal
    sound: true,
    frequency: []
  });

  const handleAddAlarmClick = () => {
    setIsModalOpen(true);
    setNewAlarm({ ...newAlarm }); // Open the modal without resetting `newAlarm`, keep the current values
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewAlarm({ title: "", description: "", time: "", sound: true, frequency: [] });
  };

  const handleSaveAlarm = () => {
    if (newAlarm.time) {
      const alarmTitle = newAlarm.title.trim() === "" ? "Alarm" : newAlarm.title;
      setAlarms([...alarms, { ...newAlarm, title: alarmTitle }]);
      handleCloseModal();
    } else {
      alert("Please select a time for the alarm.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAlarm({ ...newAlarm, [name]: value });
  };

  const handleFrequencyChange = (day: string) => {
    setNewAlarm((prevAlarm) => {
      const newFrequency = prevAlarm.frequency.includes(day)
        ? prevAlarm.frequency.filter((d) => d !== day)
        : [...prevAlarm.frequency, day];
      return { ...prevAlarm, frequency: newFrequency };
    });
  };

  return (
    <div className="alarm-page">
      <div className="alarm-header">
        <h1 className="alarm-page-title">Alarms</h1>
        <button className="add-alarm-button" onClick={handleAddAlarmClick}>+</button>
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
              <p className="alarm-frequency">{alarm.frequency.length > 0 ? alarm.frequency.join(", ") : "Just once"}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <AlarmModal
          newAlarm={newAlarm}
          setNewAlarm={setNewAlarm}
          handleSaveAlarm={handleSaveAlarm}
          handleCloseModal={handleCloseModal}
          handleInputChange={handleInputChange}
          handleFrequencyChange={handleFrequencyChange}
        />
      )}
    </div>
  );
};

export default Alarm;
