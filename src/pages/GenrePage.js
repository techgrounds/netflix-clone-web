import React, { useEffect, useState } from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import FooterBrowserPage from "../components/FooterBrowserPage/FooterBrowserPage";
import Lane from "../components/Lane/Lane";
import "../components/Lane/Lane.scss";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { fetchGenresResultsAsync } from "../redux/genres/genres.actions";
import { GenreGrid } from "../components/GenreGrid/GenreGrid";
import { genreGridActive } from "../redux/genres/genres.actions";

const GenrePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const selectCurrentGenre = useSelector((state) => state.genres.selectGenre);
  const gridActive = useSelector((state) => state.genres.gridActive);
  const moviesByGenreData = useSelector((state) => state.genres.allGenres);
  const movieData = useSelector((state) => state.movies.movie);

  console.log("moviesByGenreData ", moviesByGenreData);
  console.log("movieData :", movieData);

  useEffect(() => {
    dispatch(fetchGenresResultsAsync());
    dispatch(genreGridActive(false));

    // return () => dispatch(genreGridActive())
  }, [dispatch]);

  const selectMovieSet = moviesByGenreData?.find(
    (movieSet) => movieSet.genre === selectCurrentGenre
  );
  console.log("selectMovieSet ", selectMovieSet);

  return (
    <>
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        movieData={movieData}
      />

      {gridActive
        ? selectMovieSet?.movies && (
            <GenreGrid
              genreTitle={selectMovieSet.genre}
              moviesByGenreData={selectMovieSet?.movies}
            />
          )
        : moviesByGenreData?.map((movieSet) => {
            return (
              <Lane
                laneTitle={movieSet.genre}
                movies={movieSet.movies}
                trailer={movieSet.trailer}
                key={uuidv4()}
                setIsVideoPlaying={setIsVideoPlaying}
              />
            );
          })}

      <FooterBrowserPage />
    </>
  );
};

export default GenrePage;
