import React from "react";
import { NavBar } from "../../navBars/navBarOrganization/navBar";
import { Routing } from "../../routing/routing";

export const NonProfitOrganizationRepresentative = ({ Email }) => {
  return (
    <>
      <NavBar></NavBar>
      <Routing Email={Email} />
    </>
  );
};
