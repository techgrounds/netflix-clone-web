import React from "react";
import ButtonRed from "../ButtonRed/ButtonRed";
import { NetflixLogo } from "./../Logos/NetflixLogo";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function LandingHeader({}) {
  return (
    <div className="landing-page-header">
      <div className="logo">
        <NetflixLogo />
      </div>
      <ButtonRed>
        <Link to="/home">Sign In</Link>
      </ButtonRed>
    </div>
  );
}