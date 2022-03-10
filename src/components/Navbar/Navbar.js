import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo-link">
          <picture>
            <img src="" alt="" className="logo" />
          </picture>
        </a>

        <ul className="primary-nav">
          <li className="navigation-menu">
            <a href="/" role="button" className="menu-trigger">
              Browse
              <span className="caret">▼</span>
            </a>

          </li>
          <li className="navigation-tab">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="navigation-tab">
            <a href="/" className="nav-link">
              Series
            </a>
          </li>
          <li className="navigation-tab">
            <a href="/" className="nav-link">
              Films
            </a>
          </li>
          <li className="navigation-tab">
            <a href="/" className="nav-link">
              New & Popular
            </a>
          </li>
          <li className="navigation-tab">
            <a href="/" className="nav-link">
              My List
            </a>
          </li>
        </ul>

        <div className="secondary-nav">
          <div className="nav-element">
            <div className="searchBox">
              <button className="searchTab">
                <span className="icon-search">🔍</span>
              </button>
            </div>
          </div>
          <div className="nav-element">
            <span className="notifications">
              <button className="notifications-menu">
                <span className="icon-button-notification">🔔</span>
              </button>
            </span>
          </div>
          <div className="nav-element">
            <div className="account-menu-item">
              <div className="account-dropdown-button">
                <a href="/" className="">
                  <span className="profile-link">
                    <img src="/" alt="profile-img" className="profile-icon" />
                  </span>
                </a>
                <span className="caret">▼</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
