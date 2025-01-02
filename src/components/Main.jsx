import "../blocks/Main.css";
import SearchFormComponent from "../components/SearchFormComponent";
import NewsCardComponent from "./NewsCardComponent";
import AboutComponent from "../components/AboutComponent";
import defaultCards from "../contexts/defaultCardArrayPrototype";
import { useEffect, useState } from "react";

const Main = ({}) => {
  const [cards, setCards] = useState([]);

  // simulate frtching data from database
  useEffect(() => {
    setCards(defaultCards);
  }, []);
  console.log("Cards State :", cards);
  return (
    // Main — the main component of the main page
    <main className="main">
      <SearchFormComponent />
      <h1 className="news-card__header">Search results</h1>
      {/* NewsCard — the news articles */}
      <div className="NewsCardComponent__wrapper">
        {cards.map((card) => (
          <NewsCardComponent key={card.id} cardData={card} />
        ))}
      </div>

      {/* About — the component that displays information about the author */}
      <div className="AboutComponent__wrapper">
        <AboutComponent />
      </div>
    </main>
  );
};

export default Main;
