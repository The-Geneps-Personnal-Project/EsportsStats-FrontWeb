import React from "react";

import { TextArrowButtonProps } from "./TextArrowButton.props";

import { ArrowLeft, ArrowRight } from "../../../icons";
import { Flex } from "../../../layout";

export const TextArrowButton: React.FC<TextArrowButtonProps> = ({
  text,
  onClick,
  arrow = "right",
  ...props
}) => {
  const defineArrow = () => {
    if (arrow === "right") {
      return <ArrowRight height={28} width={28} />;
    } else {
      return <ArrowLeft height={28} width={28} />;
    }
  };

  return (
    <Flex
      className="textArrowButton"
      flexDirection="row"
      {...props}
      onClick={onClick}
    >
      <div className="textArrowButtonText">{text}</div>
      {defineArrow()}
    </Flex>
  );
};
