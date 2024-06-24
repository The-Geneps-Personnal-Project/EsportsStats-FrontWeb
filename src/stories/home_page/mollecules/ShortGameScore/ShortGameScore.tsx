import React from "react";

import { Flex } from "../../../layout/flex";

import { ShortGameScoreProps } from "./ShortGameScore.props";
import { DateHoursInfo, TeamScore } from "../../atoms";

export const ShortGameScore: React.FC<ShortGameScoreProps> = ({
  firstTeam,
  secondTeam,
  date,
  isLive,
  size = "sm",
}) => {
  return (
    <Flex
      alignItems="stretch"
      justifyContent="flex-start"
      flexDirection="row"
      className={`shortGame bg-tertiary-500`}
    >
      <DateHoursInfo
        date={date}
        isLive={isLive}
        size={size}
        style={{
          width: size === "md" ? "90px" : "76px",
        }}
      />
      <Flex style={{ marginRight: "8px", marginLeft: "8px" }}>
        <TeamScore
          teamName={firstTeam.teamName}
          logo={firstTeam.logo}
          score={firstTeam.score}
          size={size}
          style={{ paddingTop: "8px", paddingBottom: "8px" }}
        />
        <TeamScore
          teamName={secondTeam.teamName}
          logo={secondTeam.logo}
          score={secondTeam.score}
          size={size}
          style={{ paddingTop: "8px", paddingBottom: "8px" }}
        />
      </Flex>
    </Flex>
  );
};

export default ShortGameScore;
