import "../blocks/Header.css";
import headerBackground from "../assets/headerBackground.svg";
import HeaderLogo from "../assets/headerLogoWhite.svg";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink } from "react-router-dom";

const Header = ({}) => {
  const currentUser = useContext(currentUserContext);

  return (
    <header className="header__container">
      <div className="header__upperBar">
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

          <div className="header__buttons">
            <div className="header__buttons_home-button">
              <p>Home</p>
            </div>
            <div className="header__buttons_signin-button">
              <p>Signin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header__user_isLoggedInFalse-greeting">
        <h1>What's going on in the world?</h1>
        <h2>
          Find the latest news on any topic and save them to your personal
          account
        </h2>
        <input type="text" />
      </div>
    </header>
  );
};

export default Header;
