import { Meta } from "@storybook/react";

import { LeagueName } from "../LeagueName";
import { LeagueNameProps } from "../LeagueName.props";

export const LeagueNameStory = (args: LeagueNameProps) => (
  <LeagueName {...args} />
);

LeagueNameStory.args = {
  name: "League Name",
  logo: "http://static.lolesports.com/leagues/1592516184297_LEC-01-FullonDark.png",
};

export default {
  title: "HomePage/Atoms/League Name",
  component: LeagueName,
  argTypes: {
    name: { control: "text" },
    logo: { control: "text" },
  },
} as Meta;
