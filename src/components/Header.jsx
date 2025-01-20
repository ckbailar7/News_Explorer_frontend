import { useLocation } from "react-router-dom";

import "../blocks/Header.css";
import headerBackground from "../assets/headerBackground.svg";
import HeaderLogo from "../assets/headerLogoWhite.svg";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";
import NavigationComponentLoggedIn from "./NavigationComponentLoggedIn";
const Header = ({ isLoggedIn, onCreateLoginModal, closeModal }) => {
  const currentUser = useContext(currentUserContext);
  const location = useLocation();

  const isProfilePage = location.pathname === "/profile";

  const headerLogoChange = isProfilePage
    ? "/src/assets/NewsExplorerNewsExplorerHeaderDark.svg"
    : "/src/assets/headerLogoWhite.svg";

  const headerHomeButtonChange = isProfilePage
    ? "header__homeButton-profilePage"
    : "header__homeButton";

  const headerSavedArticlesButtonChange = isProfilePage
    ? "header__savedArticlesButton--profilePage"
    : "header__savedArticlesButton";

  const headerProfileNameChange = isProfilePage
    ? "header__profileNameButton--profilePage"
    : "header__profileNameButton";

  const navigation = isLoggedIn ? (
    <nav className="header__navigation header__navigation--logged-in">
      <div className="header__homeButton--container">
        <NavLink to="/">
          <button className={headerHomeButtonChange}>Home</button>
        </NavLink>
      </div>
      <div className="header__savedArticlesButton--container">
        <NavLink to="/profile">
          <button className={headerSavedArticlesButtonChange}>
            Saved Articles
          </button>
        </NavLink>
      </div>
      <div className="header__profileButton--container">
        <NavLink to="/profile">
          <button className={headerProfileNameChange}>ProfileName</button>
        </NavLink>
        <button className="header__logoutButton"></button>
      </div>
    </nav>
  ) : (
    <nav className="header__navigation">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__logo header__logo--white">
          <NavLink to="/">
            <img
              src={headerLogoChange}
              alt="header logo"
              className="header__logo-image"
            />
          </NavLink>
        </div>
        {navigation}
      </div>
    </header>
  );
};

export default Header;
