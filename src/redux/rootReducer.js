import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import genresReducer from './genres/genres.reducer';
import { languagesReducer } from './languages/languages.reducer';
import moviesReducer from './movies/movies.reducer';
import searchReducer from './search/search.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  language: languagesReducer,
  search: searchReducer,
  movies: moviesReducer,
  genres: genresReducer
});

export default persistReducer(persistConfig, rootReducer);
