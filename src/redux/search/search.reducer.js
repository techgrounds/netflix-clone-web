import { searchActionTypes } from "./search.types";

const initialState = {
  search: null,
  searchMovies: [],
  inputValue: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchActionTypes.SEARCH_MOVIES_RESULTS:
      return {
        ...state,
        searchMovies: [...action.payload],
        error: false,
        isLoading: false,
      };
    case searchActionTypes.CHANGE_SEARCH_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case searchActionTypes.CLEAR_SEARCH_INPUT_VALUE:
      return {
        ...state,
        inputValue: "",
      };
    default:
      return state;
  }
};

export default searchReducer;
