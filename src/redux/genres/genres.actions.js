import { genresActionTypes } from './genres.types';
import requests from '../../requests';
import axios from '../../axiosInstance';
import { v4 as uuidv4 } from 'uuid';

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

export const fetchGenresResultsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchGenresResultsRequest());

    try {
      const request = await axios.get(requests.fetchGenres);
console.log(request.data)
const allGenres = []

Object.entries(request.data).forEach(([key, value]) => {
  let filteredGenres = value.categoryDetails.map((movie) => {
  
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
  console.log("ALL GENRES", allGenres)

  let editedGenre = key.split('Movies')[0].charAt(0).toUpperCase() + key.split('Movies')[0].slice(1)


  allGenres.push({
    genre: editedGenre,
    movies: filteredGenres
  })
  
})



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

