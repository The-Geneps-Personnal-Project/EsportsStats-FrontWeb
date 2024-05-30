import React from "react";

import { TeamScoreProps } from "./TeamScore.props";
import { Flex } from "../../../layout/flex";

export const TeamScore: React.FC<TeamScoreProps> = ({
  teamName,
  logo,
  score,
  size = "sm",
  style,
}) => {
  const getSizeClassName = (size: string) => {
    return size === "md" ? "md" : "sm";
  };

  return (
    <Flex
      className={`teamScore ${getSizeClassName(size)}`}
      flexDirection="row"
      style={style}
    >
      <img
        src={logo}
        alt={teamName}
        className={`teamScoreImage ${getSizeClassName(size)}`}
      />
      <Flex
        alignItems="flex-start"
        className={`teamName typo-large ${getSizeClassName(size)}`}
        style={{
          marginLeft: "8px",
          width: size === "md" ? "205px" : "175px",
        }}
      >
        {teamName}
      </Flex>
      <Flex className={`score typo-large ${getSizeClassName(size)}`}>
        {score}
      </Flex>
    </Flex>
  );
};

export default TeamScore;
