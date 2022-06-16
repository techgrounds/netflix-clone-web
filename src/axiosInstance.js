import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://netflixcloneapp.azurewebsites.net',
});

export default instance;
