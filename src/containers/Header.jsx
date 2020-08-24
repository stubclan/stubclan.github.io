import React, { Component } from "react";

import { Link, BrowserRouter, Route } from "react-router-dom";
import { Row, Nav, NavItem } from "reactstrap";



class Header extends Component {
  render() {
    return (
      <div>
          <nav
            className="navbar navbar-expand-lg navbar-light fixed-top text-white"
            id="mainNav"
          >
            <div className="container">
              <a
                className="navbar-brand js-scroll-trigger logo text-white"
                href="#page-top"
              >
                stubclan
              </a>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Menu
                <i className="fas fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse topNavigation"
                id="navbarResponsive"
              >
                <Nav className="navbar-nav ml-auto">
                  <NavItem>
                    <Link to="/" className="nav nav-link">
                      home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/resume" className="nav nav-link">
                      resume
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/blog" className="nav nav-link">
                      blog
                    </Link>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </nav>
               

          <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
              <div className="mx-auto text-center">
                <h1 className="mx-auto my-0 text-uppercase text-white">
                  sujan aryal
                </h1>
                <h2 className="aboutDesc mx-auto mt-2 mb-5">
                you, me, everyone: we are made of star stuff 
                <br /> ~ <br /> 
                
                </h2>
                {/* <a href="#about" className="btn btn-primary js-scroll-trigger">Get Started</a> */}
              </div>
            </div>
          </header>
        </div>
    );
  }
}

export default Header;
