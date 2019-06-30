import React, { Component } from "react";
import "./css/App.css";

import { BrowserRouter, Link, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import Resume from "./containers/Resume";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/resume" component={Resume} />
        </BrowserRouter>
      </div>
    );
  }
}
