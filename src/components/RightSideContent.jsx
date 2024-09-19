import React from "react";
import Contact from "./common/Contact";
import { PiBellRingingBold } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import bgShape1 from "../assets/images/dashboard/bg-shape1.png";

const RightSideContent = () => {
  return (
    <>
      <div className="side-content px-5">
        <div className="profile-wrap pt-4 pb-3 d-flex gap-4 justify-content-end position-sticky">
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

        <hr />

        <div className="events-wrapper mt-5 d-flex flex-column">
          <span className="bell-icon mb-2 fs-22">
            <PiBellRingingBold />
          </span>
          <h6 className="fw-bold text-capitalize">it's your wife's birthday</h6>
          <p className="fw-bold">after 2 days</p>
          <div className="lets-plan d-flex align-items-center justify-content-between">
            <p className="fw-bold mt-2">Let's Plan for a big gift!</p>
            <span className="d-flex align-items-center p-2 text-white">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideContent;
