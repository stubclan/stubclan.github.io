import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />

        <section id="about" className="about-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">About me</h2>
                <p className="text-white-50">
                  Seems like yesterday, on a Saturday I was ready to go to
                  school on a Holiday <br />
                  I am nobody yet somebody with story like anybody <br />
                  So if you dare to care, send me a{" "}
                  <a href="mailto:stubclan.com@gmail.com">flare </a>
                </p>
              </div>
            </div>
            {/* <img src="img/ipad.png" className="img-fluid" alt="" /> */}
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
