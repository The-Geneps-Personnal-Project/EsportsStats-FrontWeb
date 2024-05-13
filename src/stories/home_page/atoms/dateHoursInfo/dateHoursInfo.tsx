import React from "react";
import { DateHoursInfoProps } from "./dateHoursInfo.props";

export const DateHoursInfo: React.FC<DateHoursInfoProps> = ({
  date,
  hours,
}) => {
  return (
    <div>
      <div>{date}</div>
      <div>{hours}</div>
    </div>
  );
};
