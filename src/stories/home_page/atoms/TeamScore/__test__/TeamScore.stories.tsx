import React from "react";

import { Meta } from "@storybook/react";

import { TeamScore } from "../TeamScore";
import { TeamScoreProps } from "../TeamScore.props";

export const TeamScoreStory = (args: TeamScoreProps) => <TeamScore {...args} />;

TeamScoreStory.args = {
  teamName: "Team Name",
  logo: "https://static.lolesports.com/teams/G2-FullonDark.png",
  score: 0,
  size: "sm",
};

export default {
  title: "HomePage/Atoms/Team Score",
  component: TeamScore,
  argTypes: {
    teamName: { control: "text" },
    logo: { control: "text" },
    score: { control: "number" },
    size: { control: { type: "radio", options: ["sm", "md"] } },
  },
} as Meta;
