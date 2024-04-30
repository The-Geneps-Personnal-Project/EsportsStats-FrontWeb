import { Meta, StoryObj } from "@storybook/react";
import { ColorPalette } from "../colors";

type Story = StoryObj<typeof ColorPalette>;

export const ColorsPaletteStory = (args: Story["args"]) => (
  <ColorPalette {...args} />
);

export default {
  title: "Color Palette",
  component: ColorPalette,
} as Meta;
