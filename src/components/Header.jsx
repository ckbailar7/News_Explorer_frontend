import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { currentUserContext } from '../contexts/currentUserContext';
import { NavLink } from 'react-router-dom';
import './blocks/Header.css';

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
  const navigate = useNavigate();
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
    setIsMenuOpen(false);
    navigate('/');
  };

  const headerLogoChange =
    isProfilePage && !isMenuOpen
      ? 'header__logo-text header__logo-text--profile-page'
      : 'header__logo-text';

  return (
    <header className={`header ${isProfilePage ? 'header-profile-page' : ''}`}>
      <div className="header__top-bar">
        <div className="header__logo">
          <NavLink className="header__logo-link" to="/">
            <div
              className={headerLogoChange}
              alt="header logo"
              onClick={handleLinkClick}
            >
              NewsExplorer
            </div>
          </NavLink>
        </div>

        {/* Mobile Dropdown Hamburger icon */}
        <button
          className={`header__hamburger ${isMenuOpen ? '-open' : ''} ${
            isProfilePage
              ? isMenuOpen
                ? 'header__hamburger header__hamburger--white'
                : 'header__hamburger header__hamburger--black'
              : 'header__hamburger header__hamburger--white'
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
            isMenuOpen ? ' header__hamburger-dropdown-menu-container--open' : ''
          }`}
          style={{ display: activeModal ? 'none' : 'block' }}
        >
          <nav
            className="header__hamburger-dropdown-menu"
            aria-label="Mobile navigation"
          >
            <ul className="header__hamburger-dropdown-menu-items">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `header__hamburger-link${isActive ? ' active' : ''}`
                  }
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
                      className={({ isActive }) =>
                        `header__hamburger-link${isActive ? ' active' : ''}`
                      }
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
                        className="header__hamburger-user-button header__hamburger-user-button--logout"
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
        <nav className="header__navigation" aria-label="Main navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              {/* <NavLink
                to="/"
                className={`header__nav-link ${
                  isProfilePage
                    ? 'header__nav-link header__nav-link--profile-page'
                    : ''
                }`}
              > */}

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `header__nav-link ${isProfilePage ? 'header__nav-link--profile-page' : ''}${isActive ? ' active' : ''}`
                }
              >
                <span
                  className={`header__nav-text ${isProfilePage ? 'header__nav-text--profile-page' : ''}`}
                >
                  Home
                </span>
              </NavLink>
            </li>
            {isLoggedIn && (
              <>
                <li className="header__saved-articles">
                  <NavLink
                    to="/saved-news"
                    className={({ isActive }) =>
                      `header__nav-link ${isProfilePage ? 'header__nav-link--profile-page-saved-articles' : ''}${isActive ? ' active' : ''}`
                    }
                  >
                    <span
                      className={`header__nav-text--saved-articles ${isProfilePage ? 'header__nav-text--profile-page-saved-articles' : ''}`}
                    >
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
