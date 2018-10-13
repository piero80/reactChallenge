import { GET_MOVIE, MOVIES_LOADING } from "../actions/constants";

const initialState = {
  movie: [],
  loading: false
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
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

export const getMovieModel = state => state.movie;
