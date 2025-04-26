import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { currentUserContext } from '../contexts/currentUserContext';
import { NavLink } from 'react-router-dom';
import '../blocks/Header.css';

const Header = ({
  isLoggedIn,
  onCreateLoginModal,
  isMenuOpen,
  toggleMenu,
  setIsMenuOpen,
  activeModal,
  handleLogout,
}) => {
  const currentUser = useContext(currentUserContext);
  const location = useLocation();
  const isProfilePage = location.pathname === '/saved-news';

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
    setIsMenuOpen(false);
  };

  const headerLogoChange =
    isProfilePage && !isMenuOpen
      ? '/assets/NewsExplorerNewsExplorerHeaderDark.svg'
      : '/assets/headerLogoWhite.svg';

  return (
    <header className={`header ${isProfilePage ? 'header-profile-page' : ''}`}>
      <div className="header__top-bar">
        <div className="header__logo">
          <NavLink className="header__logo-link" to="/">
            <img
              src={headerLogoChange}
              alt="header logo"
              className="header__logo-image"
              onClick={handleLinkClick}
            />
          </NavLink>
        </div>

        {/* Mobile Dropdown Hamburger icon */}
        <button
          className={`header__hamburger ${isMenuOpen ? '-open' : ''} ${
            isProfilePage
              ? isMenuOpen
                ? 'header__hamburger--white'
                : 'header__hamburger--black'
              : 'header__hamburger--white'
          } `}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          style={{ className: activeModal ? 'none' : 'header__hamburger-open' }}
        >
          <div className="header__hamburger-bar header__hamburger-bar--top-bar"></div>

          <div className="header__hamburger-bar header__hamburger-bar--bottom-bar"></div>
        </button>

        <div
          className={`header__hamburger-dropdown-menu-container ${
            isMenuOpen ? 'header__hamburger-dropdown-menu-container--open' : ''
          }`}
          style={{ display: activeModal ? 'none' : 'block' }}
        >
          <nav className="header__hamburger-dropdown-menu">
            <ul className="header__hamburger-dropdown-menu-items">
              <li>
                <NavLink
                  className="header__hamburger-home-link"
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
              </li>
              {isLoggedIn && (
                <>
                  <li>
                    <NavLink
                      className="header__hamburger-saved-articles-link"
                      to="/saved-news"
                      onClick={handleLinkClick}
                    >
                      Saved Articles
                    </NavLink>
                  </li>
                  <div className="header__hamburger-user-button-outer-container">
                    <li className="header__hamburger-user-button-container">
                      <span className="header__hamburger-user-button">
                        {currentUser?.name || 'Profile'}
                      </span>
                      <button
                        className="header__hamburger-user-button--logout"
                        onClick={handleLogoutClick}
                      ></button>
                    </li>
                  </div>
                </>
              )}
              {!isLoggedIn && (
                <li className="header__hamburger-sign-in-button-container">
                  <button
                    className="header__hamburger-sign-in-button"
                    onClick={() => {
                      onCreateLoginModal();
                      handleLinkClick();
                      toggleMenu();
                    }}
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile Dropdown Hamburger Menu */}

        {/* {navigation} */}
        <nav className="header__navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink
                to="/"
                className={`header__nav-link ${
                  isProfilePage ? 'header__nav-link--profile-page' : ''
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
                        ? 'header__nav-link--profile-page--saved-articles'
                        : 'header__nav-link--home-page-inactive--saved-articles'
                    }`}
                  >
                    <span className="header__saved-articles-text">
                      Saved Articles
                    </span>
                  </NavLink>
                </li>
                <li
                  className={`header__profile ${
                    isProfilePage ? 'header__profile--profile-page' : ''
                  }`}
                >
                  <button
                    className={`header__user-button ${
                      isProfilePage ? 'header__user-button--profile-page' : ''
                    }`}
                  >
                    {currentUser?.name || 'Profile'}
                  </button>
                  <button
                    className={`header__logout-button ${
                      isProfilePage ? 'header__logout-button--profile-page' : ''
                    }`}
                    aria-label="Logout"
                    onClick={handleLogoutClick}
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
