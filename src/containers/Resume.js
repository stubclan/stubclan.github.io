import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

import ResumeBlock from './../components/ResumeBlock'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Header />

        <ResumeBlock />

        <Footer />
        
      </div>
    )
  }
}
