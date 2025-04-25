import React from 'react';
import '../blocks/Footer.css';

const Footer = ({}) => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2020 Supersite, Powered by News API
      </p>
      <div className="footer__buttons-container">
        <div className="footer__buttons-no-icon">
          <button className="footer__home-button">
            <a className="footer__home-button-text" href="/">
              Home
            </a>
          </button>
          <button className="footer__tripleten-button">TripleTen</button>
        </div>
        <div className="footer__buttons-with-icon">
          <button className="footer__github-button"></button>
          <button className="footer__facebook-button"></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
