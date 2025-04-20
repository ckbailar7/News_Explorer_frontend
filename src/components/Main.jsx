import "../blocks/Main.css";
import SearchFormComponent from "../components/SearchFormComponent";
import NewsCardComponent from "./NewsCardComponent";
import AboutComponent from "../components/AboutComponent";
// import defaultCards from "../contexts/defaultCardArrayPrototype";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";

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
  cards
}) => {
  
  // simulate fetching data from database
  
  console.log(typeof setSearchQuery)
  return (
    <main className="main">
      <SearchFormComponent handleSearch={handleSearch} loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />

      {loading ? (
        <Preloader />
      ) : (
        <section className="news-section">
          <h1 className="news-section__header">Search results</h1>
          <div className="news-section__card-wrapper">
            {cards.map((card) => (
              <NewsCardComponent
                key={card.id}
                cardData={card}
                isLoggedIn={isLoggedIn}
                onBookmarkClick={onBookmarkClick}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </div>
          <button className="news-section__show-more-button">Show more</button>
        </section>
      )}

      <section className="main__about-section">
        <AboutComponent />
      </section>
    </main>
  );
};

export default Main;
