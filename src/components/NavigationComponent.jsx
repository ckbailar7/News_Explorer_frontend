import HeaderLogo from "../assets/headerLogoWhite.svg";
import { useContext } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import { NavLink } from "react-router-dom";

const NavigationComponent = ({}) => {
  return (
    <div className="NavigationComponent__container">
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
            <button>Home</button>
          </div>
          <div className="header__buttons_signin-button">
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
