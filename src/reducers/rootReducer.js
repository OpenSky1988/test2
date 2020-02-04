import { combineReducers } from 'redux';

import ads from './adsReducer';
import users from './usersReducer';

export default combineReducers ({
  ads,
  users
});