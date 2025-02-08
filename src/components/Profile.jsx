import "../blocks/App.css";
import "../blocks/Main.css";
import NewsCardComponent from "./NewsCardComponent";

const Profile = ({
  name,
  numberOfSavedArticles,
  cards,
  savedArticlesKeywords,
}) => {
  return (
    <div className="profile__container">
      <div className="profile__header1">
        <h3 className="profile__header1-text">Saved Articles</h3>
      </div>
      <div className="profile__header-greeting">
        <h1 className="profile__header-greeting-text">{`Hello ${name}, you have ${numberOfSavedArticles} saved articles `}</h1>
        <h3 className="profile__header-greeting-byKeyword">{`By kewords: ${savedArticlesKeywords}`}</h3>
      </div>
      <div className="NewsCardComponent__wrapper">
        {cards.map((card) => (
          <NewsCardComponent key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
