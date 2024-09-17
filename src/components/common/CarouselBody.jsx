import React from "react";
import { HiOutlineArrowLongUp, HiOutlineArrowLongDown } from "react-icons/hi2";

const CarouselBody = () => {
  return (
    <div className="carousel-body">
      <div className="carousel-inner px-4">
        <div className="carousel-item active">
          <div className="d-flex flex-column gap-4">
            <h6 className="text-muted">This Week Summary</h6>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <div className="transaction-head-img">
                  <img
                    src="https://www.shutterstock.com/image-illustration/india-round-flag-icon-transparent-260nw-2503632319.jpg"
                    alt="inr"
                  />
                </div>

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

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://i.pinimg.com/736x/d5/0c/cb/d50ccbb13b971a1ffd2c50de40a16716.jpg"
                      alt="inr"
                    />
                  </div>
                  <div>
                    <h6 className="fw-bold">Hulu Subscription</h6>
                    <span className="text-muted text-capitalize">
                      streaming services
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    -3,100 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" checked />
                    <div class="slider down"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://clipart.info/images/ccovers/1590430872small-youtube-logo.png"
                      alt="inr"
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold text-capitalize">youtube payout</h6>
                    <span className="text-muted text-capitalize">
                      content creator earning
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    +210,000 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" />
                    <div class="slider"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZGZlZGJmMzktZDFjNS00NGVmLWFmMmMtNWE1NWE5N2IwNDNlLmpwZWc.webp"
                      alt="inr"
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold text-capitalize">college fee</h6>
                    <span className="text-muted text-capitalize">
                      personal expenses
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    -11,390 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" checked />
                    <div class="slider down"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="d-flex flex-column gap-4">
            <h6 className="text-muted">This Week Summary</h6>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <div className="transaction-head-img">
                  <img
                    src="https://www.shutterstock.com/image-illustration/india-round-flag-icon-transparent-260nw-2503632319.jpg"
                    alt="inr"
                  />
                </div>
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

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://i.pinimg.com/736x/d5/0c/cb/d50ccbb13b971a1ffd2c50de40a16716.jpg"
                      alt="inr"
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold">Hulu Subscription</h6>
                    <span className="text-muted text-capitalize">
                      streaming services
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    -3,100 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" checked />
                    <div class="slider down"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://clipart.info/images/ccovers/1590430872small-youtube-logo.png"
                      alt="inr"
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold text-capitalize">youtube payout</h6>
                    <span className="text-muted text-capitalize">
                      content creator earning
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    +210,000 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" />
                    <div class="slider"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZGZlZGJmMzktZDFjNS00NGVmLWFmMmMtNWE1NWE5N2IwNDNlLmpwZWc.webp"
                      alt="inr"
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold text-capitalize">college fee</h6>
                    <span className="text-muted text-capitalize">
                      personal expenses
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    -11,390 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" checked />
                    <div class="slider down"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="d-flex flex-column gap-4">
            <h6 className="text-muted">This Week Summary</h6>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <div className="transaction-head-img">
                  <img
                    src="https://www.shutterstock.com/image-illustration/india-round-flag-icon-transparent-260nw-2503632319.jpg"
                    alt="inr"
                  />
                </div>
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

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://i.pinimg.com/736x/d5/0c/cb/d50ccbb13b971a1ffd2c50de40a16716.jpg"
                      alt="inr"
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold">Hulu Subscription</h6>
                    <span className="text-muted text-capitalize">
                      streaming services
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    -3,100 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" checked />
                    <div class="slider down"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://clipart.info/images/ccovers/1590430872small-youtube-logo.png"
                      alt="inr"
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold text-capitalize">youtube payout</h6>
                    <span className="text-muted text-capitalize">
                      content creator earning
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    +210,000 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" />
                    <div class="slider"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="transaction-card-wrapper">
              <div className="transaction-card d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <div className="card-img">
                    <img
                      src="https://img.stablecog.com/insecure/256w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZGZlZGJmMzktZDFjNS00NGVmLWFmMmMtNWE1NWE5N2IwNDNlLmpwZWc.webp"
                      alt="inr"
                    />
                  </div>

                  <div>
                    <h6 className="fw-bold text-capitalize">college fee</h6>
                    <span className="text-muted text-capitalize">
                      personal expenses
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fw-bold">
                    -11,390 <span className="text-muted">INR</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" class="checkbox" checked />
                    <div class="slider down"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBody;
