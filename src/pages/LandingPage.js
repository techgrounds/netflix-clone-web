import React from 'react';

import LandingHero from './../components/LandingHero/LandingHero';
import FooterLandingPage from '../components/FooterLandingPage/FooterLandingPage';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <LandingHero />
      <FooterLandingPage />
    </div>
  )
}

export default LandingPage
