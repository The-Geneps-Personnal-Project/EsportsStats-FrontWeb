import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import { DateHoursInfoProps } from "./dateHoursInfo.props";
import { Flex } from "../../../layout/flex";

export const DateHoursInfo: React.FC<DateHoursInfoProps> = ({
  date,
  size = "sm",
  isLive = false,
}) => {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    if (date) {
      const formattedDate = format(date, "dd/MM");
      setFormattedDate(formattedDate);

      const formattedTime = format(date, "hh:mm a");
      setFormattedTime(formattedTime);
    }
  }, [date]);

  return (
    <Flex
      className={`dateHoursInfo ${isLive ? "live" : "onComing"} ${size === "md" ? "md" : "sm"}`}
    >
      <div className={`typo-large ${size === "md" ? "md" : ""}`}>
        {formattedDate}
      </div>
      <div className={`typo-small ${size === "md" ? "md" : ""}`}>
        {formattedTime}
      </div>
    </Flex>
  );
};

export default DateHoursInfo;
