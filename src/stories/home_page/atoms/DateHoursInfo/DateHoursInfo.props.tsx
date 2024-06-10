import React from "react";

export type DateHoursInfoProps = {
  date: Date;
  isLive?: boolean;
  size?: "sm" | "md";
} & React.HTMLAttributes<HTMLDivElement>;
