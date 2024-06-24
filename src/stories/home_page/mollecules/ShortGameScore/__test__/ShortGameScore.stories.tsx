import React from "react";

import { Meta } from "@storybook/react";

import { ShortGameScore } from "../ShortGameScore";
import { ShortGameScoreProps } from "../ShortGameScore.props";

export const ShortScoreGameStory = (args: ShortGameScoreProps) => (
  <ShortGameScore {...args} />
);

ShortScoreGameStory.args = {
  firstTeam: {
    teamName: "Anorthosis Famagusta Esports",
    logo: "https://static.lolesports.com/teams/G2-FullonDark.png",
    score: 0,
  },
  secondTeam: {
    teamName: "Anorthosis Famagusta Esports",
    logo: "https://static.lolesports.com/teams/G2-FullonDark.png",
    score: 0,
  },
  date: new Date(),
  isLive: false,
  size: "sm",
};

export default {
  title: "HomePage/Mollecules/Short Score Game",
  component: ShortGameScore,
  argTypes: {
    date: { control: "date" },
    size: { control: { type: "radio", options: ["sm", "md"] } },
    isLive: { control: "boolean" },
  },
} as Meta;
