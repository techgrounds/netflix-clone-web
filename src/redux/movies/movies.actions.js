import { moviesActionTypes } from './movies.types';
import requests from '../../requests';
import axios from '../../axiosInstance';

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

      const allMoviesExcluding = request.data.filter((x, i) =>
        i ? true : false
      );

      dispatch(fetchMoviesResultsSuccess(allMoviesExcluding));
      // console.log('ALL MOVIES EX', allMoviesExcluding);
      const randomMovieSet =
        Math.floor(Math.random() * (allMoviesExcluding.length - 1)) + 1;
      // console.log('RANDOM MOVIE', randomMovieSet);
      const movies = allMoviesExcluding[randomMovieSet].results;

      const selectRandomMovie = Math.floor(Math.random() * movies.length - 1);

      const singleMovie = movies[selectRandomMovie];

      dispatch(fetchSingleMovie(singleMovie));
    } catch (err) {
      dispatch(fetchMoviesResultsFailure(err.message));
    }
  };
};
