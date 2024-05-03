import { Meta, StoryObj } from "@storybook/react";
import { Typo } from "../typo";

type Story = StoryObj<typeof Typo>;

export const TypoStory = (args: Story["args"]) => <Typo {...args} />;

export default {
  title: "Typography",
  component: Typo,
} as Meta;
