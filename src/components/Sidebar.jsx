import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { GoCreditCard } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoSettingsOutline, IoGiftOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const navItems = [
    {
      icon: <RiHome2Line />,
      title: "dashboard",
    },

    {
      icon: <GoCreditCard />,
      title: "cards",
    },
    {
      icon: <GrTransaction />,
      title: "transactions",
    },
    {
      icon: <TbBrandGoogleAnalytics />,
      title: "analytics",
    },
    {
      icon: <IoGiftOutline />,
      title: "coupons",
    },
    {
      icon: <IoSettingsOutline />,
      title: "settings",
    },
    {
      icon: <MdOutlineContactSupport />,
      title: "support",
    },
  ];

  const handleActive = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="navigation d-flex align-items-center position-absolute">
      <div className="sidebar-wrapper px-3 py-5 d-flex flex-column gap-4">
        {navItems.map((navItem, index) => (
          <div
            key={index}
            className={`sidebar-link ${activeLink === index ? "active" : ""}`}
            onClick={() => handleActive(index)}
          >
            <Link to={navItem.title} className="fs-10 fw-bold">
              {navItem.icon}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
