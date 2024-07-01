import React from "react";

import { Meta } from "@storybook/react";

import { FooterTournamentList } from "../FooterTournamentList";
import { Flex } from "../../../../layout";

export const FooterTournamentListStory = () => {
  function handleClick() {
    console.log("Clicked");
    alert("Clicked");
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <img
        src="https://picsum.photos/800/600"
        alt="Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Flex style={{ position: "relative", height: "100%" }}>
        <FooterTournamentList onClick={handleClick} />
      </Flex>
    </div>
  );
};

export default {
  title: "HomePage/Atoms/Footer Tournament List",
  component: FooterTournamentList,
  argTypes: {
    onClick: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} as Meta;
