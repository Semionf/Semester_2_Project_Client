import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  AddCampaign,
  AllTwitts,
  CampaignProductsBought,
  Campaigns,
  ContactUs,
  Donate,
  Donations,
  Home,
  Products,
  ProductsBought,
  Users,
  Twitts,
} from "../Pages/main";
export const Routing = ({ Email, BusinessEmail }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      ></Route>
      <Route
        path="/About"
        element={<About />}
      ></Route>
      <Route
        path="/ContactUs"
        element={<ContactUs />}
      ></Route>
      <Route
        path="/Products"
        element={<Products Email={Email} />}
      ></Route>
      <Route
        path="/ProductsBought/"
        element={<ProductsBought BusinessEmail={BusinessEmail} />}
      ></Route>
      <Route
        path="/Twitts/"
        element={<Twitts Email={Email} />}
      ></Route>
      <Route
        path="/AllTwitts/"
        element={<AllTwitts />}
      ></Route>
      <Route
        path="/Users/"
        element={<Users />}
      ></Route>
      <Route
        path="/Donate"
        element={<Donate BusinessEmail={BusinessEmail} />}
      ></Route>
      <Route
        path="/Donations/"
        element={<Donations Email={Email} />}
      ></Route>
      <Route
        path="/AddCampaign"
        element={<AddCampaign Email={Email} />}
      ></Route>
      <Route
        path="/Campaigns"
        element={<Campaigns Email={Email} />}
      ></Route>
      <Route
        path="/ActivistProducts"
        element={<CampaignProductsBought Email={Email} />}
      ></Route>
    </Routes>
  );
};
