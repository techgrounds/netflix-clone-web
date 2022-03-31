import { searchActionTypes } from './search.types';
import requests from '../../requests';
// import axios from '../../axiosInstance';
import axios from 'axios';
import { APIURL } from '../../axiosInstance';

export const changeSearchInputValue = (inputValue) => ({
  type: searchActionTypes.CHANGE_SEARCH_INPUT_VALUE,
  payload: inputValue,
});

export const clearSearchInputValue = () => ({
  type: searchActionTypes.CLEAR_SEARCH_INPUT_VALUE,
});

export const fetchSearchResultsRequest = (searchQuery) => ({
  type: searchActionTypes.FETCH_SEARCH_RESULTS_REQUEST,
  payload: searchQuery,
});

export const fetchSearchResultsSuccess = (searchResults) => ({
  type: searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
  payload: searchResults,
});

export const fetchSearchResultsFailure = (errorMessage) => ({
  type: searchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
  payload: errorMessage,
});

export const fetchSearchResultsAsync = (searchQuery) => {
  console.log('INSIDE FETCHSEARCHREQ');
  // console.log(`${requests.fetchSearchQuery4}`);
  return async (dispatch) => {
    // console.log('INSIDE RETURN', dispatch);
    // dispatch(fetchSearchResultsRequest(searchQuery));

    try {
      console.log('INSIDE TRY BLOCK');

      const response = await axios.get(
        'https://afternoon-oasis-79606.herokuapp.com/home/discover'
      );
      const data = response.data;

      console.log('DATA', data);

      // const {
      //   data: { results },
      // } = response;
      // const filteredResults = results.filter(
      //   (result) => result.media_type !== 'person'
      // );
      // dispatch(fetchSearchResultsSuccess(filteredResults));
      console.log('RESPONSE', response);
      console.log('data', data);
    } catch (error) {
      console.log(error);
      // dispatch(fetchSearchResultsFailure(err.message));
    }
  };
};
