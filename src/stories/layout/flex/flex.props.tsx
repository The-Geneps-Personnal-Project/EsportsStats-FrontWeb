import React from "react";

export type FlexProps = {
  children?: React.ReactNode;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
