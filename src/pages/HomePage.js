import React from 'react';

import HomeHero from "../components/HomeHero/HomeHero";
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <div>Home Page</div>
      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
