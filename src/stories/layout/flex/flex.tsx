import React from "react";
import { FlexProps } from "./flex.props";

export const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
}) => {
  const flexStyle = {
    display: "flex",
    justifyContent: justifyContent || "center",
    alignItems: alignItems || "center",
    flexDirection: flexDirection || "column",
  };

  return <div style={flexStyle}>{children}</div>;
};

export default Flex;
