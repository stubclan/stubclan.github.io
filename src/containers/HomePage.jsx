import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import GoodReadWidget from "./GoodReadsWidget";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />

        <section id="about" className="about-section text-center">
          <div className="container">
            {/* <div class="row">
              <GoodReadWidget />
            </div> */}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">About me</h2>
                <p className="text-white-50">
                  <code className="codeAboutMe">
                    <p>
                      function <a href="mailto:stubclan.com@gmail.com">flare</a>{" "}
                      youStubmbledHere {"{"}
                      <br />
                      switch (reason) {"{"}
                      <br />
                      case maybe just a tid bit interested on who this might be:
                      <br />
                      break;
                      <br />
                      case just a curiosity that ignited from someone or
                      somewhere:
                      <br />
                      break;
                      <br />
                      case maybe i forced you to hit the enter:
                      <br />
                      break;
                      <br />
                      default:
                      <br />
                      you are here
                      <br />
                      {"}"}
                      <br />
                      return if you dare to care, send me a{" "}
                      <a href="mailto:stubclan.com@gmail.com">flare</a>
                      <br />
                      {"}"}
                      <br />
                    </p>
                  </code>
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
