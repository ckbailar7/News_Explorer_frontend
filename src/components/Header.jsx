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
    <header className="header">
      <div className="header__topBar">
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
            <li>
              <NavLink
                to="/"
                className={`header__nav-link ${
                  isProfilePage ? "header__nav-link--profilePage" : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <>
                <li className="header__savedArticles-container">
                  <NavLink
                    to="/saved-news"
                    className={`header__nav-link ${
                      isProfilePage
                        ? "header__nav-link--profilePage"
                        : "header__nav-link--homePage-nonActive"
                    }`}
                  >
                    Saved Articles
                  </NavLink>
                </li>
                <li
                  className={`header__profile ${
                    isProfilePage ? "header__profile--profilePage" : ""
                  }`}
                >
                  <button
                    className={`header__userButton ${
                      isProfilePage ? "header__userButton--profilePage" : ""
                    }`}
                  >
                    {currentUser?.name || "Profile"}
                  </button>
                  <button
                    className={`header__logoutButton ${
                      isProfilePage ? "header__logoutButton--profilePage" : ""
                    }`}
                    aria-label="Logout"
                  ></button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li>
                <button
                  onClick={onCreateLoginModal}
                  className="header__loginButton"
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
