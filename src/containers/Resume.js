import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

import ResumeBlock from './../components/ResumeBlock'
import ResumeHeader from '../components/ResumeHeader';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


export default class Resume extends Component {
  render() {
    return (
      <div className>

         
            <ResumeHeader />

           

            <ResumeBlock />

        
        
      </div>
    )
  }
}
