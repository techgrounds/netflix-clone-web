import { moviesActionTypes } from "./movies.types";

const initialState = {
  allMovies: [],
  movie: {
    id: 0,
    title: "",
    desc: "",
    image: "",
    imageHR: "",
    poster: "",
    trailer: "",
    rating: "",
    runtime: "",
  },
  error: null,
  isLoading: false,
  movieDetails: {},
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesActionTypes.FETCH_MOVIES_RESULTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case moviesActionTypes.FETCH_MOVIES_RESULTS_SUCCESS:
      return {
        ...state,
        allMovies: [...action.payload],
        error: false,
        isLoading: false,
      };
    case moviesActionTypes.FETCH_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
        error: false,
      };
    case moviesActionTypes.FETCH_SINGLE_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case moviesActionTypes.FETCH_MOVIES_RESULTS_FAILURE:
      return {
        ...state,
        allMovies: [],
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;
