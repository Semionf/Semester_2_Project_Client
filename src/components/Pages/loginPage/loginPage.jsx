import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container">
      <h1>Welcome to PromoteIt Website!</h1>
      <h4>Please Login or Register if you don't have an account yet</h4>
      <button
        className="button-64"
        onClick={() => loginWithRedirect("http://localhost:3000/")}
      >
        Log In
      </button>
    </div>
  );
};
