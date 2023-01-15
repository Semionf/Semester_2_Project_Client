import React, { useState } from "react";
import { newUser } from "../../services/service";
import { LogoutButton } from "../../logout/logout";

export const OrganizationRegister = ({ role, setRegistration }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    let user = {
      Name: name,
      Email: email,
      Link: link,
      Role: role,
    };
    newUser(user);
    setRegistration(true);
    console.log(name, email, link, role);
  }

  return (
    <div className="regContainer">
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
        Link:
        <input
          className="rightSpace"
          type="tel"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>
      <br />
      <div className="rightSpace">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
        <LogoutButton />
      </div>
    </div>
  );
};
