import { Meta } from "@storybook/react";

import { DateHoursInfo } from "../dateHoursInfo";
import { DateHoursInfoProps } from "../dateHoursInfo.props";

export const DateHoursInfoStory = (args: DateHoursInfoProps) => (
  <DateHoursInfo {...args} />
);

export default {
  title: "HomePage/Atoms/Date Hours Info",
  component: DateHoursInfo,
  argTypes: {
    date: { control: "text" },
    hours: { control: "text" },
  },
} as Meta;
