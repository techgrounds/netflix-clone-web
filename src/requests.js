import baseURL, { APIURL } from './axiosInstance';

const requests = {
  fetchSearchQuery: `${APIURL}/home/discover?&query=`,
  fetchSearchQuery2: `${APIURL}/home/discover`,
  fetchSearchQuery3:
    'https://afternoon-oasis-79606.herokuapp.com/home/discover',
  fetchSearchQuery4: 'https://jsonplaceholder.typicode.com/todos/1',
};

export default requests;
