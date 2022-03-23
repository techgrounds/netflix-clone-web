import React from 'react';
import HomeHero from "../components/HomeHero/HomeHero";
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';
import Lane from "../components/Lane/Lane"
import { LaneItem } from '../components/Lane/LaneItem';
import movies from "../movies.json";
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  const laneMovie = movies && movies.map((movie) => {
    return (
    <LaneItem key={uuidv4()}>
      <img src={require(`../assets/mockup_images/${movie.id}`)}
      alt={movie.title}
      className="movie-image" />
    </LaneItem>)
    } )

  return (
    <>
      <Navbar />
      <HomeHero />
      <Lane>
        {laneMovie}
      </Lane>
      {/* <Lane>
        {laneMovie}
      </Lane> */}
      <FooterBrowserPage />
    </>
  );
};

export default HomePage;