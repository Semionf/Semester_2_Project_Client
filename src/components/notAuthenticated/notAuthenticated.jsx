import React from "react";
import "./style.css";
export const NotAuthenticated = ({ container }) => {
  return (
    <>
      <h1>Registration Completed successfully!</h1>
      <div className="container">
        <h3>Authentication takes several hours, please try again later 🤗</h3>
      </div>
    </>
  );
};
