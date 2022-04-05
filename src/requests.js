//TG
// import { APIURL } from './axiosInstance';

// const requests = {
//   fetchSearchQuery: `${APIURL}/home/discover?&query=`,
//   fetchSearchQuery2: `${APIURL}/home/discover`,
//   fetchSearchQuery3:
//     'https://afternoon-oasis-79606.herokuapp.com/home/discover',
//   // fetchSearchQuery4: 'https://jsonplaceholder.typicode.com/todos/1',
// };

// export default requests;

const API_KEY = 'e416b613f8d7a9e3292b5434db6a9c03';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchNetflixOriginals: '/discover',
};

export default requests;
