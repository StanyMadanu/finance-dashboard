import React from "react";
import CarouselBody from "./common/CarouselBody";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const AllTransactions = () => {
  return (
    <div className="transaction-carousel">
      <div
        id="transaction-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        // data-bs-ride="false"
      >
        <div className="transaction-carousel-header px-4 d-flex justify-content-between align-items-center mb-1">
          <h6 className="fw-bold">All Transactions</h6>
          <div className="transaction-carousel-indicators d-flex fs-18 gap-3">
            <p
              data-bs-target="#transaction-carousel"
              data-bs-slide="prev"
              aria-hidden="true"
            >
              <FaArrowLeftLong />
            </p>
            <p
              data-bs-target="#transaction-carousel"
              data-bs-slide="next"
              aria-hidden="true"
            >
              <FaArrowRightLong />
            </p>
          </div>
        </div>

        <CarouselBody />
      </div>
    </div>
  );
};

export default AllTransactions;
