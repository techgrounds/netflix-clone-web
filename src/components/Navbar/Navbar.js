import './Navbar.scss';
import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { useOnClickOutside } from './ClickOutsideHook';

//icons
import { NetflixLogo } from '../Logos/NetflixLogo';
import { IconNotification } from '../Icons/IconNotification';
import { IconCaretDown } from '../Icons/IconCaretDown';
import { IconPencil } from '../Icons/IconPencil';
import { IconAccount } from '../Icons/IconAccount';
import { IconQuestion } from '../Icons/IconQuestion';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const node = useRef();
  const point = useRef();
  const notificationsElement = useRef();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const submenu = () => {
    !dropdown ? setDropdown(true) : setDropdown(false);
  };
  const accountMenu = () => {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  };
  const notificationsDropdown = () => {
    !notifications ? setNotifications(true) : setNotifications(false);
  };

  let activeClassName = 'active-bold';

  useOnClickOutside(node, () => setDropdown(false));
  useOnClickOutside(point, () => setIsClicked(false));
  useOnClickOutside(notificationsElement, () => setNotifications(false));

  return (
    <header>
      <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <NavLink to="/" className="logo-link">
          <picture>
            <NetflixLogo />
          </picture>
        </NavLink>

        <ul className="primary-nav" ref={node}>
          <li className="navigation-menu" onClick={() => submenu()}>
            <button className="menu-trigger">Browse</button>

            {dropdown ? (
              <div className="sub-menu ">
                <div className="callout-arrow"></div>
                <div className="topbar"></div>
                <ul className="sub-menu-list">
                  <li className="sub-menu-item ">
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="sub-menu-item">
                    {/* <NavLink to="/genre"> */}
                    <NavLink
                      to="/genre"
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                    >
                      {/* Series */}
                      Genres
                    </NavLink>
                  </li>
                  <li className="sub-menu-item">
                    <NavLink
                      to="/search"
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                    >
                      Search
                      {/* Films */}
                    </NavLink>
                  </li>
                  {/* <li className="sub-menu-item">
                    <NavLink to="/home"
                       className={({ isActive }) =>
                       isActive ? activeClassName : undefined
                     }
                    >New &amp; Popular</NavLink>
                  </li>
                  <li className="sub-menu-item">
                    <NavLink to="/home"
                       className={({ isActive }) =>
                       isActive ? activeClassName : undefined
                     }
                    >My List</NavLink>
                  </li> */}
                </ul>
              </div>
            ) : (
              ''
            )}
          </li>
          <li className="navigation-tab current active">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navigation-tab">
            <NavLink
              to="/genre"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              {/* Series */}
              Genres
            </NavLink>
          </li>
          <li className="navigation-tab">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              {/* Films */}
              Search
            </NavLink>
          </li>
          {/* <li className="navigation-tab">
            <NavLink to="/home"
               className={({ isActive }) =>
               isActive ? activeClassName : undefined
             }
            >
              New &amp; Popular
            </NavLink>
          </li>
          <li className="navigation-tab">
            <NavLink to="/home" 
               className={({ isActive }) =>
               isActive ? activeClassName : undefined
             }
            >
              My List
            </NavLink>
          </li> */}
        </ul>

        <div className="secondary-nav">
          <div className="nav-element">
            <div className="searchBox">
              <SearchBar />
            </div>
          </div>
          <div className="nav-element">
            <span className="notifications-element" ref={notificationsElement}>
              <button
                className="notifications-menu"
                onClick={() => notificationsDropdown()}
              >
                <div className="notifications-icon">
                  <IconNotification />
                </div>
                {notifications ? <div className="callout-arrow"></div> : ''}
              </button>
              {notifications ? (
                <div className="sub-menu">
                  <div className="topbar"></div>
                  <ul className="sub-menu-list">
                    <li className="sub-menu-item">
                      <ul className="notifications-container">
                        <li className="notifications">
                          <div className="notifications-content">
                            <div className="image-text-notifications element">
                              <NavLink to="/" className="notifications-image">
                                <img
                                  className="title-card"
                                  src="https://images.unsplash.com/photo-1494342311068-0acb56cfa61d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                  alt="cat-project"
                                />
                              </NavLink>
                              <NavLink
                                to="/"
                                className="notifications-text element"
                              >
                                <div className="notifications-header">
                                  New Arrival
                                </div>
                                <div className="notifications-body">
                                  The Cat Project
                                </div>
                                <div className="notifications-age">
                                  <span className="relative-tim">
                                    {' '}
                                    2 days ago
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                        <li className="notifications">
                          <div className="notifications-content">
                            <div className="image-text-notifications element">
                              <NavLink to="/" className="notifications-image ">
                                <img
                                  className="title-card"
                                  src="https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                  alt="doggo"
                                />
                              </NavLink>
                              <NavLink
                                to="/"
                                className="notifications-text element"
                              >
                                <div className="notifications-header">
                                  New Arrival
                                </div>
                                <div className="notifications-body">
                                  Season 5
                                </div>
                                <div className="notifications-age">
                                  <span className="relative-tim"> Today</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                        <li className="notifications">
                          <div className="notifications-content">
                            <div className="image-text-notifications element">
                              <NavLink to="/" className="notifications-image">
                                <img
                                  className="title-card"
                                  src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                                  alt="monkey"
                                />
                              </NavLink>
                              <NavLink
                                to="/"
                                className="notifications-text element"
                              >
                                <div className="notifications-header">
                                  Now Available
                                </div>
                                <div className="notifications-body">
                                  MonkeyTime
                                </div>
                                <div className="notifications-age">
                                  <span className="relative-tim">
                                    {' '}
                                    4 days ago
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}
            </span>
          </div>
          <div className="nav-element" ref={point}>
            <div className="account-menu-item" onClick={() => accountMenu()}>
              <button className="account-dropdown-button">
                <NavLink to="" className="account-link">
                  <span className="profile-link">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt="img"
                      className="profile-icon"
                    />
                  </span>
                </NavLink>
                <span className={isClicked ? 'caret rotate' : ' caret'}>
                  <IconCaretDown />
                </span>
              </button>
              {isClicked ? (
                <div className="account-drop-down ">
                  <div className="callout-arrow"></div>
                  <ul className="sub-menu-list profiles">
                    <li className="sub-menu-item profile">
                      <div>
                        <NavLink to="" className="profile-link">
                          <div className="avatar-wrapper">
                            <img
                              className="profile-icon"
                              src="https://occ-0-1368-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                              alt=""
                            />
                          </div>
                          <span className="profile-name">Miki</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="sub-menu-item profile">
                      <div>
                        <NavLink to="" className="profile-link">
                          <div className="avatar-wrapper">
                            <img
                              className="profile-icon"
                              src="https://occ-0-1368-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                              alt=""
                            />
                          </div>
                          <span className="profile-name">Janou</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="sub-menu-item profile">
                      <div>
                        <NavLink to="" className="profile-link">
                          <div className="avatar-wrapper">
                            <img
                              className="profile-icon"
                              src="https://occ-0-1368-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                              alt=""
                            />
                          </div>
                          <span className="profile-name">Jens</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="sub-menu-item profile">
                      <div>
                        <NavLink to="" className="profile-link">
                          <div className="avatar-wrapper">
                            <img
                              className="profile-icon"
                              src="https://occ-0-1368-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                              alt=""
                            />
                          </div>
                          <span className="profile-name">Michael</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className="sub-menu-item profile-link">
                      <NavLink
                        to=""
                        className="sub-menu-link sub-menu-link-icon"
                      >
                        <IconPencil />
                        <span>Manage Profiles</span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="sub-menu-list responsive-links"></ul>

                  <ul className="account-links sub-menu-list">
                    <li className="sub-menu-item">
                      <NavLink
                        to=""
                        className="sub-menu-link sub-menu-link-icon"
                      >
                        <IconAccount />
                        <span>Account</span>
                      </NavLink>
                    </li>
                    <li className="sub-menu-item">
                      <NavLink
                        to=""
                        className="sub-menu-link sub-menu-link-icon"
                      >
                        <IconQuestion />
                        <span>Help Centre</span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="account-links sub-menu-list sign-out-links">
                    <li className="sub-menu-item">
                      <NavLink to="" className="sub-menu-link ">
                        Sign out of Netflix
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
