import React, { useState } from "react";
import { LogoutButton } from "../../logout/logout";
import { newUser } from "../../services/service";

export const ActivistRegister = ({ key, setRegistration }) => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit() {
    let user = { Email: email, Address: address, Phone: phone, Role: key };
    newUser(user);
    setRegistration(true);
    console.log(email, address, phone, key);
  }

  return (
    <div onSubmit={handleSubmit}>
      <h1>Registration</h1>
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
        Address:
        <input
          className="rightSpace"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />
      <label className="rightSpace">
        Phone:
        <input
          className="rightSpace"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <button
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      <LogoutButton />
    </div>
  );
};
