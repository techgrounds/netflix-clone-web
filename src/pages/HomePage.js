import React, { useEffect, useState } from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import FooterBrowserPage from "../components/FooterBrowserPage/FooterBrowserPage";
import Lane from "../components/Lane/Lane";
import "../components/Lane/Lane.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesResultsAsync } from "../redux/movies/movies.actions";

const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const allMoviesSelector = useSelector((state) => state.movies.allMovies);

  console.log(allMoviesSelector);

  useEffect(() => {
    dispatch(fetchMoviesResultsAsync());
  }, []);

  return (
    <>
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      {allMoviesSelector?.map((movieSet) => {
        return (
          <Lane
            laneTitle={movieSet.genre}
            movies={movieSet.movies}
            trailer={movieSet.trailer}
            key={movieSet.id}
          />
        );
      })}
      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
