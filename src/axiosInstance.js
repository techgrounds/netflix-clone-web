import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://afternoon-oasis-79606.herokuapp.com',
});

export default instance;
