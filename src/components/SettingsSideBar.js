import React from "react";
import "./stylesheet/SettingsSideBar.css";
import { Link } from "react-router-dom";

const SettingsSideBar = () => {
  return (
    <div className="sidebar-div">
      <h5>Settings</h5>
      <ul className="settings-list">
        <li>
          <i className="fa-solid fa-user"></i>
          <b> Profile</b>
        </li>
        <li>
          <i className="bi bi-grid-fill"></i>
          <b> Featured Items</b>
        </li>
        <li>
          <i className="fa-solid fa-bell"></i>
          <b> Offers</b>
        </li>
        <li>
          <i class="bi bi-shield-fill-exclamation"></i>
          <b> Account Support</b>
        </li>
        <li>
          <i class="bi bi-reception-3"></i>
          <b> Earnings</b>
        </li>
      </ul>
    </div>
  );
};

export default SettingsSideBar;