import React, { useRef, useState } from "react";
import ccblue from "../assets/images/dashboard/cc-blue.png";
import ccyellow from "../assets/images/dashboard/cc-yellow.png";
import { BsPlusLg } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineArrowLongUp, HiOutlineArrowLongDown } from "react-icons/hi2";

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");
  const uploadFile = useRef();

  const fileUpload = () => {
    uploadFile.current.click();
  };

  const handleChange = (e) => {
    const files = e.target.files;

    if (files && files[0]) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    } else {
      setFileName("No Selected File");
      setImage(null);
    }
  };

  return (
    <div className="row">
      <div className="col-xl-8 col-lg-8 col-md-12">
        <div className="row">
          <div className="col-xl-4 col-lg-4 justify-content-between">
            <div className="debit-card-wrapper">
              <img src={ccyellow} alt="debit-card" />
            </div>
            <div className="debit-card-wrapper my-3">
              <img src={ccblue} alt="debit-card" />
            </div>
            <div>
              <div className="fileUpload" onClick={fileUpload}>
                <input
                  type="file"
                  accept="image/*"
                  id="credit-card"
                  ref={uploadFile}
                  hidden
                  onChange={(e) => handleChange(e)}
                />
                {image ? (
                  <img src={image} alt="cc-image" />
                ) : (
                  <>
                    <BsPlusLg />{" "}
                    <span className="fs-7 mt-1">Add Another Card</span>
                  </>
                )}
              </div>
              <div className="d-flex gap-2 align-items-center fs-7">
                <span>{fileName}</span>
                {image === null ? (
                  ""
                ) : (
                  <MdOutlineDeleteOutline
                    onClick={() => {
                      setFileName("No Selected File");
                      setImage(null);
                    }}
                    style={{ cursor: "pointer" }}
                    className="text-danger fw-bold"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8">
            <div className="transaction-carousel">
              <div
                id="transaction-carousel"
                className="carousel slide"
                // data-bs-ride="carousel"
                data-bs-ride="false"
              >
                <div className="transaction-carousel-header d-flex justify-content-between align-items-center">
                  <h5 className="fw-semibold">All Transactions</h5>
                  <div className="transaction-carousel-indicators d-flex fs-9 gap-3">
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

                <div className="carousel-body">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex flex-column gap-4">
                        <h6 className="text-muted">This Week Summary</h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="https://www.shutterstock.com/image-illustration/india-round-flag-icon-transparent-260nw-2503632319.jpg"
                              alt="inr"
                              width="30"
                            />
                            <h3 className="fw-bold">
                              113,650 <span className="text-muted">INR</span>
                            </h3>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <span className="text-success">
                              <HiOutlineArrowLongUp />
                            </span>
                            <h6 className="fw-bold">
                              24,000 <span className="text-muted">INR</span>
                            </h6>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <span className="text-danger">
                              <HiOutlineArrowLongDown />
                            </span>
                            <h6 className="fw-bold">
                              5,324 <span className="text-muted">INR</span>
                            </h6>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="https://i.pinimg.com/736x/d5/0c/cb/d50ccbb13b971a1ffd2c50de40a16716.jpg"
                              alt="inr"
                              width="50"
                              height="50"
                              className="rounded"
                            />
                            <div>
                              <h6 className="fw-bold">Hulu Subscription</h6>
                              <span className="text-muted text-capitalize">
                                streaming services
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <h6 className="fw-bold">
                              -3,100 <span className="text-muted">PKR</span>
                            </h6>
                          </div>
                          <div className="d-flex align-items-center gap-2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <p>Lorem ipsum dolor sit amet, consectetur aset</p>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIyR0dDjPJC_wu73ZCkyZdurr_EYBGOVEUNbj_ajj4ngHFdiVPg-OkViv-Tu4tMWtR8I&usqp=CAU"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-12"></div>
    </div>
  );
};

export default Dashboard;
