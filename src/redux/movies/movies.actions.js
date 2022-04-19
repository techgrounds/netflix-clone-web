import { moviesActionTypes } from "./movies.types";
import requests from "../../requests";
import axios from "../../axiosInstance";
import { transformMovieData } from "./movies.helpers";

export const fetchMoviesResultsRequest = () => ({
  type: moviesActionTypes.FETCH_MOVIES_RESULTS_REQUEST,
});

export const fetchMoviesResultsSuccess = (allMovies) => ({
  type: moviesActionTypes.FETCH_MOVIES_RESULTS_SUCCESS,
  payload: allMovies,
});

export const saveMovieDetails = (movieDetails) => ({
  type: moviesActionTypes.FETCH_MOVIE_DETAILS,
  payload: movieDetails,
});

export const fetchSingleMovie = (movie) => ({
  type: moviesActionTypes.FETCH_SINGLE_MOVIE,
  payload: movie,
});

export const saveHeroMovie = (movie) => ({
  type: moviesActionTypes.SAVE_HERO_MOVIE,
  payload: movie,
});
export const fetchMoviesResultsFailure = (errorMessage) => ({
  type: moviesActionTypes.FETCH_MOVIES_RESULTS_FAILURE,
  payload: errorMessage,
});

export const movieInfoModalToggle = (bool) => ({
  type: bool
    ? moviesActionTypes.MOVIE_INFO_MODAL_OPEN
    : moviesActionTypes.MOVIE_INFO_MODAL_CLOSE,
  payload: bool,
});

export const fetchMovieDetailsAsync = (id) => {
  return async (dispatch) => {
    try {
      const requestDetails = await axios.get(
        `${requests.fetchDiscover}/movie?id=${id}`
      );
      const movieDetails = requestDetails.data;

      console.log("MOVIEDETAILS", movieDetails);

      dispatch(saveMovieDetails(movieDetails));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMoviesResultsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesResultsRequest());

    try {
      const request = await axios.get(requests.fetchDiscover);
      console.log("REQUEST", request);

      const allMovies = transformMovieData(request.data);

      dispatch(fetchMoviesResultsSuccess(allMovies));

      const randomMovieSet =
        Math.floor(Math.random() * (allMovies.length - 1)) + 1;
      const movies = allMovies[randomMovieSet].movies;

      const selectRandomMovie = Math.floor(Math.random() * movies.length - 1);

      const singleMovie = movies[selectRandomMovie];

      dispatch(saveHeroMovie(singleMovie));
    } catch (err) {
      dispatch(fetchMoviesResultsFailure(err.message));
    }
  };
};

/////////////
//REMOVE NULL FROM LINK!
// let backdropUrl = movie.backdropUrls[0].split('null')
// if (backdropUrl[1] === '') {
//   backdropUrl = 'https://image.tmdb.org/t/p/w300/hph1RMsL4223xyqxfEx3OXodf5E.jpg'
// } else {
//   backdropUrl = movie.backdropUrls[0]
// }
