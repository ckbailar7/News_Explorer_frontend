import '../blocks/Main.css';
import SearchFormComponent from '../components/SearchFormComponent';
import NewsCardComponent from './NewsCardComponent';
import AboutComponent from '../components/AboutComponent';
// import defaultCards from "../contexts/defaultCardArrayPrototype";
import { useEffect, useState } from 'react';
import Preloader from './Preloader';
import FrownyFaceImage from '../assets/not-found_v1.svg';

const Main = ({
  isLoggedIn,
  defaultCardArray,
  onBookmarkClick,
  onDeleteClick,
  loading,
  handleSearch,
  defaultCards,
  searchQuery,
  setSearchQuery,
  errorMessage,
  setErrorMessage,
  cards,
  handleSaveNewsArticle,
  handleRemoveNewsArticle,
  hasSearched,
  setHasSearched,
  visibleCount,
  setVisibleCount,
}) => {
  // simulate fetching data from database

  const visibleCards = cards.slice(0, visibleCount);

  return (
    <main className="main">
      <SearchFormComponent
        handleSearch={handleSearch}
        loading={loading}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />

      {loading ? (
        <Preloader />
      ) : (
        <section className="news-section">
          {hasSearched && visibleCards.length === 0 ? (
            <div className="nothing-found">
              <img
                src={FrownyFaceImage}
                alt="Frowny Face"
                className="nothing-found__image"
              />
              <h2 className="nothing-found__header">Nothing Found</h2>
              <p className="nothing-found__text">
                Sorry, but nothing matched your search terms.
              </p>
            </div>
          ) : (
            <>
              <h1 className="news-section__header">Search results</h1>
              <div className="news-section__card-wrapper">
                {visibleCards.length > 0 ? (
                  visibleCards.map((card) => (
                    <NewsCardComponent
                      key={card.id}
                      cardData={card}
                      isLoggedIn={isLoggedIn}
                      onBookmarkClick={onBookmarkClick}
                      onDeleteClick={onDeleteClick}
                      handleSaveNewsArticle={handleSaveNewsArticle}
                      handleRemoveNewsArticle={handleRemoveNewsArticle}
                    />
                  ))
                ) : (
                  <p className="no-results-message">No results found</p>
                )}
              </div>
              {hasSearched &&
                visibleCount < cards.length &&
                visibleCards.length > 0 && (
                  <button
                    className="news-section__show-more-button"
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                  >
                    Show more
                  </button>
                )}
            </>
          )}
        </section>
      )}

      <section className="main__about-section">
        <AboutComponent />
      </section>
    </main>
  );
};

export default Main;
