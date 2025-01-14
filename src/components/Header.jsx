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

  return (
    <header className="header__container">
      <div className="header__upperbar">
        <div className="header__logo">
          <div className="header__logo header__logo_white">
            <NavLink to="/">
              <img
                src={headerLogoChange}
                className="header__logo_white_image"
                alt="header logo"
              />
            </NavLink>
          </div>
        </div>
        {isLoggedIn ? (
          <NavigationComponentLoggedIn />
        ) : (
          <NavigationComponent onCreateLoginModal={onCreateLoginModal} />
        )}
      </div>
    </header>
  );
};

export default Header;
