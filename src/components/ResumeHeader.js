import React, { Component } from "react";

import { Link, BrowserRouter, Route } from "react-router-dom";
import { Row, Nav, NavItem } from "reactstrap";

export default class ResumeHeader extends Component {
  render() {
    return (
      <div>   

        <header className="resumeHeader fixed-top">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <h1 className="mx-auto my-0 text-uppercase text-white">
                sujan aryal
              </h1>
              
              {/* <a href="#about" className="btn btn-primary js-scroll-trigger">Get Started</a> */}
            </div>
          </div>
        </header>
      </div>
    );
  }
}
