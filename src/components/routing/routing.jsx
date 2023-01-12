import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  AddCampaign,
  AllProducts,
  CampaignProductsBought,
  Campaigns,
  ContactUs,
  Donate,
  Donations,
  Home,
  Products,
  ProductsBought,
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
        path="/ProductsBought/:userID"
        element={<ProductsBought />}
      ></Route>
      <Route
        path="/Twitts/:userID"
        element={<Twitts />}
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
        path="/ProductsBought"
        element={<CampaignProductsBought BusinessEmail={BusinessEmail} />}
      ></Route>
      <Route
        path="/AllProducts"
        element={<AllProducts />}
      ></Route>
    </Routes>
  );
};
