import React from "react";
import "../blocks/Footer.css";
import GithubImage from "../assets/github.svg";
import FBimage from "../assets/fb.svg";
const Footer = ({}) => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__buttons-container">
        <div className="footer__buttons-no-icon">
          <button className="footer__home-button">Home</button>
          <button className="footer__tripleten-button">TripleTen</button>
        </div>
        <div className="footer__buttons-with-icon">
          <button className="footer__github-button">
            <img src={GithubImage} alt="Github Icon" />
          </button>
          <button className="footer__facebook-button">
            <img src={FBimage} alt="Facebook Icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
