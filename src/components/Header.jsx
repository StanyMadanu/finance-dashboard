import React from "react";
import { LuWallet } from "react-icons/lu";
import { TiArrowUnsorted } from "react-icons/ti";

const Header = () => {
  return (
    <section className="header d-flex justify-content-between align-items-center pt-4 pb-3 px-4">
      <h5 className="fw-bold mb-0 d-none d-sm-block">Good Evening Mikey!</h5>

      <div className="wallet d-flex gap-3">
        <div className="custom-select-wrapper fs-7 d-flex align-items-center">
          <select name="accounts" id="accounts" className="fw-bold ps-3 pe-5">
            <option value="personal">Personal Account</option>
            <option value="salary">Salary Account</option>
            <option value="savings">Savings Account</option>
            <option value="business">Business Account</option>
          </select>
          <span className="selector-icon">
            <TiArrowUnsorted />
          </span>
        </div>

        <span className="icon">
          <LuWallet />
        </span>
      </div>

      {/* <div className="profile-wrap d-flex gap-4">
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
      </div> */}
    </section>
  );
};

export default Header;
