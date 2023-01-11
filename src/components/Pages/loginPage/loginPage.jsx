import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

export const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container">
      <h1>Welcome to PromoteIt Website!</h1>
      <div className="LoginWithText">
        <div className="container2">
          <h6>Please Login or Register if you don't have an account yet</h6>
          <button
            className="Login_button"
            onClick={async () => {
              await loginWithRedirect("http://localhost:3000/");
            }}
          >
            Log In
          </button>
          <small>
            Authentication for unregistered users takes several hours{" "}
          </small>
        </div>
        <img
          className="img1"
          src={require("./pic1.jpg")}
          alt="#"
        />
        <img
          className="img2"
          src={require("./pic2.jpg")}
          alt="#"
        />
      </div>
    </div>
  );
};
