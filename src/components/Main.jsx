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
}) => {
  const [cards, setCards] = useState([]);
  // simulate fetching data from database
  useEffect(() => {
    setCards(defaultCards);
  }, []);
  return (
    <main className="main">
      <SearchFormComponent handleSearch={handleSearch} loading={loading} />

      {loading ? (
        <Preloader />
      ) : (
        <section className="news-section">
          <h1 className="news-card__header">Search results</h1>
          <div className="news-cards-wrapper">
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
          <button className="news-cards__showMore-button">Show more</button>
        </section>
      )}

      <section className="about-section">
        <AboutComponent />
      </section>
    </main>
  );
};

export default Main;
