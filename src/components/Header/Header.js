import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink
              className="header-link-style"
              to="shop"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-link-style"
              to="review"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Order Review
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link-style" to="inventory">
              {({ isActive }) => (
                <span style={isActive ? activeStyle : undefined}>
                  Manage Inventory here
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
