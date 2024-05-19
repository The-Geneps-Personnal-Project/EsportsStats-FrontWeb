import { Meta } from "@storybook/react";

import { DateHoursInfo } from "../dateHoursInfo";
import { DateHoursInfoProps } from "../dateHoursInfo.props";

export const DateHoursInfoStory = (args: DateHoursInfoProps) => (
  <DateHoursInfo {...args} />
);

DateHoursInfoStory.args = {
  date: new Date(),
  isLive: false,
};

export default {
  title: "HomePage/Atoms/Date Hours Info",
  component: DateHoursInfo,
  argTypes: {
    date: { control: "date" },
    size: { control: { type: "radio", options: ["sm", "md"] } },
    isLive: { control: "boolean" },
  },
} as Meta;
