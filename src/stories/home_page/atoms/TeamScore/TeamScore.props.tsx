import React from "react";

export type TeamScoreProps = {
  teamName: string;
  logo: string;
  score: number;
  size?: "sm" | "md";
} & React.HTMLAttributes<HTMLDivElement>;
