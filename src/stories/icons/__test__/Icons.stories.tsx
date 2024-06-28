import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  MinusCircle,
  PlusCircle,
} from "../../icons";

export default {
  title: "Icons",
  component: ArrowDown,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
  },
} as Meta;

const Template: StoryFn<{
  height: number;
  width: number;
  color: string;
}> = (args) => (
  <div>
    <div style={{ margin: "20px" }}>
      <h3>Arrow Left</h3>
      <ArrowLeft {...args} />
    </div>
    <div style={{ margin: "20px" }}>
      <h3>Arrow Right</h3>
      <ArrowRight {...args} />
    </div>
    <div style={{ margin: "20px" }}>
      <h3>Arrow Down</h3>
      <ArrowDown {...args} />
    </div>
    <div style={{ margin: "20px" }}>
      <h3>Arrow Up</h3>
      <ArrowUp {...args} />
    </div>
    <div style={{ margin: "20px" }}>
      <h3>Plus Circle</h3>
      <PlusCircle {...args} />
    </div>
    <div style={{ margin: "20px" }}>
      <h3>Minus Circle</h3>
      <MinusCircle {...args} />
    </div>
  </div>
);

export const AllIcons = Template.bind({});
AllIcons.args = {
  height: 50,
  width: 50,
  color: "currentColor",
};
