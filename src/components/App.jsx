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
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    name: "",
  });
  // Modal set
  const [activeModal, setActiveModal] = useState("");
  //
  //
  const [cards, setCards] = useState([]);

  const [defaultCardArray, setDefaultCardArray] = useState([]);
  // Setting isLoggedIn default value to false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useState to control preloader
  const [loading, setLoading] = useState(false);

  // simulate the api response
  const [articles, setArticles] = useState([]);

  // creating useLocationCall as a variable for getting the current route
  const location = useLocation();

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
  // useEffect(() => {
  //   setIsLoading(true);
  //   const timer = setTimeout(() => setIsLoading(false), 3000); // setting preloader response time as 3000 miliseconds or 3 seconds
  //   return () => clearTimeout(timer); // cleanup after use
  // }, []);
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
