import { searchActionTypes } from "./search.types";
import requests from "../../requests";
import axios from "../../axiosInstance";
import { transformMovieData } from "../movies/movies.helpers";

export const changeSearchInputValue = (inputValue) => ({
  type: searchActionTypes.CHANGE_SEARCH_INPUT_VALUE,
  payload: inputValue,
});

export const clearSearchInputValue = () => ({
  type: searchActionTypes.CLEAR_SEARCH_INPUT_VALUE,
});

export const searchMoviesResults = (movieData) => ({
  type: searchActionTypes.SEARCH_MOVIES_RESULTS,
  payload: movieData,
});

export const searchMoviesResultsAsync = () => {

  return async (dispatch) => {
    try {
      const requestDiscover = await axios.get(requests.fetchDiscover);
      const requestGenres = await axios.get(requests.fetchGenres);

      const discover = transformMovieData(requestDiscover.data);
      const genres = transformMovieData(requestGenres.data);

      const moviesCombined = discover.concat(genres);

      const allMoviesSearchable = moviesCombined.reduce((acc, curr) => {
        return [...acc, ...curr.movies];
      }, []);

      const removeDuplicates = (movieData) => {
        const movieTitles = movieData.map((movie) => movie.title);

        return movieData.filter(
          ({ title }, index) => !movieTitles.includes(title, index + 1)
        );
      };

      const moviesWithoutDuplicates = removeDuplicates(allMoviesSearchable);
      dispatch(searchMoviesResults(moviesWithoutDuplicates));
    } catch (err) {
      console.log(err);
    }
  };
};