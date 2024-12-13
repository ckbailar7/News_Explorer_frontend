import "../blocks/Header.css";
import headerBackground from "../assets/headerBackground.svg";
import HeaderLogo from "../assets/headerLogoWhite.svg";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";
import SearchFormComponent from "../components/SearchFormComponent.jsx";
const Header = ({}) => {
  const currentUser = useContext(currentUserContext);

  return (
    <header className="header__container">
      <div className="header__upperbar">
        <NavigationComponent />
      </div>

      <div className="header__user_isLoggedInFalse-greeting">
        <h1 className="header__user_greeting-heading_1">
          What's going on in the world?
        </h1>
        <h2 className="header__user_greeting-heading_2">
          Find the latest news on any topic and save them to your personal
          account
        </h2>
        <SearchFormComponent />
      </div>
    </header>
  );
};

export default Header;
