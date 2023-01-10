import React from "react";
import { LogoutButton } from "../../logout/logout";
import { Link } from "react-router-dom";

import "./navBar.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import InventoryIcon from "@mui/icons-material/Inventory";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";

export const NavBar = () => {
  return (
    <div className="list bg-success">
      <ul>
        <li>
          <span>Buisness</span>
          <BusinessIcon fontSize="large" />
        </li>
        <li>
          <Link to="/">
            <HomeIcon fontSize="large" />
            <div className="section-name">Home</div>
          </Link>
        </li>
        <li>
          <Link to="/Donate">
            <VolunteerActivismIcon fontSize="large" />
            <div className="section-name">Donate</div>
          </Link>
        </li>
        <li>
          <Link to="/ProductsBought">
            <InventoryIcon fontSize="large" />
            <div className="section-name">Products Bought</div>
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
    </div>
  );
};
