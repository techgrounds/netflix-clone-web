import React from "react";
import "./Navbar.scss";

const Navbar = () => {


const searchInput = () => {
  console.log("click")
}

  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo-link">
          <picture>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt=""
              className="logo"
            />
          </picture>
        </a>

        <ul className="primary-nav">
          <li className="navigation-menu">
            <a href="/" role="button" className="menu-trigger">
              Browse
              <span className="caret">▼</span>
            </a>

            <div className="sub-menu">
              
              </div>

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
                <span className="icon-search" onClick={() => searchInput()}>🔍</span>
              </button>
            </div>
          </div>
          <div className="nav-element">
            <span className="notifications">
              <button className="notifications-menu">
                <span className="icon-button-notification">
                  
                  🔔</span>
              </button>
            </span>
          </div>
          <div className="nav-element">
            <div className="account-menu-item">
              <div className="account-dropdown-button">
                <a href="/" className="account-link">
                  <span className="profile-link">
                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="img" className="profile-icon" />
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
