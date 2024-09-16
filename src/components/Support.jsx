import React from "react";
import { Link, Outlet } from "react-router-dom";

const Support = () => {
  return (
    <div>
      <h1>Support</h1>

      <Link to="chat">Chat Support</Link>
      <Link to="call">Call Support</Link>

      <Outlet />
    </div>
  );
};

export default Support;
