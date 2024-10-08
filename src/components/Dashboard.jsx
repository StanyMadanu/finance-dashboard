import React from "react";
import AllTransactions from "./AllTransactions";
import BankCards from "./BankCards";
import LineChartComponent from "./common/LineChartComponent";
import ExpensesChart from "./common/ExpensesChart";
import SubscriptionChart from "./common/SubscriptionChart";
import DoughnutChart from "./common/DoughnutChart";

const Dashboard = () => {
  return (
    <>
      <div className="row justify-content-evenly gap-3">
        <div className="col-xl-3 col-lg-3 col-md-12 justify-content-between d-flex flex-row flex-lg-column gap-2">
          <BankCards />
        </div>

        <div className="col-xl-8 col-lg-8">
          <AllTransactions />
        </div>
      </div>

      <div className="row mt-5 px-4 mt-md-4">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <div className="d-flex justify-content-between mb-3">
            <h6 className="fw-bold text-capitalize">
              quick summary on your account
            </h6>
            <button className="text-capitalize text-muted">view all</button>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10 col-12 mb-3 mb-lg-0">
          <div className="chart-card">
            <LineChartComponent />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10 col-12 mb-3 mb-lg-0">
          <div className="chart-card">
            <ExpensesChart />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10 col-12 mb-3 mb-lg-0">
          <div className="chart-card">
            <SubscriptionChart />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10 col-12 mb-3 mb-lg-0">
          <div className="chart-card">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
