import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';

export default combineReducers({
  // this.props.auth
  auth: authReducer,
  // this.props.errors
  errors: errorReducer,
  // this.props.proile
  profile: profileReducer,
  // this.props.post
  post: postReducer
});
