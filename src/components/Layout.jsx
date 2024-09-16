import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Sidebar />

      <main className="main">
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
