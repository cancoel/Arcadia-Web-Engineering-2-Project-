import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

export default combineReducers({
  users: authReducer,
  posts: postReducer
});
