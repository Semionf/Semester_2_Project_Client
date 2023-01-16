import React from "react";
import { NavBar } from "../../navBars/navBarActivist/navBar";
import { Routing } from "../../routing/routing";

export const SocialActivist = ({ Email }) => {
  return (
    <>
      <NavBar></NavBar>

      <Routing Email={Email} />
    </>
  );
};
