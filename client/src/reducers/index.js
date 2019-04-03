import { combineReducers } from 'redux';    // combines all our other reducers
import authReducer from './authReducer';    // authentication state object
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';

// This is the root reducer which is used to initialize the store
// This takes in other reducers as input and "reduces" them to a state object
export default combineReducers({
  auth: authReducer,                        // represents a single reducer brought in, authReducer
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer
});