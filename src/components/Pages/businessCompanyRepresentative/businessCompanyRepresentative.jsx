import React from "react";
import { NavBar } from "../../navBars/navBarBusiness/navBar";
import { Routing } from "../../routing/routing";

export const BusinessCompanyRepresentative = ({ BusinessEmail }) => {
  return (
    <>
      <NavBar></NavBar>
      <Routing BusinessEmail={BusinessEmail}></Routing>
    </>
  );
};
