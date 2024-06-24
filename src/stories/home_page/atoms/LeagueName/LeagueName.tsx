import React from "react";

import { LeagueNameProps } from "./LeagueName.props";
import { Flex } from "../../../../stories/layout";

export const LeagueName: React.FC<LeagueNameProps> = ({
  name,
  logo,
  className,
}) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="stretch"
      className={`leagueTitle ${className}`}
    >
      <Flex className="leagueLogoContainer">
        <img src={logo} alt={name} className="leagueLogo" />
      </Flex>
      <div className="leagueText">{name}</div>
    </Flex>
  );
};
