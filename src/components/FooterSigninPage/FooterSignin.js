import React from "react";
import LanguageSelector from "../LanguagesSelector/LanguagesSelector";

import { useContext } from "react";
import { LangContext } from "../../redux/languages/languages.context";

import "./styles.scss";

function FooterSignin() {
  const { language } = useContext(LangContext);
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <h4 className="footer-title">
          {language === "EN" ? "Questions? Call 0800-022-5173" : "Vragen? Bel 0800-022-5173"}</h4>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/">
                {language === "EN" ? "FAQ" : "Veelgestelde vragen"}
              </a>
            </li>
            <li>
              <a href="/">
                {language === "EN" ? "Cookie Preferences" : "Cookievoorkeuren"}
              </a>
            </li>

            <li>
              <a href="/">
                {language === "EN" ? "Help centre" : "Helpcentrum"}
              </a>
            </li>
            <li>
              <a href="/">
                {language === "EN"
                  ? "Corporate Information"
                  : "Bedrijfsinformatie"}
              </a>
            </li>

            <li>
              <a href="/">
                {language === "EN" ? "Terms of Use" : "Gebruiksvoorwaarden"}
              </a>
            </li>

            <li>
              <a href="/">{language === "EN" ? "Privacy" : "Privacy"}</a>
            </li>
          </ul>
        </div>
        <div className="selectorContainer">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}

export default FooterSignin;
