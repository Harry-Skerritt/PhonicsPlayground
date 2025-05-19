import React from 'react';
import "./Landing.css"


const Landing = () => {

    return (
        <div className="landing-container">
            <div className="landing-background"/>

            <div className="landing-content">
                <h1 className={"landing-title-main"}>Phonics Playground</h1>
                <h2 className={"landing-subtitle"}>Where learning feels like play...</h2>
                <button className={"landing-get-started-button"}> Get Started </button>
            </div>

            <div className={"landing-cta"}>
                <h2 className="landing-cta-title">Get Started Today!</h2>
                <div className="landing-cta-buttons">
                    <button className="landing-login-button">Login</button>
                    <button className="landing-signup-button">Sign Up</button>
                </div>
            </div>

            <footer className="landing-footer">
                <p className="landing-copyright">Copyright © 2025 Harry Skerritt</p>
                <div className="landing-footer-links">
                    <a href="tos" className="landing-footer-link">Terms of Service</a>
                    <span className="landing-footer-separator"> | </span>
                    <a href="privacy" className="landing-footer-link">Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Landing;