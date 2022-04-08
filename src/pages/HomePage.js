import React, { useEffect, useState } from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Navbar from '../components/Navbar/Navbar';
import Lane from '../components/Lane/Lane';
import '../components/Lane/Lane.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesResultsAsync } from '../redux/movies/movies.actions';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch();
  const allMoviesSelector = useSelector((state) => state.movies.allMovies);

  useEffect(() => {
    dispatch(fetchMoviesResultsAsync());
  }, []);

  return (
    <>
      <Navbar />
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      {allMoviesSelector?.map((movieSet) => {

        return (
          <Lane laneTitle={'lane title'} movies={movieSet} key={uuidv4()} />
        );
      })}
      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
