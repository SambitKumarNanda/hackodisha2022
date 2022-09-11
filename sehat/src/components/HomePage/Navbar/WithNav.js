import React from "react";
import { Outlet } from "react-router";
import Navbar from ".";

export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
