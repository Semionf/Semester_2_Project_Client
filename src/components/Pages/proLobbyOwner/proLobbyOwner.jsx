import React from "react";
import { NavBar } from "../../navBars/navBarOwner/navBar";
import { Routing } from "../../routing/routing";

export const ProLobbyOwner = ({ userID }) => {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Routing Email={userID}></Routing>
      </div>
    </>
  );
};
