import React from "react";
import { LogoutButton } from "../../logout/logout";
import { Link } from "react-router-dom";

import "./navBar.css";

import HomeIcon from "@mui/icons-material/Home";
import CampaignIcon from "@mui/icons-material/Campaign";
import TwitterIcon from "@mui/icons-material/Twitter";
import GroupIcon from "@mui/icons-material/Group";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const NavBar = (props) => {
  return (
    <div className="list">
      <nav>
        <ul>
          <li>
            <span>Owner</span>
            <ManageAccountsIcon fontSize="large" />
          </li>
          <li>
            <Link
              className="Links"
              to="/"
            >
              <HomeIcon fontSize="large" />
              <div className="section-name">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/Users">
              <GroupIcon fontSize="large" />
              <div className="section-name">Users</div>
            </Link>
          </li>
          <li>
            <Link to="/Campaigns">
              <CampaignIcon fontSize="large" />
              <div className="section-name">Campaigns</div>
            </Link>
          </li>
          <li>
            <Link to="/AllTwitts">
              <TwitterIcon fontSize="large" />
              <div className="section-name">Twitts</div>
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
