import { GET_MOVIES, MOVIES_LOADING } from "../actions/constants";

const initialState = {
  movies: [],
  loading: false
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case MOVIES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default movieReducer;

export const getMovieModel = state => state.movies;
