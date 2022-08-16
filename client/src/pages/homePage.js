import React from "react";

import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Common PAge</h1>
      {/* Navbar */}
      <Outlet />
      {/* Footer */}
    </>
  );
};

export default Home;
