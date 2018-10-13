import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./containers/Main";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
