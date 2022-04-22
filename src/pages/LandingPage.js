import React from "react";

import LandingHero from "./../components/LandingHero/LandingHero";
import FooterLandingPage from "../components/FooterLandingPage/FooterLandingPage";

import Loader from "../components/Loader";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <LandingHero />
      <Loader />
      <FooterLandingPage />
    </div>
  );
};

export default LandingPage;
