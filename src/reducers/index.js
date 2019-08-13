import { combineReducers } from 'redux';

// Reducers
import location from './locationsReducer';
import token from './tokenReducer';
import user from './userReducer';
import songs from './songsReducer';

const rootReducer = combineReducers({
  location,
  token,
  user,
  songs
})

export default rootReducer;