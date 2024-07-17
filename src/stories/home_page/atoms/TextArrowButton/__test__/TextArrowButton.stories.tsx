import React from "react";

import { Meta } from "@storybook/react";

import { TextArrowButton } from "../TextArrowButton";
import { TextArrowButtonProps } from "../TextArrowButton.props";

export const TextArrowButtonStory = (args: TextArrowButtonProps) => {
  function handleClick() {
    console.log("Clicked");
    alert("Clicked");
  }

  return <TextArrowButton {...args} onClick={handleClick} />;
};

TextArrowButtonStory.args = {
  text: "Text",
  arrow: "right",
};

export default {
  title: "HomePage/Atoms/Text Arrow Button",
  component: TextArrowButton,
  argTypes: {
    onClick: { table: { disable: true } },
    children: { table: { disable: true } },
    arrow: { control: { type: "select", options: ["right", "left"] } },
    text: { control: { type: "text" } },
  },
};
