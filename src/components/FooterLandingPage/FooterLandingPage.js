import React from "react";
import "./styles.scss";
import { IconWorld } from "../Icons/IconWorld";
//import { IconCaretDown } from "../Icons/IconCaretDown";
import LanguagesSelector from "../LanguagesSelector/LanguagesSelector";

function FooterLandingPage() {
  return (
    // <div className="card-container">
      <footer className="footer-landingpage-wrapper">
        <div className="footer-content">
          <p className="footer-top">
            Questions? Call
            <a className="footer-top-call" href="">
              0800-022-9647
            </a>
          </p>
          <ul className="box-footer-links">
            <li className="item-footer-link">
              <a href="">FAQ</a>
            </li>
            <li className="item-footer-link">
              <a href="">Help Centre</a>
            </li>
            <li className="item-footer-link">
              <a href="">Account</a>
            </li>
            <li className="item-footer-link">
              <a href="">Media Centre</a>
            </li>
            <li className="item-footer-link">
              <a href="">Investor Relations</a>
            </li>
            <li className="item-footer-link">
              <a href="">Jobs</a>
            </li>
            <li className="item-footer-link">
              <a href="">Redeem gift cards</a>
            </li>
            <li className="item-footer-link">
              <a href="">Buy gift cards</a>
            </li>
            <li className="item-footer-link">
              <a href="">Ways to Watch</a>
            </li>
            <li className="item-footer-link">
              <a href="">Terms of Use</a>
            </li>
            <li className="item-footer-link">
              <a href="">Privacy</a>
            </li>
            <li className="item-footer-link">
              <a href="">Cookie Preferences</a>
            </li>
            <li className="item-footer-link">
              <a href="">Corporate Information</a>
            </li>
            <li className="item-footer-link">
              <a href="">Contact Us</a>
            </li>
            <li className="item-footer-link">
              <a href="">Speed Test</a>
            </li>
            <li className="item-footer-link">
              <a href="">Legal Notices</a>
            </li>
            <li className="item-footer-link">
              <a href="">Only on Netflix</a>
            </li>
          </ul>
          <div className="footerLanguageSelect">
            <LanguagesSelector />
          </div>
          {/*
          <div className="container-select-lang" id="lang-switcher">
            <div data-ui-a className="container-ui">
              <label
                htmlFor="lang-switcher-select"
                className="ui-label"
              ></label>
            <div className="selectArrowGlobe-footerlandingpage">
                <IconWorld />
                <select
                  className="ui-select"
                  name="Nederlands"
                  placeholder="language-switcher"
                  id=""
                >
                  <option value="">English</option>
                  <option value="">Nederlands</option>
                </select>
              </div>
            </div>
          </div>
  */}    
          <p>Neflix Netherlands</p>
        </div>
      </footer>
    // </div>
  );
}

export default FooterLandingPage;
