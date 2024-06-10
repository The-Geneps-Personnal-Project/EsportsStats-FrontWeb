import { Meta } from "@storybook/react";

import { DateHoursInfo } from "../DateHoursInfo";
import { DateHoursInfoProps } from "../DateHoursInfo.props";

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
