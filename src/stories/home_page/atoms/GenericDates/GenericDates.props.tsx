import React from "react";

export type GenericDatesProps = {
  startDate: Date;
  endDate: Date;
} & React.HTMLAttributes<HTMLDivElement>;
