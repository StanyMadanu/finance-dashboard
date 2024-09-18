import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Contact from "./common/Contact";
import { PiBellRingingBold } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";

const Layout = () => {
  return (
    <>
      <Sidebar />

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
              <div className="side-content px-5">
                <div className="profile-wrap py-5 d-flex gap-4 justify-content-end position-sticky">
                  <div className="notifications d-flex gap-3">
                    <span className="icon">
                      <BiMessageDetail />
                    </span>
                    <span className="icon">
                      <IoNotificationsOutline />
                    </span>
                  </div>
                  <div className="profile-img">
                    <img
                      src="https://static.vecteezy.com/ti/gratis-foton/p2/27571259-sot-pojke-och-flicka-3d-tecknad-serie-karaktar-gratis-fotona.jpg"
                      alt="profile-image"
                    />
                  </div>
                </div>
                <Contact />

                <div className="mt-3">
                  <span className="bell-icon fs-28 mb-2">
                    <PiBellRingingBold />
                  </span>
                  <h6 className="fw-bold text-capitalize">
                    it's your wife's birthday
                  </h6>
                  <p className="fw-bold">after 2 days</p>
                  <p className="fw-bold mt-2">Let's Plan for a big gift!</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="position-sticky">
            <Header />
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Layout;
