import "../blocks/App.css";
import "../blocks/Main.css";
import "../blocks/Profile.css";
import NewsCardComponent from "./NewsCardComponent";

const Profile = ({
  name,
  numberOfSavedArticles,
  cards,
  savedArticlesKeywords,
}) => {
  // function to extract top 3 most used keywords from cardData; articles.
  const getTopKeywords = (cards) => {
    // Initialize an empty object
    const keywordCount = {};

    // loops through cards and accounts for the occurence of each keyword
    cards.forEach((keyword) => {
      if (keyword) {
        keywordCount[keyword] === (keywordCount[keyword] || 0) + 1;
      }
    });

    //Sorting keywords by frequency (how often they appear when reading each card in the array)

    const sortedKeywords = Object.entries(keywordCount).sort();
  };

  return (
    <div className="profile__container">
      <div className="profile__header1">
        <h3 className="profile__header1-text">Saved Articles</h3>
      </div>
      <div className="profile__header-greeting">
        <h1 className="profile__header-greeting-text">{`Hello ${name}, you have ${numberOfSavedArticles} saved articles `}</h1>
        <h3 className="profile__header-greeting-byKeyword">{`By keywords: ${savedArticlesKeywords}`}</h3>
      </div>
      <div className="profile__newsCard-container">
        {cards.map((card) => (
          <NewsCardComponent key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
