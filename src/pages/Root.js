import React from "react";

import { Outlet } from "react-router-dom";

import MainNavigation from "components/UI/Navigation/MainNavigation/MainNavigation";
import BottomNavigation from "components/UI/Navigation/BottomNavigation/BottomNavigation";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <BottomNavigation />
    </>
  );
};

export default RootPage;
