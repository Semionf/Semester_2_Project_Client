import React, { useState } from "react";
import { postMessage } from "../services/service";
import "./style.css";

export const ContactUs = () => {
  //For all beside ProLobby Owner
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitMessage = async () => {
    console.log(firstName + " " + lastName + " " + email + " " + message);
    await postMessage({
      FullName: firstName + " " + lastName,
      User_Message: message,
      Email: email,
    });
  };
  return (
    <div className="formContainer">
    <div className="form">
      <div className="form-group ">
        <label>First name</label>
        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="First name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Last Name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <small
          id="emailHelp"
          className="form-text text-muted"
        >
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label>User message</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></textarea>
      </div>
      <button
        onClick={() => {
          submitMessage();
        }}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </div>
    </div>
  );
};
