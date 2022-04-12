import { moviesActionTypes } from './movies.types'

const initialState = {
  allMovies: [],
  movie: {
    id: 0,
    title: '',
    desc: '',
    image: '',
    imageHR: '',
    poster: '',
    trailer: '',
  },
  error: null,
  isLoading: false,
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesActionTypes.FETCH_MOVIES_RESULTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case moviesActionTypes.FETCH_MOVIES_RESULTS_SUCCESS:
      return {
        ...state,
        allMovies: [...action.payload],
        error: false,
        isLoading: false,
      }
    case moviesActionTypes.FETCH_SINGLE_MOVIE:
      return {
        ...state,
        movie: action.payload,
      }
    case moviesActionTypes.FETCH_MOVIES_RESULTS_FAILURE:
      return {
        ...state,
        allMovies: [],
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}

export default moviesReducer
