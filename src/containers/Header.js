import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top text-white" id="mainNav">
                    <div className="container">
                    <a className="navbar-brand js-scroll-trigger logo text-white" href="#page-top">stubclan</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse topNavigation" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#projects">resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#signup">projects</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>

                <header className="masthead">
                    <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase text-white">sujan aryal</h1>
                        <h2 className="aboutDesc mx-auto mt-2 mb-5">web designer/ developer and an enthusiast</h2>
                        {/* <a href="#about" className="btn btn-primary js-scroll-trigger">Get Started</a> */}
                    </div>
                    </div>
                </header>
                    
                  
                </div>
                    
                    
                
            </div>
        );
    }
}

export default Header;