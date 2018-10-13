import { GET_MOVIES, MOVIES_LOADING, GET_MOVIE } from "./constants";
import { MOVIES_API, MOVIE_API_DETAIL } from "../services/api";
import axios from "axios";

export const setMoviesLoading = () => {
  return {
    type: MOVIES_LOADING
  };
};

export const getMovies = () => dispatch => {
  dispatch(setMoviesLoading());
  axios.get(`${MOVIES_API}`).then(res =>
    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    })
  );
};

export const getMovie = id => dispatch => {
  dispatch(setMoviesLoading());
  axios.get(MOVIE_API_DETAIL(id)).then(res =>
    dispatch({
      type: GET_MOVIE,
      payload: res.data
    })
  );
};
