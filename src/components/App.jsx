import { useState, useEffect } from 'react';
import { currentUserContext } from '../contexts/currentUserContext';
import reactLogo from '../assets/react.svg';
import {
  Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import viteLogo from '/vite.svg';
import Header from './Header';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import Profile from './Profile';
import defaultCards from '../contexts/defaultCardArrayPrototype';

import '../blocks/App.css';
import Preloader from './Preloader';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(typeof setSearchQuery);
  const formatDate = (date) => date.toISOString().split('T')[0];
  const [hasSearched, setHasSearched] = useState(false);
  const [cards, setCards] = useState([]);

  // simulate removing an article from saved-news
  const handleRemoveNewsArticle = async (article) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === article.id ? { ...card, isSaved: false } : card,
        ),
      );
      console.log('Article removed successfully:', article);
    } catch (error) {
      console.error('Error removing article:', error);
    }
  };

  // simulate saving news articles to saved-news
  const handleSaveNewsArticle = async (article) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === article.id ? { ...card, isSaved: true } : card,
        ),
      );

      console.log('Article saved successfully:', article);
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  // Handle Mock Logout Functionality
  const handleLogout = async () => {
    try {
      setIsLoggedIn(false);
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error Logging out', error);
    }
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setErrorMessage('');
    setHasSearched(true);

    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);

    // const formatDate = (date) => date.toISOString().split("T")[0];

    const from = formatDate(weekAgo);
    const to = formatDate(today);

    const apiKey = import.meta.env.VITE_API_KEY;
    const base_Url = import.meta.env.VITE_BASE_URL;

    const url = `${base_Url}?q=${query}&from=${from}&to=${to}&sortBy=popularity&apiKey=${apiKey}`;

    if (!query.trim()) {
      setErrorMessage('Search cannot be empty');
      setCards([]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response ERROR');
      }

      const data = await res.json();

      if (data.articles.length === 0) {
        setCards([]);
        setErrorMessage('No articles found');
      } else {
        const cards = data.articles.map((articles, i) => ({
          id: i,
          title: articles.title,
          description: articles.description,
          image: articles.urlToImage,
          date: articles.publishedAt,
          source: articles.source.name,
          url: articles.url,
          isSaved: false,
        }));

        setCards(cards);
      }
    } catch (error) {
      setErrorMessage('An error occurred while fetching data');
      console.error('Search Failed:', error);
    } finally {
      setLoading(false);
    }
  };
  // creating useLocationCall as a variable for getting the current route
  const location = useLocation();

  // close menu when changing routes

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      console.log('Toggling menu:', !prevState);
      return !prevState;
    });
  };

  useEffect(() => {
    console.log(`isMenuOpen >> ${isMenuOpen}`);
  }, [isMenuOpen]);

  console.log('updated cards:', cards);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  // const MobileDropdown = ({ isMenuOpen }) => {

  // };

  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
    name: '',
  });
  // Modal set
  const [activeModal, setActiveModal] = useState('');
  //
  //
  console.log('activeModal', activeModal);

  const [defaultCardArray, setDefaultCardArray] = useState([]);
  // Setting isLoggedIn default value to false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useState to control preloader
  const [loading, setLoading] = useState(false);

  // simulate the api response

  const handleLoginModal = () => {
    setActiveModal('login');
  };

  const handleSignUpModal = () => {
    setActiveModal('signup');
  };

  const onBookmarkClick = () => {
    console.log('Hello from onBookmarkClick');
  };

  const onDeleteClick = () => {
    console.log('Helllo from onDeleteClick');
  };

  // const handleSearch = (query) => {
  //   setLoading(true);

  //   console.log("Searching for : ", query);

  //   setTimeout(() => {
  //     setArticles([defaultCards]);
  //     setLoading(false);
  //   }, 2000);
  // };

  useEffect(() => {
    setCards(defaultCards);
  }, []);

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  const closeModal = () => setActiveModal('');

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, []);
  return (
    <div
      id="content__container"
      className={`content__container ${
        location.pathname === '/saved-news' ? 'content__container--profile' : ''
      }`}
    >
      {/* creating CurrentUser Provider with value of currentUser */}
      <currentUserContext.Provider value={currentUser}>
        <Header
          onCreateLoginModal={handleLoginModal}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          closeModal={closeModal}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          setIsMenuOpen={setIsMenuOpen}
          activeModal={activeModal}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                defaultCards={defaultCards}
                cards={cards}
                defaultCardArray={defaultCardArray}
                isLoggedIn={isLoggedIn}
                onBookmarkClick={onBookmarkClick}
                onDeleteClick={onDeleteClick}
                loading={loading} // Passing loading state to main
                handleSearch={handleSearch} // Passing handleSearch functionality to main
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                handleSaveNewsArticle={handleSaveNewsArticle}
                handleRemoveNewsArticle={handleRemoveNewsArticle}
                hasSearched={hasSearched}
                setHasSearched={setHasSearched}
              />
            }
          ></Route>
          <Route
            path="/saved-news"
            element={
              <Profile
                name={'user1'}
                numberOfSavedArticles={5}
                // cards={cards}
                cards={cards.filter((card) => card.isSaved)}
                savedArticlesKeywords={'Keyword1, Keyword2, Keyword3'}
                isLoggedIn={isLoggedIn}
                handleRemoveNewsArticle={handleRemoveNewsArticle}
                handleSaveNewsArticle={handleSaveNewsArticle}
              />
            }
          ></Route>
        </Routes>
        <Footer />

        {activeModal === 'login' && (
          <LoginModal
            onClose={closeModal}
            handleSignUpModal={handleSignUpModal}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
        {activeModal === 'signup' && (
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
