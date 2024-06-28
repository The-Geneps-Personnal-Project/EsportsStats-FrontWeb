import React from "react";

import { Flex } from "@/stories/layout";
import { PlusCircle } from "@/stories/icons";
import { FooterTournamentListProps } from "./FooterTournamentList.props";

export const FooterTournamentList: React.FC<FooterTournamentListProps> = ({
  onClick,
}) => {
  return (
    <Flex
      className="footerTournamentList"
      flexDirection="row"
      justifyContent="flex-start"
      onClick={onClick}
    >
      <div className="footerTournamentListContainer">VOIR PLUS</div>
      <PlusCircle height={28} width={28} />
    </Flex>
  );
};
