import React, { Component } from "react";
import { MODAL_DETAIL } from "../actions/constants";

class Movies extends Component {
  render() {
    const { movies, showModal } = this.props;
    return (
      <li onClick={() => showModal({ type: MODAL_DETAIL })}>{movies.title}</li>
    );
  }
}

export default Movies;
