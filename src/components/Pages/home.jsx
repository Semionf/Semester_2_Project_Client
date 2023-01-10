import React from "react";
import "./style.css";
export const Home = () => {
  //For everyone
  return (
    <div className="homeContainer">
      <h1>Welcome to PromoteIt</h1>
      <h3>Our platform provide a service in which you are able to:</h3>
      <h4>1. Donate products as buisness to your chosen campaign</h4>
      <h4>
        2. Create campaigns on website as an Organization with a link to the
        campaign website
      </h4>
      <h4>
        3. Buy products as Social Activist in order to support the campaign you
        choose
      </h4>
      <h4>
        4. And many more options as you can see that are related to the user
        type
      </h4>
      <h4 className="contactUs">
        In order to improve our service we provide a Contact Us section in which
        you can ask questions, suggest ideas or just say hi{" "}
      </h4>
    </div>
  );
};
