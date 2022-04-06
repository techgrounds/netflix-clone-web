import { moviesActionTypes } from './movies.types';
import requests from '../../requests';
import axios from '../../axiosInstance';
import { v4 as uuidv4 } from 'uuid';

export const fetchMoviesResultsRequest = () => ({
  type: moviesActionTypes.FETCH_MOVIES_RESULTS_REQUEST,
});

export const fetchMoviesResultsSuccess = (allMovies) => ({
  type: moviesActionTypes.FETCH_MOVIES_RESULTS_SUCCESS,
  payload: allMovies,
});

export const fetchSingleMovie = (movie) => ({
  type: moviesActionTypes.FETCH_SINGLE_MOVIE,
  payload: movie,
});

export const fetchMoviesResultsFailure = (errorMessage) => ({
  type: moviesActionTypes.FETCH_MOVIES_RESULTS_FAILURE,
  payload: errorMessage,
});

export const fetchMoviesResultsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesResultsRequest());

    try {
      const request = await axios.get(requests.fetchDiscover);

      const allMoviesExcluding = request.data
        .filter((x, i) => (i ? true : false))
        .map((movieSet) => {
          return movieSet.results
            .map((movie) =>
              !movie.backdrop_path
                ? undefined
                : {
                    key: uuidv4(),
                    title: movie.title,
                    image: movie.backdrop_path,
                  }
            )
            .filter((x) => x);
        });

      dispatch(fetchMoviesResultsSuccess(allMoviesExcluding));
      // console.log('ALL MOVIES EX', allMoviesExcluding);
      const randomMovieSet =
        Math.floor(Math.random() * (allMoviesExcluding.length - 1)) + 1;
      // console.log('RANDOM MOVIE', randomMovieSet);
      const movies = allMoviesExcluding[randomMovieSet];

      const selectRandomMovie = Math.floor(Math.random() * movies.length - 1);

      const singleMovie = movies[selectRandomMovie];

      dispatch(fetchSingleMovie(singleMovie));
    } catch (err) {
      dispatch(fetchMoviesResultsFailure(err.message));
    }
  };
};
