import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Components/Navbar";

const Layout = () => {
  let locaton = useLocation();
  let hideNavbar = locaton.pathname == "/play";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
