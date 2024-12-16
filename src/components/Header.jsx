import "../blocks/Header.css";
import headerBackground from "../assets/headerBackground.svg";
import HeaderLogo from "../assets/headerLogoWhite.svg";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";
const Header = ({}) => {
  const currentUser = useContext(currentUserContext);

  return (
    <header className="header__container">
      <div className="header__upperbar">
        <div className="header__logo">
          <div className="header__logo_white">
            <NavLink to="/">
              <img
                src={HeaderLogo}
                className="header__logo_white_image"
                alt="header logo"
              />
            </NavLink>
          </div>
        </div>
        <NavigationComponent />
      </div>
    </header>
  );
};

export default Header;
