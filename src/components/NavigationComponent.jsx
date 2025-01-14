import { useLocation } from "react-router-dom";

import HeaderLogo from "../assets/headerLogoWhite.svg";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink } from "react-router-dom";
import "../blocks/Header.css";

const NavigationComponent = ({ onCreateLoginModal }) => {
  const location = useLocation();

  const isProfilePage = location.pathname === "/profile";
  return (
    <div className="NavigationComponent__container">
      <div className="header__buttons">
        <div className="header__buttons_home-button">
          <button
            className={
              isProfilePage ? "header__buttons_home-button-profilePage" : ""
            }
          >
            Home
          </button>
        </div>
        <div className="header__buttons_signin-button">
          <button
            onClick={onCreateLoginModal}
            className={
              isProfilePage ? "header__buttons_signin-button-profilePage" : ""
            }
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
