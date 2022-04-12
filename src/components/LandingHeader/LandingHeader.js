import React from "react";

import { useContext } from "react";
import { LangContext } from "../../redux/languages/languages.context";

import LanguagesSelector from "../LanguagesSelector/LanguagesSelector";
import ButtonRed from "../ButtonRed/ButtonRed";
import { NetflixLogo } from "./../Logos/NetflixLogo";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function LandingHeader({}) {
  const { language } = useContext(LangContext);

  return (
    <div className="landing-page-header">
      <div className="logo">
        <NetflixLogo />
      </div>
      <div className="button-container">
        <LanguagesSelector />
        <ButtonRed>
          <Link to="/home">{language === "EN" ? "Sign In" : "Inloggen"}</Link>
        </ButtonRed>
      </div>
    </div>
  );
}
