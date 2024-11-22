// Separate file: AlarmModal.tsx
import React from "react";
import "../../css/AlarmModal.css";

interface AlarmModalProps {
  onStop: () => void;
  onSnooze: () => void;
}

const AlarmModal: React.FC<AlarmModalProps> = ({ onStop, onSnooze }) => {
  return (
    <div className="alarm-popup">
      <div className="popup-content">
        <p>⏰ Alarm Triggered! ⏰</p>
        <button onClick={onStop}>Stop</button>
        <button onClick={onSnooze}>Snooze (5 mins)</button>
      </div>
    </div>
  );
};

export default AlarmModal;

