import React, { useEffect, useState } from "react";
import { NavBar } from "../../navBars/navBarBusiness/navBar";
import { Routing } from "../../routing/routing";
import { newUser } from "../../services/service";

export const BusinessCompanyRepresentative = ({ Role, email }) => {
  const [userMail, setUserMail] = useState("");

  const addUser = async () => {
    let user = {
      Role: Role,
      Email: email,
    };
    await newUser(user);
  };

  return (
    <>
      <NavBar></NavBar>
      <Routing></Routing>
    </>
  );
};
