import HeaderLogo from "../assets/headerLogoWhite.svg";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink } from "react-router-dom";
import "../blocks/Header.css";

const NavigationComponentLoggedIn = ({ currentUser }) => {
  return (
    <div className="NavigationComponent__container">
      <div className="header__buttons">
        <div className="header__buttons_home-button">
          <button>Home</button>
        </div>
        <div className="header__button_saved-articles">
          <button>Saved Articles</button>
        </div>
        <NavLink to="/profile">
          {currentUser ? (
            <div className="header__profile-container">
              <div className="header__profile-name">{currentUser}</div>
            </div>
          ) : (
            <div className="header__profile-container">
              <div className="header__profile-currentUser-placeholder">
                Name
              </div>
              <button className="header__profile-currentUser-logout_button"></button>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationComponentLoggedIn;
