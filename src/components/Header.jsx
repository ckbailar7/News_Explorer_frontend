import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink } from "react-router-dom";
import "../blocks/Header.css";

const Header = ({ isLoggedIn, onCreateLoginModal }) => {
  const currentUser = useContext(currentUserContext);
  const location = useLocation();
  const isProfilePage = location.pathname === "/saved-news";

  // const headerUniversalButtonClassName = (baseClass, isProfilePage) =>
  //   isProfilePage ? `${baseClass}--profilePage` : baseClass;

  // <<<<<<< >>>>>>>> //
  // <<<<<<< >>>>>>>> //
  // --profilePage (good modifier)

  // <<<<<<< >>>>>>>> //
  // <<<<<<< >>>>>>>> //

  // <<<<<<< >>>>>>>> //
  // <<<<<<< >>>>>>>> //

  // <<<<<<< >>>>>>>> //
  // <<<<<<< >>>>>>>> //

  const headerLogoChange = isProfilePage
    ? "/src/assets/NewsExplorerNewsExplorerHeaderDark.svg"
    : "/src/assets/headerLogoWhite.svg";

  return (
    <header className={`header ${isProfilePage ? "header-profile-page" : ""}`}>
      <div className="header__top-bar">
        <div className="header__logo">
          <NavLink to="/">
            <img
              src={headerLogoChange}
              alt="header logo"
              className="header__logo-image"
            />
          </NavLink>
        </div>
        {/* {navigation} */}
        <nav className="header__navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink
                to="/"
                className={`header__nav-link ${
                  isProfilePage ? "header__nav-link--profile-page" : ""
                }`}
              >
                <span className="header__nav-text">Home</span>
              </NavLink>
            </li>
            {isLoggedIn && (
              <>
                <li className="header__saved-articles">
                  <NavLink
                    to="/saved-news"
                    className={`header__nav-link ${
                      isProfilePage
                        ? "header__nav-link--profile-page--saved-articles"
                        : "header__nav-link--home-page-inactive--saved-articles"
                    }`}
                  >
                    <span className="header__saved-articles-text">
                      Saved Articles
                    </span>
                  </NavLink>
                </li>
                <li
                  className={`header__profile ${
                    isProfilePage ? "header__profile--profile-page" : ""
                  }`}
                >
                  <button
                    className={`header__user-button ${
                      isProfilePage ? "header__user-button--profile-page" : ""
                    }`}
                  >
                    {currentUser?.name || "Profile"}
                  </button>
                  <button
                    className={`header__logout-button ${
                      isProfilePage ? "header__logout-button--profile-page" : ""
                    }`}
                    aria-label="Logout"
                  ></button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li className="header__login">
                <button
                  onClick={onCreateLoginModal}
                  className="header__login-button"
                >
                  Sign In
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
