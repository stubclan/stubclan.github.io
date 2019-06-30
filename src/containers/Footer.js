import React, { Component } from 'react';



class Footer extends Component {
    render() {
        return (
            <div>
                <section className="contact-section">

                    <div className="social d-flex justify-content-center footer-contact-section">
                        <a href="https://linkedin.com/stubclan" className="mx-2">
                        <i className="fab fa-linkedin"></i>
                        </a>
                        
                        <a href="https://github.com/stubclan" className="mx-2">
                        <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <footer className="text-white text-center text-white-50 bg-dark">
                    <div className="container">
                    designed and developed by <a href="https:stubclan.com">stubclan </a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;