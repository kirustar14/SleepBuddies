//Extract the logic for rendering the list of alarms into a separate AlarmList component
import React from "react";

interface AlarmItemProps {
  alarm: string;
}

const AlarmItem: React.FC<AlarmItemProps> = ({ alarm }) => {
  return <div className="alarm-item">{alarm}</div>;
};

export default AlarmItem;
