import React, { Component } from 'react';
import './App.css';
import Movies from '../src/components/Movies';
import axios from 'axios';

class App extends Component {
  state = {
    movies:[]
  }
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=344ec8e9b6089fca92496e88f7530824')
    .then(result=>this.setState({movies:result.data.results}));
  }
  render() {
    const {movies} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movies List</h1>
          {movies.map(movie => (
            <Movies movies={movie}/>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
