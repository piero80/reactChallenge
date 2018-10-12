import React, { Component } from 'react';
import Movies from '../components/Movies';
import '../App.css';
import {connect} from 'react-redux';
import {getMovies} from '../actions/itemActions';

class Main extends Component {


    componentDidMount() {
        this.props.getMovies();
    }

    render() { 
        const {movies} = this.props.movies;
        return ( 
            <div className="App">
                <header className="App-header">
                    <h1>Movies List</h1>
                    <ul>
                        {movies.map(movie=>(
                            <Movies key={movie.id} movies={movie}/>
                        ))}
                    </ul>
                </header>        
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    movies:state.movies
})
 
export default connect(mapStateToProps, {getMovies})(Main);