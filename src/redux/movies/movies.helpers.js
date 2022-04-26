// import { v4 as uuidv4 } from "uuid";

export const transformMovieData = (moviesObject) => {
  const movies = [];

  Object.entries(moviesObject).forEach(([key, value]) => {
<<<<<<< HEAD
    let filteredMovies = value?.categoryDetails
=======
    console.log("value: ",value)
    let filteredMovies = value.categoryDetails
>>>>>>> 277e4fe37a781e4047210feb5a90bf44160b8f75
      .map((movie) => {
        return {
          desc: movie.overview,
          id: movie.id,
          title: movie.title,
          image: movie.backdropUrls[0],
          imageHR: movie.backdropUrls[1],
          poster: movie.posterUrls[0],
          trailer: movie.trailerUrl,
          runtime: movie.runtime,
          rating: movie.rating,
          logo: movie.logo,
          keywords: movie.keywords,
        };
      })
      .filter((movie) => movie.trailer);

    let editedGenre =
      key.split("Movies")[0].charAt(0).toUpperCase() +
      key.split("Movies")[0].slice(1);

    movies.push({
      genre: editedGenre,
      movies: filteredMovies,
    });
  });
  return movies;
};
