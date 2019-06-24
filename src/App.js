import React, {Component} from 'react';
import './App.css';

import Header from './containers/Header';
import HomePage from './containers/HomePage';

import Footer from './containers/Footer';



export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <HomePage />
      
        <Footer />
      </div>
    );
  }
}
