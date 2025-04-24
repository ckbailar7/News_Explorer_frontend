import '../blocks/Main.css';
import SearchFormComponent from '../components/SearchFormComponent';
import NewsCardComponent from './NewsCardComponent';
import AboutComponent from '../components/AboutComponent';
// import defaultCards from "../contexts/defaultCardArrayPrototype";
import { useEffect, useState } from 'react';
import Preloader from './Preloader';

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
          <h1 className="news-section__header">Search results</h1>
          <div className="news-section__card-wrapper">
            {!hasSearched ? (
              <p className="no-search-menu">Please search Something</p>
            ) : visibleCards.length > 0 ? (
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
          {visibleCount < cards.length && (
            <button
              className="news-section__show-more-button"
              onClick={() => setVisibleCount((prev) => prev + 3)}
            >
              Show more
            </button>
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
