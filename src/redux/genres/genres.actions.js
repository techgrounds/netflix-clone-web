import { genresActionTypes } from "./genres.types";
import requests from "../../requests";
import axios from "../../axiosInstance";
import { transformMovieData } from "../movies/movies.helpers";

export const fetchGenresResultsRequest = () => ({
  type: genresActionTypes.FETCH_GENRES_RESULTS_REQUEST,
});

export const fetchGenresResultsSuccess = (allGenres) => ({
  type: genresActionTypes.FETCH_GENRES_RESULTS_SUCCESS,
  payload: allGenres,
});

export const fetchSingleMovie = (movie) => ({
  type: genresActionTypes.FETCH_SINGLE_MOVIE,
  payload: movie,
});

export const fetchGenresResultsFailure = (errorMessage) => ({
  type: genresActionTypes.FETCH_GENRES_RESULTS_FAILURE,
  payload: errorMessage,
});

export const selectGenre = (genre) => ({
  type: genresActionTypes.SELECT_MOVIE_GENRE,
  payload: genre,
});

export const genreGridActive = (bool) => ({
  type: genresActionTypes.GENRE_GRID_ACTIVE,
  payload: bool,
});

export const fetchGenresResultsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchGenresResultsRequest());

    try {
      const request = await axios.get(requests.fetchGenres);
      const allGenres = transformMovieData(request.data);

      dispatch(fetchGenresResultsSuccess(allGenres));
    } catch (err) {
      dispatch(fetchGenresResultsFailure(err.message));
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
