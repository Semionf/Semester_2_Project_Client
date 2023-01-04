import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import { About, ContactUs, Home, Products } from "./components/Pages/main";
import { LoginButton } from "./components/buttons/loginButton";

export const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isLoading) {
    if (isAuthenticated) {
      return (
        <div className="Page">
          <NavBar></NavBar>
          <Routes>
            <Route
              path="/About"
              element={<About />}
            ></Route>
            <Route
              path="/ContactUs"
              element={<ContactUs />}
            ></Route>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/Products"
              element={<Products />}
            ></Route>
          </Routes>
        </div>
      );
    } else {
      return <LoginButton />;
    }
  } else {
    <h1>loading</h1>;
  }
};
