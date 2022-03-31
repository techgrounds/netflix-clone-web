import axios from 'axios';

export const APIURL = 'https://afternoon-oasis-79606.herokuapp.com';

const instance = axios.create({
  baseURL: 'https://afternoon-oasis-79606.herokuapp.com',
});

export default instance;
