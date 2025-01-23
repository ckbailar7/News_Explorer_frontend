import HeaderLogo from "../assets/headerLogoWhite.svg";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink, useLocation } from "react-router-dom";
import "../blocks/Header.css";

const NavigationComponentLoggedIn = ({ currentUser }) => {
  const location = useLocation();

  const isProfilePage = location.pathname === "saved-news";

  console.log("Current location:", location.pathname);
  console.log("Is profile page:", isProfilePage);
  return (
    <div className="NavigationComponent__container">
      <div className="header__buttons">
        <div className="header__buttons_home-button">
          <button
            className={
              isProfilePage
                ? "header__buttons_home-button-profilePage"
                : "header__buttons_home-button"
            }
          >
            Home
          </button>
        </div>
        <div className="header__button_saved-articles">
          <button
            className={
              isProfilePage
                ? "header__button_saved-articles-profilePage"
                : "header__button_saved-articles"
            }
          >
            Saved Articles
          </button>
        </div>
        <NavLink to="/saved-news">
          {currentUser ? (
            <div
              className={
                isProfilePage
                  ? "header__profile-container-profile_page"
                  : "header__profile-container"
              }
            >
              <div className="header__profile-name">{currentUser}</div>
            </div>
          ) : (
            <div className="header__profile-container">
              <div
                className={
                  isProfilePage
                    ? "header__profile-currentUser-placeholder-profile_page"
                    : "header__profile-currentUser-placeholder"
                }
              >
                Name
              </div>
              <button
                className={
                  isProfilePage
                    ? "header__profile-currentUser-logout_button-profile_page"
                    : "header__profile-currentUser-logout_button"
                }
              ></button>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationComponentLoggedIn;
