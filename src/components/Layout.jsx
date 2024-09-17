import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Sidebar />

      <main className="main position-relative">
        <div className="main-wrapper">
          <div className="position-sticky">
            <Header />
          </div>
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
