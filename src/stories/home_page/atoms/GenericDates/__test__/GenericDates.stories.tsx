import React from "react";

import { Meta } from "@storybook/react";

import { GenericDates } from "../GenericDates";
import { GenericDatesProps } from "../GenericDates.props";

export const GenericDatesStory = (args: GenericDatesProps) => (
  <GenericDates {...args} />
);

GenericDatesStory.args = {
  startDate: new Date(),
  endDate: new Date(),
};

export default {
  title: "Generic/Atoms/GenericDates",
  components: GenericDates,
  argTypes: {
    startDate: { control: "date" },
    endDate: { control: "date" },
  },
};
