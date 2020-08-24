import React, { Component } from "react";

import education from "./../img/education.jpg";

import "./../css/ResumeBlock.css";

export default class ResumeBlock extends Component {
  render() {
    return (
      <div>
        <div className="mastheadEdu">
          <div className="container d-flex align-items-left">
            <div className="container ">
              <h3 className="text-white">Education</h3>

              <p className="educationInfo">
                <ul className="educationList">
                  <li>
                    <div class="singleElement">
                      <div class="content">
                        <p>
                          Truman State University, Kirksville, MO [Aug 2013 -
                          May 2017]{" "}
                        </p>
                        <p>Bachelor of Science in Computer Science</p>
                      </div>
                      <div class="right">
                        <img
                          alt="Logo"
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Truman_Bulldogs_logo.svg/150px-Truman_Bulldogs_logo.svg.png"
                          decoding="async"
                          width="150"
                          height="164"
                          data-file-width="169"
                          data-file-height="185"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </p>

              {/* <a href="#about" className="btn btn-primary js-scroll-trigger">Get Started</a> */}
            </div>
          </div>
        </div>

        <div className="mastheadCon">
          <div className="container d-flex align-items-left">
            <div className="container ">
              <h3 className="text-white">
                Where is Everybody? ~
              </h3>
             
             

              <div class="contactMethods">
                  <div className="social d-flex">
                    <a href="https://linkedin.com/stubclan" className="mx-2">
                      <i className="fab fa-linkedin" />
                    </a>

                    <a href="https://github.com/stubclan" className="mx-2">
                      <i className="fab fa-github" />
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
