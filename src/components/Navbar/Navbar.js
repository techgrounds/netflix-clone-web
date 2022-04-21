import './Navbar.scss'
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { useOnClickOutside } from './ClickOutsideHook'

//language
import { useContext } from 'react'
import { LangContext } from '../../redux/languages/languages.context'

//icons
import { NetflixLogo } from '../Logos/NetflixLogo'
import { IconNotification } from '../Icons/IconNotification'
import { IconCaretDown } from '../Icons/IconCaretDown'
import { IconPencil } from '../Icons/IconPencil'
import { IconAccount } from '../Icons/IconAccount'
import { IconQuestion } from '../Icons/IconQuestion'
import Jens from '../../assets/images/jens.jpg'
import Zico from '../../assets/images/zico.jpg'
import Michael from '../../assets/images/michael.jpg'
import Roibin from '../../assets/images/roibin.png'
import Fatos from '../../assets/images/fatos.webp'
import Janou from '../../assets/images/janou.jpg'
import Miki from '../../assets/images/miki.jpg'
import Alfi from '../../assets/images/alfiya.jpg'
import Wesley from '../../assets/images/wesley.jpg'
import Carolyn from '../../assets/images/carolyn.webp'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const node = useRef()
  const point = useRef()
  const notificationsElement = useRef()
  const { language } = useContext(LangContext)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const submenu = () => {
    !dropdown ? setDropdown(true) : setDropdown(false)
  }
  const accountMenu = () => {
    !isClicked ? setIsClicked(true) : setIsClicked(false)
  }
  const notificationsDropdown = () => {
    !notifications ? setNotifications(true) : setNotifications(false)
  }

  let activeClassName = 'active-bold'

  useOnClickOutside(node, () => setDropdown(false))
  useOnClickOutside(point, () => setIsClicked(false))
  useOnClickOutside(notificationsElement, () => setNotifications(false))

  return (
    <header>
      <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <NavLink to='/' className='logo-link'>
          <picture>
            <NetflixLogo />
          </picture>
        </NavLink>

        <ul className='primary-nav' ref={node}>
          <li className='navigation-menu' onClick={() => submenu()}>
            <button className='menu-trigger'>
              {language === 'EN' ? 'Browse' : 'Bladeren'}
            </button>

            {dropdown ? (
              <div className='sub-menu '>
                <div className='callout-arrow'></div>
                <div className='topbar'></div>
                <ul className='sub-menu-list'>
                  <li className='sub-menu-item '>
                    <NavLink
                      to='/home'
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }>
                      {language === 'EN' ? 'Home' : 'Homepagina'}
                    </NavLink>
                  </li>
                  <li className='sub-menu-item'>
                    {/* <NavLink to="/genre"> */}
                    <NavLink
                      to='/genre'
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }>
                      {/* Series */}
                      Genres
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
          <li className='navigation-tab current active'>
            <NavLink
              to='/home'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              {language === 'EN' ? 'Home' : 'Homepagina'}
            </NavLink>
          </li>
          <li className='navigation-tab'>
            <NavLink
              to='/genre'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>
              {/* Series */}
              Genres
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

        <div className='secondary-nav'>
          <div className='nav-element'>
            <div className='searchBox'>
              <SearchBar />
            </div>
          </div>
          <div className='nav-element'>
            <span className='notifications-element' ref={notificationsElement}>
              <button
                className='notifications-menu'
                onClick={() => notificationsDropdown()}>
                <div className='notifications-icon'>
                  <IconNotification />
                </div>
                {notifications ? <div className='callout-arrow'></div> : ''}
              </button>
              {notifications ? (
                <div className='sub-menu'>
                  <div className='topbar'></div>
                  <ul className='sub-menu-list'>
                    <li className='sub-menu-item'>
                      <ul className='notifications-container'>
                        <li className='notifications'>
                          <div className='notifications-content'>
                            <div className='image-text-notifications element'>
                              <NavLink to='/' className='notifications-image'>
                                <img
                                  className='title-card'
                                  src='https://images.unsplash.com/photo-1494342311068-0acb56cfa61d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                                  alt='cat-project'
                                />
                              </NavLink>
                              <NavLink
                                to='/'
                                className='notifications-text element'>
                                <div className='notifications-header'>
                                  {language === 'EN'
                                    ? 'New Arrival'
                                    : 'Nieuw op Netflix'}
                                </div>
                                <div className='notifications-body'>
                                  The Cat Project
                                </div>
                                <div className='notifications-age'>
                                  <span className='relative-tim'>
                                    {' '}
                                    {language === 'EN'
                                      ? '2 days ago'
                                      : '2 dagen geleden'}
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                        <li className='notifications'>
                          <div className='notifications-content'>
                            <div className='image-text-notifications element'>
                              <NavLink to='/' className='notifications-image '>
                                <img
                                  className='title-card'
                                  src='https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                                  alt='doggo'
                                />
                              </NavLink>
                              <NavLink
                                to='/'
                                className='notifications-text element'>
                                <div className='notifications-header'>
                                  {language === 'EN'
                                    ? 'New Arrival'
                                    : 'Nieuw op Netflix'}
                                </div>
                                <div className='notifications-body'>
                                  {language === 'EN' ? 'Season 5' : 'Seizoen 5'}
                                </div>
                                <div className='notifications-age'>
                                  <span className='relative-tim'>
                                    {language === 'EN' ? 'Today' : 'Vandaag'}
                                  </span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                        <li className='notifications'>
                          <div className='notifications-content'>
                            <div className='image-text-notifications element'>
                              <NavLink to='/' className='notifications-image'>
                                <img
                                  className='title-card'
                                  src='https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
                                  alt='monkey'
                                />
                              </NavLink>
                              <NavLink
                                to='/'
                                className='notifications-text element'>
                                <div className='notifications-header'>
                                  {language === 'EN'
                                    ? 'Now Available'
                                    : 'Nu te zien'}
                                </div>
                                <div className='notifications-body'>
                                  MonkeyTime
                                </div>
                                <div className='notifications-age'>
                                  <span className='relative-tim'>
                                    {' '}
                                    {language === 'EN'
                                      ? '4 days ago'
                                      : '4 dagen geleden'}
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
          <div className='nav-element' ref={point}>
            <div className='account-menu-item' onClick={() => accountMenu()}>
              <button className='account-dropdown-button'>
                <NavLink to='' className='account-link'>
                  <span className='profile-link'>
                    <img
                      src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                      alt='img'
                      className='profile-icon'
                    />
                  </span>
                </NavLink>
                <span className={isClicked ? 'caret rotate' : ' caret'}>
                  <IconCaretDown />
                </span>
              </button>
              {isClicked ? (
                <div className='account-drop-down '>
                  <div className='callout-arrow'></div>
                  <ul className='sub-menu-list profiles'>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Miki}
                              alt='Miki'
                            />
                          </div>
                          <span className='profile-name'>Miki</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Carolyn}
                              alt='Carolyn'
                            />
                          </div>
                          <span className='profile-name'>Carolyn</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Janou}
                              alt='Janou'
                            />
                          </div>
                          <span className='profile-name'>Janou</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Jens}
                              alt='Jens'
                              height='12px'
                            />
                          </div>
                          <span className='profile-name'>Jens</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Michael}
                              alt='Michael'
                            />
                          </div>
                          <span className='profile-name'>Michael</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Roibin}
                              alt='Roibin'
                            />
                          </div>
                          <span className='profile-name'>Roibin</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Fatos}
                              alt='Fatos'
                            />
                          </div>
                          <span className='profile-name'>Fatos</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Zico}
                              alt='Zico'
                            />
                          </div>
                          <span className='profile-name'>Zico</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Alfi}
                              alt='Alfi'
                            />
                          </div>
                          <span className='profile-name'>Alfi</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile'>
                      <div>
                        <NavLink to='' className='profile-link'>
                          <div className='avatar-wrapper'>
                            <img
                              className='profile-icon custom-profile-icon'
                              src={Wesley}
                              alt='Wesley'
                            />
                          </div>
                          <span className='profile-name'>Wesley</span>
                        </NavLink>
                      </div>
                    </li>
                    <li className='sub-menu-item profile-link'>
                      <NavLink
                        to=''
                        className='sub-menu-link sub-menu-link-icon'>
                        <IconPencil />
                        <span>
                          {language === 'EN'
                            ? 'Manage Profiles'
                            : 'Profielen beheren'}
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className='sub-menu-list responsive-links'></ul>

                  <ul className='account-links sub-menu-list'>
                    <li className='sub-menu-item'>
                      <NavLink
                        to=''
                        className='sub-menu-link sub-menu-link-icon'>
                        <IconAccount />
                        <span>{language === 'EN' ? 'Account' : 'Account'}</span>
                      </NavLink>
                    </li>
                    <li className='sub-menu-item'>
                      <NavLink
                        to=''
                        className='sub-menu-link sub-menu-link-icon'>
                        <IconQuestion />
                        <span>
                          {language === 'EN' ? 'Help Centre' : 'Helpcentrum'}
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className='account-links sub-menu-list sign-out-links'>
                    <li className='sub-menu-item'>
                      <NavLink to='' className='sub-menu-link '>
                        {language === 'EN'
                          ? 'Sign out of Netflix'
                          : 'Uitloggen'}
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
  )
}

export default Navbar
