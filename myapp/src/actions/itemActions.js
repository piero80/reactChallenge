import {GET_MOVIES, MOVIES_LOADING} from './constants';
import {MOVIES_API} from '../services/api';
import axios from 'axios';


export const setMoviesLoading = () => {
    return {
        type:MOVIES_LOADING
    }
}


export const getMovies = () => dispatch => {
    dispatch(setMoviesLoading());
    axios.get(`${MOVIES_API}`)
    .then(res => 
        dispatch({
            type:GET_MOVIES,
            payload:res.data.results
        }))
}