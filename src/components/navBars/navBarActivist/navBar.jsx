import React from "react";
import { LogoutButton } from "../../logout/logout";
import { Link } from "react-router-dom";

import "./navBar.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export const NavBar = (props) => {
  return (
    <div className="list bg-primary">
      <nav>
        <ul>
          <li>
            <span>Social Activist</span>
            <ConnectWithoutContactIcon fontSize="large" />
          </li>
          <li>
            <Link to="/">
              <HomeIcon fontSize="large" />
              <div className="section-name">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/Products">
              <ZoomOutIcon fontSize="large" />
              <div className="section-name">All Products</div>
            </Link>
          </li>
          <li>
            <Link to="/ActivistProducts/">
              <MonetizationOnIcon fontSize="large" />
              <div className="section-name">Products Bought</div>
            </Link>
          </li>

          <li>
            <Link to="/Twitts/">
              <TwitterIcon fontSize="large" />
              <div className="section-name">All Twitts</div>
            </Link>
          </li>
          <li>
            <Link to="/ContactUs">
              <PhoneIcon fontSize="large" />
              <div className="section-name">Contact us</div>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <InfoIcon fontSize="large" />
              <div className="section-name">About</div>
            </Link>
          </li>
          <li>
            <LogoutButton></LogoutButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};
