import React from "react";

import { DateHoursInfoProps } from "./dateHoursInfo.props";
import { Flex } from "@/stories/layout";

export const DateHoursInfo: React.FC<DateHoursInfoProps> = ({
  date = Date.now().toString(),
  hours = Date.now().toString(),
}) => {
  console.log("date", date);
  console.log("hours", hours);

  return (
    <Flex>
      <div>{date}</div>
      <div>{hours}</div>
    </Flex>
  );
};

export default DateHoursInfo;
