import { searchActionTypes } from './search.types';

const initialState = {
  search: null,
  searchResults: [],
  inputValue: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchActionTypes.CHANGE_SEARCH_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case searchActionTypes.CLEAR_SEARCH_INPUT_VALUE:
      return {
        ...state,
        inputValue: '',
      };
  }
};

export default searchReducer;
