import React from "react";
import LandingHero from "./../components/LandingHero/LandingHero";
import FooterLandingPage from "../components/FooterLandingPage/FooterLandingPage";
// import Loader from "../components/Loader";



const LandingPage = () => {
  // document.readyState === "complete" ?
  return (
    <div className="landingPage">
      <LandingHero />
      <FooterLandingPage />
    </div>
  );
}


export default LandingPage;
