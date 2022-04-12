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
  // console.log("inside ");

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

      console.log("ALL MOVIES SEARCHABLE", allMoviesSearchable);
      dispatch(searchMoviesResults(allMoviesSearchable));
    } catch (err) {
      console.log(err);
    }
  };
};

// accumulator => acc => beginwaarde 0, {}, []
// curr => currentValue => huidige loop iteratie
// {genre: 'eeighties', movies: []}

// const grades = [
//   { grade: 10 },
//   { grade: 20 },
//   { grade: 30 },
//   { grade: 40 },
//   { grade: 50 },
// ];
// const totalScores = grades.reduce((acc, curr) => {
//   return acc + curr.grade;
// }, 0);

// console.log("TOTAL", totalScores);
