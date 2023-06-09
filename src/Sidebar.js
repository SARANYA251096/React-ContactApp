import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Contact <sup>admin</sup>
        </div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to={"/contacts/list"}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Contacts</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/dashboard"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
