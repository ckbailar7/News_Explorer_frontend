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

  const headerLogoChange = isProfilePage
    ? "/src/assets/NewsExplorerNewsExplorerHeaderDark.svg"
    : "/src/assets/headerLogoWhite.svg";

  // const headerProfileLogoutButtonChange = isProfilePage
  //   ? "header__logoutButton--profilePage"
  //   : "header__logoutButton";

  // const headerHomeButtonChange = headerUniversalButtonClassName(
  //   "header__homeButton",
  //   isProfilePage
  // );

  // const headerSavedArticlesButtonChange = headerUniversalButtonClassName(
  //   "header__savedArticlesButton",
  //   isProfilePage
  // );

  // const headerProfileNameChange = headerUniversalButtonClassName(
  //   "header__profileNameButton",
  //   isProfilePage
  // );

  // const navigation = isLoggedIn ? (
  //   <nav className="header__navigation header__navigation--logged-in">
  //     <div className="header__homeButton--container">
  //       <NavLink to="/">
  //         <button className={headerHomeButtonChange}>Home</button>
  //       </NavLink>
  //     </div>
  //     <div className="header__savedArticlesButton--container">
  //       <NavLink to="/saved-news">
  //         <button className={headerSavedArticlesButtonChange}>
  //           Saved Articles
  //         </button>
  //       </NavLink>
  //     </div>
  //     <div className="header__profileButton--container">
  //       <NavLink to="/saved-news">
  //         <button className={headerProfileNameChange}>
  //           {currentUser?.name || "Prof"}
  //         </button>
  //       </NavLink>
  //       <button className={headerProfileLogoutButtonChange}></button>
  //     </div>
  //   </nav>
  // ) : (
  //   <nav className="header__navigation">
  //     <div className="header__loginButton--container">
  //       <button onClick={onCreateLoginModal} className="header__loginButton">
  //         Sign in
  //       </button>
  //     </div>
  //     <NavLink to="/">
  //       <button className={headerHomeButtonChange}>Home</button>
  //     </NavLink>
  //   </nav>
  // );

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__logo ">
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
                <li>
                  <NavLink
                    to="/saved-news"
                    className={`header__nav-link ${
                      isProfilePage ? "header__nav-link" : ""
                    }`}
                  >
                    Saved Articles
                  </NavLink>
                </li>
                <li className="header__profile">
                  <NavLink to="/saved-news" className="header__nav-link">
                    {currentUser?.name || "Profile"}
                  </NavLink>
                  <button
                    className={`header__logout-button ${
                      isProfilePage ? "header__logout-button--profilePage" : ""
                    }`}
                  ></button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li>
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
