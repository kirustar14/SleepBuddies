import React from "react";
import "../../css/AlarmModal.css";

const AlarmModal = ({
  newAlarm,
  setNewAlarm,
  handleSaveAlarm,
  handleCloseModal,
  handleInputChange,
  handleFrequencyChange
}) => {
  return (
    <div className="alarm-modal-overlay">
      <div className="alarm-modal">
        <h2 className="alarm-modal-title">Add New Alarm</h2>
        
        <div className="alarm-modal-field">
          <label className="alarm-modal-label">Alarm Title (Optional)</label>
          <input
            type="text"
            name="title"
            value={newAlarm.title}
            onChange={handleInputChange}
            className="alarm-modal-input"
            placeholder="Alarm"
          />
        </div>

        <div className="alarm-modal-field">
          <label className="alarm-modal-label">Alarm Description (Optional)</label>
          <input
            type="text"
            name="description"
            value={newAlarm.description}
            onChange={handleInputChange}
            className="alarm-modal-input"
            placeholder="e.g., Take iron pill, Go for a run, etc."
          />
        </div>

        <div className="alarm-modal-field">
          <label className="alarm-modal-label">Select Alarm Time (Required)</label>
          <input
            type="time"
            name="time"
            value={newAlarm.time}
            onChange={handleInputChange}
            className="alarm-modal-time-input"
            required
          />
        </div>

        <div className="alarm-modal-field">
          <label className="alarm-modal-label">Sound Alarm?</label>
          <div className="alarm-modal-sound-options">
            <label>
              <input
                type="radio"
                name="sound"
                value={true}
                checked={newAlarm.sound === true}
                onChange={() => setNewAlarm({ ...newAlarm, sound: true })}
              />
              Yes
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                name="sound"
                value={false}
                checked={newAlarm.sound === false}
                onChange={() => setNewAlarm({ ...newAlarm, sound: false })}
              />
              No
            </label>
          </div>
        </div>

        <div className="alarm-modal-field">
          <label className="alarm-modal-label">Alarm Frequency (Optional)</label>
          <div className="alarm-modal-checkbox-group">
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  checked={newAlarm.frequency.includes(day)}
                  onChange={() => handleFrequencyChange(day)}
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        <div className="alarm-modal-buttons">
          <button className="alarm-modal-save-button" onClick={handleSaveAlarm}>
            Save
          </button>
          <button className="alarm-modal-cancel-button" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlarmModal;
