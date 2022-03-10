import { useState } from "react";
import "./Navbar.scss";
import { NetflixLogo } from "../Logos/NetflixLogo";
import { IconNotification } from "../Icons/IconNotification";
import { debounce } from "lodash";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const searchInput = () => {
    console.log("click");
  };

  const submenu = (e) => {
    console.log(dropdown);
    !dropdown ? setDropdown(true) : setDropdown(false);
  };

  const accountMenu = (e) => {
    !isHovered ? setIsHovered(true) : setIsHovered(false);
  };

  const debouncedHandleMouseLeave = debounce(() => setIsHovered(false), 400);
  const debouncedHandleDropdown = debounce(() => setDropdown(false), 400);

  const handlOnMouseEnter = () => {
    setIsHovered(true);
    debouncedHandleMouseLeave.cancel();
  };
  const handlDropdown = () => {
    setDropdown(true);
    debouncedHandleDropdown.cancel();
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <picture>
            <NetflixLogo />
          </picture>
        </Link>

        <ul className="primary-nav">
          <li
            className="navigation-menu"
            onClick={() => submenu()}
            onMouseEnter={handlDropdown}
            onMouseLeave={debouncedHandleDropdown}
          >
            <Link to="" className="menu-trigger">
              Browse
            </Link>

            {dropdown ? (
              <div className="sub-menu ">
                <div className="callout-arrow"></div>
                <div className="topbar"></div>
                <ul className="sub-menu-list">
                  <li className="sub-menu-item">
                    <Link to="/" className="current active">
                      Home
                    </Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link to="">Series</Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link to="">Films</Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link to="">New &amp; Popular</Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link to="">My List</Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
          <li className="navigation-tab">
            <Link to="" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navigation-tab">
            <Link to="genre" className="nav-link">
              {/* Series */}
              Genres
            </Link>
          </li>
          <li className="navigation-tab">
            <Link to="/search" className="nav-link">
              {/* Films */}
              Search
            </Link>
          </li>
          <li className="navigation-tab">
            <Link to="" className="nav-link">
              New &amp; Popular
            </Link>
          </li>
          <li className="navigation-tab">
            <Link to="" className="nav-link">
              My List
            </Link>
          </li>
        </ul>

        <div className="secondary-nav">
          <div className="nav-element">
            <div className="searchBox">
              <button className="searchTab">
                <span className="search-icon" onClick={() => searchInput()}>
                  🔍
                </span>
              </button>
            </div>
          </div>
          <div className="nav-element">
            <span className="notifications">
              <button className="notifications-menu">
                <div className="notifications-icon">
                  <IconNotification />
                </div>
              </button>
            </span>
          </div>
          <div className="nav-element">
            <div
              className="account-menu-item"
              onClick={() => accountMenu()}
              onMouseEnter={handlOnMouseEnter}
              onMouseLeave={debouncedHandleMouseLeave}
            >
              <div className="account-dropdown-button">
                <Link to="" className="account-link">
                  <span className="profile-link">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt="img"
                      className="profile-icon"
                    />
                  </span>
                </Link>
                <span className="caret">▼</span>
              </div>
              {isHovered ? (
                <div className="account-drop-down ">
                  <div className="callout-arrow"></div>
                  <ul className="sub-menu-list profiles">
                    <li className="sub-menu-item profile">
                      <div>
                        <Link to="" className="profile-link">
                          <div className="avatar-wrapper">
                            <img
                              className="profile-icon"
                              src="https://occ-0-1368-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                              alt=""
                            />
                          </div>
                          <span className="profile-name">Miki</span>
                        </Link>
                      </div>
                    </li>
                    <li className="sub-menu-item profile">
                      <div>
                        <Link to="" className="profile-link">
                          <div className="avatar-wrapper">
                            <img
                              className="profile-icon"
                              src="https://occ-0-1368-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                              alt=""
                            />
                          </div>
                          <span className="profile-name">Miki</span>
                        </Link>
                      </div>
                    </li>
                    <li className="sub-menu-item profile">
                      <div>
                        <Link to="" className="profile-link">
                          <div className="avatar-wrapper">
                            <img
                              className="profile-icon"
                              src="https://occ-0-1368-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                              alt=""
                            />
                          </div>
                          <span className="profile-name">Miki</span>
                        </Link>
                      </div>
                    </li>
                    <li className="sub-menu-item profile">
                      <div>
                        <Link to="" className="profile-link">
                          <div className="avatar-wrapper">
                            <img
                              className="profile-icon"
                              src="https://occ-0-1368-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                              alt=""
                            />
                          </div>
                          <span className="profile-name">Miki</span>
                        </Link>
                      </div>
                    </li>
                    <li className="sub-menu-item profile-link">
                      <Link to="" className="sub-menu-link sub-menu-link-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="Hawkins-Icon Hawkins-Icon-Standard"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span>Manage Profiles</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="sub-menu-list responsive-links"></ul>

                  <ul className="account-links sub-menu-list">
                    <li className="sub-menu-item">
                      <Link to="" className="sub-menu-link sub-menu-link-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="Hawkins-Icon Hawkins-Icon-Standard"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span>Account</span>
                      </Link>
                    </li>
                    <li className="sub-menu-item">
                      <Link to="" className="sub-menu-link sub-menu-link-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="Hawkins-Icon Hawkins-Icon-Standard"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span>Help Centre</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="account-links sub-menu-list sign-out-links">
                    <li className="sub-menu-item">
                      <Link to="" className="sub-menu-link ">
                        Sign out of Netflix
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
