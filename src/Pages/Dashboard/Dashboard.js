import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navber from "../../Shared/Navber";
import DashboardSideBar from "./DashboardSideBar";

const Dashboard = () => {
  return (
    <div>
      <Navber />
      <DashboardSideBar>
        <Outlet />
      </DashboardSideBar>
      <Footer />
    </div>
  );
};

export default Dashboard;
