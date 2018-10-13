import { combineReducers } from "redux";
import moviesReducer from "./itemReducer";
import movieReducer from "./movieReducer";
import modal from "./modalReducer";

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  modal
});
