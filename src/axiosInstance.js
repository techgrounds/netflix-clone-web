import axios from 'axios';

//TG
// export const APIURL = 'https://afternoon-oasis-79606.herokuapp.com';

// const instance = axios.create({
//   baseURL: 'https://afternoon-oasis-79606.herokuapp.com',
// });

const instance = axios.create({
  // baseURL: 'https://api.themoviedb.org/3/',
  baseURL: 'https://afternoon-oasis-79606.herokuapp.com/',
});

export default instance;
