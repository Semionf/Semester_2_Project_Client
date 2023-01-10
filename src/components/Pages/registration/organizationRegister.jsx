import React, { useState } from "react";
import { newUser } from "../../services/service";
import { LogoutButton } from "../../logout/logout";

export const OrganizationRegister = ({ role, setRegistration }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  function handleSubmit(e) {
    let user = {
      Name: name,
      Email: email,
      Link: website,
      Role: role,
    };
    newUser(user);
    setRegistration(true);
    console.log(name, email, website, role);
  }

  return (
    <div>
      <h1>Registration</h1>
      <label className="rightSpace">
        Name:
        <input
          className="rightSpace"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label className="rightSpace">
        Email:
        <input
          className="rightSpace"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label className="rightSpace">
        Website:
        <input
          className="rightSpace"
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </label>
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
      <LogoutButton />
    </div>
  );
};
