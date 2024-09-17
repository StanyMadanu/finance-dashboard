import React from "react";
import Contact from "./common/Contact";
import AllTransactions from "./AllTransactions";
import BankCards from "./BankCards";
import { PiBellRingingBold } from "react-icons/pi";

const Dashboard = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-xl-9 col-lg-9 col-md-12 pe-5">
        <div className="row">
          <div className="col-xl-3 col-lg-3 justify-content-between">
            <BankCards />
          </div>

          <div className="col-xl-9 col-lg-9">
            <AllTransactions />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold text-capitalize">
                quick summary on your account
              </h5>
              <button className="text-capitalize text-muted">view all</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-12">
        <Contact />

        <div className="mt-5">
          <span className="bell-icon fs-28 mb-2">
            <PiBellRingingBold />
          </span>
          <h6 className="fw-bold text-capitalize">it's your wife's birthday</h6>
          <p className="fw-bold">after 2 days</p>
          <p className="fw-bold mt-2">Let's Plan for a big gift!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
