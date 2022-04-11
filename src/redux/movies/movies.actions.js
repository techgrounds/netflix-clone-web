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
console.log(request.data)
const allMovies = []

Object.entries(request.data).forEach(([key, value]) => {
  let filteredMovies = value.categoryDetails.map((movie) => {
  
  return {
      id: uuidv4(),
      title: movie.title,
      desc: movie.overview,
      image: movie.backdropUrls[0],
      imageHR: movie.backdropUrls[1],
      poster: movie.posterUrls[0],
      trailer: movie.trailerUrl
    }

  }
  ).filter(movie => movie.trailer)
  console.log("ALL MOVIES", allMovies)

  let editedGenre = key.split('Movies')[0].charAt(0).toUpperCase() + key.split('Movies')[0].slice(1)


  allMovies.push({
    genre: editedGenre,
    movies: filteredMovies
  })
  
})

console.log('ALL', allMovies)

      dispatch(fetchMoviesResultsSuccess(allMovies));

      const randomMovieSet =
        Math.floor(Math.random() * (allMovies.length - 1)) + 1;
      const movies = allMovies[randomMovieSet].movies;

      const selectRandomMovie = Math.floor(Math.random() * movies.length - 1);

      const singleMovie = movies[selectRandomMovie];

      dispatch(fetchSingleMovie(singleMovie));

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

