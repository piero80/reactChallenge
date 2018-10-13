import React, { Component } from "react";
import Movies from "../components/Movies";
import "../App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovies } from "../actions/itemActions";
import { getMoviesModel } from "../reducers/itemReducer";
import { Button } from "react-bootstrap";
import { MODAL_DETAIL } from "../actions/constants";
import { showModal } from "../actions/modalActions";
import ModalRoot from "../modal/root";

class Main extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props.movies;
    const { showModal } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movies List</h1>
          <ul>
            {movies.map(movie => (
              <Movies key={movie.id} movies={movie} showModal={showModal} />
            ))}
          </ul>
        </header>
        <ModalRoot />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: getMoviesModel(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
      showModal
    },
    dispatch
  );

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default Main;
