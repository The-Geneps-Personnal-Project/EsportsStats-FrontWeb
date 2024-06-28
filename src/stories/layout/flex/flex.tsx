import React from "react";

import { FlexProps } from "./flex.props";

export const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  className,
  style,
  onClick,
}) => {
  const flexStyle = {
    display: "flex",
    justifyContent: justifyContent || "center",
    alignItems: alignItems || "center",
    flexDirection: flexDirection || "column",
    ...style,
  };

  return (
    <div className={className} style={flexStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default Flex;
