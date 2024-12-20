import React from "react";
import "../blocks/Footer.css";
import GithubImage from "../assets/github.svg";
import FBimage from "../assets/fb.svg";
const Footer = ({}) => {
  return (
    <footer className="footer__container">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__buttons_container">
        <div className="footer__buttons_noIcon_container">
          <button className="footer__homebutton">Home</button>
          <button className="footer__tripletenlinkbutton">TripleTen</button>
        </div>
        <div className="footer__buttons_withIcon_container">
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
