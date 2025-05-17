import React from 'react';
import './blocks/Footer.css';

const Footer = ({}) => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2020 Supersite, Powered by News API
      </p>
      <div className="footer__buttons-container">
        <div className="footer__buttons-no-icon">
          <a className="footer__link" href="/">
            Home
          </a>

          <a
            href="https://tripleten.com/home/web/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__buttons-with-icon">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" footer__link footer__link--icon"
          >
            <span className="footer__icon footer__icon--github"></span>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--icon"
          >
            <span className="footer__icon footer__icon--facebook"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
