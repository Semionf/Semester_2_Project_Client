import React from "react";
import "./style.css";
export const About = () => {
  //About website
  return (<div>
    <h1 className="headline">About</h1>
    <div >
      <h3>This website was developed in order to promote campaigns
We belive in emproving socaity and help each other grow</h3>
<h3>Our goal is to create a safe environment for businesses, organization and social active users,
   that want to help socaity and donate some money or products</h3>
   <h3>We belive that together we can make a diffrence! So let's get things moving. </h3>
    </div>
    <img
          className="img1"
          src={require("./success.png")}
          alt="#"
        />
           <img
          className="img2"
          src={require("./goal.png")}
          alt="#"
        />
  </div>)
};
