import React from "react";
import { LogoutButton } from "../../logout/logout";
import { Link } from "react-router-dom";

import "./navBar.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CampaignIcon from "@mui/icons-material/Campaign";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PhoneIcon from "@mui/icons-material/Phone";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

export const NavBar = (props) => {
  return (
    <div className="list bg-warning">
      <nav>
        <ul>
          <li>
            <span>Organization</span>
            <CorporateFareIcon fontSize="large" />
          </li>
          <li>
            <Link to="/">
              <HomeIcon fontSize="large" />
              <div className="section-name">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/Campaigns">
              <CampaignIcon fontSize="large" />
              <div className="section-name">Campaigns</div>
            </Link>
          </li>
          <li>
            <Link to="/Donations/:userID">
              <VolunteerActivismIcon fontSize="large" />
              <div className="section-name">Donations</div>
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
