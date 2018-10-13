import { combineReducers } from "redux";
import movieReducer from "./itemReducer";
import modal from "./modalReducer";

export default combineReducers({
  movies: movieReducer,
  modal
});
