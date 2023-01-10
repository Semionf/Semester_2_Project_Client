import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  AllProducts,
  CampaignProductsBought,
  ContactUs,
  Donate,
  Home,
  Products,
  ProductsBought,
  Twitts,
} from "../Pages/main";
export const Routing = () => {
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
        element={<Products />}
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
        element={<Donate />}
      ></Route>
      <Route
        path="/ProductsBought"
        element={<CampaignProductsBought />}
      ></Route>
      <Route
        path="/AllProducts"
        element={<AllProducts />}
      ></Route>
    </Routes>
  );
};
