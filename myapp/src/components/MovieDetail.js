import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovie } from "../actions/itemActions";
import { getMovieModel } from "../reducers/movieReducer";

class MovieDetail extends Component {
  componentDidMount() {
    const { id } = this.props.movies;
    this.props.getMovie(id);
  }
  render() {
    const { movie } = this.props.movie;
    return (
      <div>
        <ul>
          <li>{movie.title}</li>
          <li>{movie.tagline}</li>
          <li>{movie.release_date}</li>
          <li>{movie.budget}</li>
          <li>{movie.overview}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: getMovieModel(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovie
    },
    dispatch
  );

MovieDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);

export default MovieDetail;
