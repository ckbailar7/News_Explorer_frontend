import { useState, useEffect } from "react";
import { currentUserContext } from "../contexts/currentUserContext";
import reactLogo from "../assets/react.svg";
import {
  Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import Profile from "./Profile";
import defaultCards from "../contexts/defaultCardArrayPrototype";

import "../blocks/App.css";
import Preloader from "./Preloader";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // creating useLocationCall as a variable for getting the current route
  const location = useLocation();

  // close menu when changing routes

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) =>  {
      console.log("Toggling menu:", !prevState);
      return !prevState;
  });;
}



  useEffect(() => {
    console.log(`isMenuOpen >> ${isMenuOpen}`)
  }, [isMenuOpen])

  // console.log(`isMenuOpen >> logging ...${isMenuOpen}`);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  const MobileDropdown = ({ isMenuOpen }) => {
    // useEffect(() => {
    //   if (isOpen) {
    //     document.body.classList.add("no-scroll");
    //   } else {
    //     document.body.classList.remove("no-scroll");
    //   }
    //   return () => document.body.classList.remove("no-scroll");
    // }, [isMenuOpen]);
    // return isMenuOpen ? (
    //   <div
    //     className={`header__hamburger__dropdown-menu__container ${
    //       isMenuOpen ? "open" : ""
    //     }`}
    //   >
    //     <nav className="header__hamburger__dropdown-menu">
    //       <ul className="header__hamburger__dropdown-menu-items">
    //         <li>
    //           <NavLink className="header__hamburger__home-link" to="/">
    //             Home
    //           </NavLink>
    //         </li>
    //         {isLoggedIn && (
    //           <>
    //             <li>
    //               <NavLink
    //                 className="header__hamburger__saved-articles_link"
    //                 to="/saved-news"
    //               >
    //                 Saved Articles
    //               </NavLink>
    //             </li>
    //             <div className="header__hamburger_user-button-outer_container">
    //               <li className="header__hamburger_user-button-container">
    //                 <span className="header__hamburger_user-button">
    //                   {currentUser?.name || "Profile"}
    //                 </span>
    //               </li>
    //             </div>
    //           </>
    //         )}
    //         {!isLoggedIn && (
    //           <li className="header__hamburger_sign-in-button__container">
    //             <button
    //               className="header__hamburger_sign-in-button"
    //               onClick={onCreateLoginModal}
    //             >
    //               Sign In
    //             </button>
    //           </li>
    //         )}
    //       </ul>
    //     </nav>
    //   </div>
    // ) : null;
  };

  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    name: "",
  });
  // Modal set
  const [activeModal, setActiveModal] = useState("");
  //
  //
  console.log("activeModal", activeModal);
  const [cards, setCards] = useState([]);

  const [defaultCardArray, setDefaultCardArray] = useState([]);
  // Setting isLoggedIn default value to false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useState to control preloader
  const [loading, setLoading] = useState(false);

  // simulate the api response
  const [articles, setArticles] = useState([]);

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const onBookmarkClick = () => {
    console.log("Hello from onBookmarkClick");
  };

  const onDeleteClick = () => {
    console.log("Helllo from onDeleteClick");
  };

  const handleSearch = (query) => {
    setLoading(true);

    console.log("Searching for : ", query);

    setTimeout(() => {
      setArticles([defaultCards]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setCards(defaultCards);
  }, []);

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  const closeModal = () => setActiveModal("");

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);
  return (
    <div
      id="content__container"
      className={`content__container ${
        location.pathname === "/saved-news" ? "content__container--profile" : ""
      }`}
    >
      {/* creating CurrentUser Provider with value of currentUser */}
      <currentUserContext.Provider value={currentUser}>
        <Header
          onCreateLoginModal={handleLoginModal}
          isLoggedIn={isLoggedIn}
          closeModal={closeModal}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          setIsMenuOpen={setIsMenuOpen}
          activeModal={activeModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                defaultCards={defaultCards}
                defaultCardArray={defaultCardArray}
                isLoggedIn={isLoggedIn}
                onBookmarkClick={onBookmarkClick}
                onDeleteClick={onDeleteClick}
                loading={loading} // Passing loading state to main
                handleSearch={handleSearch} // Passing handleSearch functionality to main
              />
            }
          ></Route>
          <Route
            path="/saved-news"
            element={
              <Profile
                name={"user1"}
                numberOfSavedArticles={5}
                cards={cards}
                savedArticlesKeywords={"Keyword1, Keyword2, Keyword3"}
              />
            }
          ></Route>
        </Routes>
        <Footer />

        {activeModal === "login" && (
          <LoginModal
            onClose={closeModal}
            handleSignUpModal={handleSignUpModal}
          />
        )}
        {activeModal === "signup" && (
          <SignUpModal
            onClose={closeModal}
            handleLoginModal={handleLoginModal}
          />
        )}
      </currentUserContext.Provider>
    </div>
  );
}

export default App;
