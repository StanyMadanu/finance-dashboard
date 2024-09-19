import React from "react";
import Header from "./Header";
import RightSideContent from "./RightSideContent";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <main className="main position-relative">
      <div className="main-wrapper">
        <div className="row justify-content-between">
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="main-content">
              <Header />
              <Outlet />
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-4 col-md-12"
            style={{ backgroundColor: "#f6f5fa" }}
          >
            <RightSideContent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
