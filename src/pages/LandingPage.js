import React from "react";

import LandingHero from "./../components/LandingHero/LandingHero";
import FooterLandingPage from "../components/FooterLandingPage/FooterLandingPage";

import MiniLoader from "../components/Loader/MiniLoader";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <LandingHero />
      <MiniLoader  size={60}/>


      <FooterLandingPage />
    </div>
  );
};

export default LandingPage;
