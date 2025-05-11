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
          <button className="footer__tripleten-button">
            <a
              href="https://tripleten.com/home/web/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__tripleten-link"
            >
              TripleTen
            </a>
          </button>
        </div>
        <div className="footer__buttons-with-icon">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__github-link"
          >
            <button className="footer__github-button"></button>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__facebook-link"
          >
            <button className="footer__facebook-button"></button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
