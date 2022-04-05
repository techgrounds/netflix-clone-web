import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import searchReducer from './search/search.reducer';

const persistCongig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ search: searchReducer });

export default persistReducer(persistCongig, rootReducer);
