import React from "react";
import { IconWorld } from "../Icons/IconWorld";

import "./styles.scss";

function FooterSignin() {
  return (
    <div className="footer">
      <h4 className="footer-title">Questions? Call 0800-022-5173</h4>

      <div className="footer-links">
        <ul>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Cookie Preferences</a>
          </li>

          <li>
            <a href="/">Help centre</a>
          </li>
          <li>
            <a href="/">Corporate Information</a>
          </li>

          <li>
            <a href="/">Terms of Use</a>
          </li>

          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="container-select-lang" id="lang-switcher">
        <div data-ui-a className="container-ui">
          <label htmlFor="lang-switcher-select" className="ui-label"></label>
          <div className="selectArrowGlobe">
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
    </div>
  );
}

export default FooterSignin;
