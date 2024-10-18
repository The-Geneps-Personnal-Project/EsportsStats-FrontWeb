import React, { useEffect, useState } from "react";

import { Flex } from "@/stories/layout";

import { GenericDatesProps } from "./GenericDates.props";
import { format } from "date-fns/format";

export const GenericDates: React.FC<GenericDatesProps> = ({
  startDate,
  endDate,
}) => {
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");

  useEffect(() => {
    if (startDate) {
      const formattedDate = format(startDate, "dd/MM/yyyy");
      setFormattedStartDate(formattedDate);
    }
    if (endDate) {
      const formattedDate = format(startDate, "dd/MM/yyyy");
      setFormattedEndDate(formattedDate);
    }
  }, [startDate, endDate]);

  return (
    <Flex flexDirection="row" className="genericDates">
      <div>
        {formattedStartDate}&nbsp;au&nbsp;{formattedEndDate}
      </div>
    </Flex>
  );
};

export default GenericDates;
