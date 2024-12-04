import React from "react";

type AlarmType = {
  title: string;
  time: string;
  description: string;
  frequency: string[];
  sound: boolean;
  active: boolean;
};

interface AlarmRingingModalProps {
  ringingAlarm: AlarmType;
  handleStopAlarm: () => void;
  handleSnoozeAlarm: () => void;
}

const AlarmRingingModal: React.FC<AlarmRingingModalProps> = ({
  ringingAlarm,
  handleStopAlarm,
  handleSnoozeAlarm,
}) => {
  return (
    <div className="alarm-popup">
      <h2>{ringingAlarm.title} is ringing!</h2>
      <button className="stop-alarm-button" onClick={handleStopAlarm}>
        Stop
      </button>
      <button className="snooze-alarm-button" onClick={handleSnoozeAlarm}>
        Snooze
      </button>
    </div>
  );
};

export default AlarmRingingModal;
