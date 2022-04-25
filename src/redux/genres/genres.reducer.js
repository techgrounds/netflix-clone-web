import { genresActionTypes } from './genres.types';

const initialState = {
  allGenres: [],
  movie: null,
  error: null,
  isLoading: false,
  selectGenre: "",
  gridActive: false
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case genresActionTypes.FETCH_GENRES_RESULTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case genresActionTypes.FETCH_GENRES_RESULTS_SUCCESS:
      return {
        ...state,
        allGenres: [...action.payload],
        error: false,
        isLoading: false,
      };
    case genresActionTypes.FETCH_SINGLE_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case genresActionTypes.FETCH_GENRES_RESULTS_FAILURE:
      return {
        ...state,
        allGenres: [],
        error: action.payload,
        isLoading: false,
      };
    case genresActionTypes.SELECT_MOVIE_GENRE:
      return {
        ...state,
        selectGenre: action.payload,

      }
    case genresActionTypes.GENRE_GRID_ACTIVE: 
      return {
        ...state,
        gridActive: action.payload
      }
    default:
      return state;
  }
};

export default genresReducer;
