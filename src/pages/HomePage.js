import React, { useEffect } from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';
import Lane from '../components/Lane/Lane';
import '../components/Lane/Lane.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesResultsAsync } from '../redux/movies/movies.actions';

const HomePage = () => {
  const allMovies = useSelector((state) => state.movies.allMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesResultsAsync());
  }, []);
  return (
    <>
      <Navbar />
      <HomeHero />
      {allMovies?.map((movieSet) => {
        console.log('MOVIESET', movieSet);
        return <Lane laneTitle={movieSet.category} movies={movieSet.results} />;
      })}

      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
