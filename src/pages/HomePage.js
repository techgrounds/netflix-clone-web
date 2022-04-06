import React, { useEffect } from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';
import Lane from '../components/Lane/Lane';
import '../components/Lane/Lane.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesResultsAsync } from '../redux/movies/movies.actions';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  const dispatch = useDispatch();
  const allMoviesSelector = useSelector((state) => state.movies.allMovies);
  const allMovies = allMoviesSelector?.map((movieSet) => {
    return movieSet.results
      .map((movie) =>
        !movie.backdrop_path
          ? undefined
          : {
              key: uuidv4(),
              title: movie.title,
              id: movie.backdrop_path,
            }
      )
      .filter((x) => x);
  });

  useEffect(() => {
    dispatch(fetchMoviesResultsAsync());
  }, []);
  return (
    <>
      <Navbar />
      <HomeHero />
      {allMovies?.map((movieSet) => {
        return (
          <Lane laneTitle={'lane title'} movies={movieSet} key={uuidv4()} />
        );
      })}

      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
