import React from "react";

export type TextArrowButtonProps = {
  text: string;
  onClick: () => void;
  arrow?: "right" | "left";
} & React.HTMLAttributes<HTMLDivElement>;
