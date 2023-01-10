import React, { useState } from "react";
import { LogoutButton } from "../../logout/logout";
import { newUser } from "../../services/service";

export const BuisnessRegister = ({ role, setRegistration }) => {
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
    <div>
      <h1>Registration</h1>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Link to website"
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Register
      </button>
      <LogoutButton />
    </div>
  );
};
