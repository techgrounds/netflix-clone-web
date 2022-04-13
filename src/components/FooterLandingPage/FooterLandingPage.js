import React from "react";
import "./styles.scss";
import LanguagesSelector from "../LanguagesSelector/LanguagesSelector";

import { useContext } from "react";
import { LangContext } from "../../redux/languages/languages.context";

function FooterLandingPage() {
  const { language } = useContext(LangContext);

  return (
    <footer className="footer-landingpage-wrapper">
      <div className="footer-content">
        <p className="footer-top">
          {language === "EN" ? "Questions? Call" : "Vragen? Bel"}
          <a className="footer-top-call" href="">
            0800-022-9647
          </a>
        </p>
        <ul className="box-footer-links">
          <li className="item-footer-link">
            <a href="">{language === "EN" ? "FAQ" : "Veelgestelde vragen"}</a>
          </li>
          <li className="item-footer-link">
            <a href="">{language === "EN" ? "Help Centre" : "Helpcentrum"}</a>
          </li>
          <li className="item-footer-link">
            <a href="">{language === "EN" ? "Account" : "Account"}</a>
          </li>
          <li className="item-footer-link">
            <a href="">{language === "EN" ? "Media Centre" : "Mediacenter"}</a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN"
                ? "Investor Relations"
                : "Relaties met investeerders"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">{language === "EN" ? "Jobs" : "Vacatures"}</a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN"
                ? "Redeem gift cards"
                : "Cadeaubonnen gebruiken"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN" ? "Buy gift cards" : "Cadeaubonnen kopen"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN"
                ? "Ways to Watch"
                : "Hoe kun je Netflix kijken?"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN" ? "Terms of Use" : "Gebruiksvoorwaarden"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">{language === "EN" ? "Privacy" : "Privacy"}</a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN" ? "Cookie Preferences" : "Cookievoorkeuren"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN" ? "Corporate Information" : "Bedrijfsgegevens"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN" ? "Contact Us" : "Contact opnemen"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">{language === "EN" ? "Speed Test" : "Snelheidstest"}</a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN" ? "Legal Notices" : "Wettelijke bepalingen"}
            </a>
          </li>
          <li className="item-footer-link">
            <a href="">
              {language === "EN" ? "Only on Netflix" : "Alleen op Netflix"}
            </a>
          </li>
        </ul>
        <div className="footerLanguageSelect">
          <LanguagesSelector />
        </div>
        <p>{language === "EN" ? "Neflix Netherlands" : "Netflix Nederland"}</p>
      </div>
    </footer>
  );
}

export default FooterLandingPage;
