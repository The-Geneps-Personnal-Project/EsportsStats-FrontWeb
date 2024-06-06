import React from "react";
import { TeamScoreProps } from "../../atoms";

export type ShortGameScoreProps = {
  firstTeam: TeamScoreProps;
  secondTeam: TeamScoreProps;
  date: Date;
  isLive?: boolean;
  size?: "sm" | "md";
} & React.HTMLAttributes<HTMLDivElement>;
