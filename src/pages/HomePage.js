import React from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';
import Lane from '../components/Lane/Lane';
import '../components/Lane/Lane.scss';
import requests from '../requests';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Lane title="Tranding Now" fetchUrl={requests.fetchTrending} />
      <Lane
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Lane title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Lane title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
