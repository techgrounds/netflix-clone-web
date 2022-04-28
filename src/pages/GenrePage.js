import React, { useEffect, useState } from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import FooterBrowserPage from '../components/FooterBrowserPage/FooterBrowserPage';
import Lane from '../components/Lane/Lane';
import GenreGrid from '../components/GenreGrid/GenreGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesResultsAsync } from '../redux/movies/movies.actions';
import { v4 as uuidv4 } from 'uuid';
const GenrePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const gridActive = useSelector((state) => state.genres.gridActive);
  const moviesByGenreData = useSelector((state) => state.genres.allGenres);
  const selectCurrentGenre = useSelector((state) => state.genres.selectGenre);
  const selectMovieSet = moviesByGenreData?.find(
    (movieSet) => movieSet.genre === selectCurrentGenre
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesResultsAsync());
  }, [dispatch]);
  return (
    <>
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
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
