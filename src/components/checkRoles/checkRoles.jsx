import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getMail, getRoles } from "../services/service";
import {
  ProLobbyOwner,
  BusinessCompanyRepresentative,
  NonProfitOrganizationRepresentative,
  SocialActivist,
} from "../Pages/users";

import { NotAuthenticated } from "../notAuthenticated/notAuthenticated";
import { OrganizationRegister } from "../Pages/registration/organizationRegister";
import { ActivistRegister } from "../Pages/registration/activistRegister";
import { BuisnessRegister } from "../Pages/registration/buisnessRegister";

export const CheckRoles = () => {
  const [roles, setRoles] = useState([]);
  const [isRegistered, setRegistration] = useState(undefined);
  const { user } = useAuth0();

  const handleRoles = async () => {
    let userID = user.sub;
    let role = await getRoles(userID);

    setRoles(role);
    handleRegistration();
  };

  const handleRegistration = () => {
    let email = user.email;
    return checkUserRole(email);
  };

  const checkUserRole = (email) => {
    roles.map(async (m) => {
      if (m.name === "Non-Profit Organization Representative") {
        let isReg = await getMail(email);
        setRegistration(isReg);
      } else if (m.name === "Business Company Representative") {
        let isReg = await getMail(email);
        setRegistration(isReg);
      } else if (m.name === "Social Activist") {
        let isReg = await getMail(email);
        setRegistration(isReg);
      }
    });
  };

  useEffect(() => {
    handleRoles();
  }, []);
  handleRegistration();
  return (
    <div className="navBar">
      {roles.map((r) => {
        if (r.name === "Business Company Representative") {
          return isRegistered === true ? (
            <BusinessCompanyRepresentative
              key={r.name}
              BusinessEmail={user.email}
            />
          ) : (
            <BuisnessRegister
              setRegistration={setRegistration}
              key={r.name}
              role={r.name}
            />
          );
        } else if (r.name === "Non-Profit Organization Representative") {
          return isRegistered === true ? (
            <NonProfitOrganizationRepresentative
              key={r.name}
              ID={r.ID}
              Email={user.email}
            />
          ) : (
            <OrganizationRegister
              setRegistration={setRegistration}
              key={r.name}
              role={r.name}
            />
          );
        } else if (r.name === "ProLobby Owner")
          return (
            <ProLobbyOwner
              key={r.name}
              userID={user.email}
            />
          );
        else if (r.name === "Social Activist") {
          return isRegistered === true ? (
            <SocialActivist
              key={r.name}
              Email={user.email}
            />
          ) : (
            <ActivistRegister
              key={r.name}
              setRegistration={setRegistration}
              role={r.name}
            />
          );
        } else return <NotAuthenticated key={null} />;
      })}
    </div>
  );
};
