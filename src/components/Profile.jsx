import './blocks/App.css';
import './blocks/Main.css';
import './blocks/Profile.css';
import NewsCardComponent from './NewsCardComponent';

const Profile = ({
  name,
  numberOfSavedArticles,
  cards, // Now contains only saved articles
  savedArticlesKeywords,
  isLoggedIn,
  handleRemoveNewsArticle,
  handleSaveNewsArticle,
}) => {
  // Filter the saveed articles

  //Extract the keywords from saved articles
  const savedKeywords = [...new Set(cards.map((card) => card.keyword))];

  // Formating the keywords for saved-articles route
  const formattedKeywords =
    savedKeywords.length <= 3
      ? savedKeywords.join(',')
      : `${savedKeywords.slice(0, 3).join(',')} ...`;

  console.log('Saved Articles:', cards);

  return (
    <div className="profile__container">
      <div className="profile__header-container">
        <div className="profile__header">
          <h1 className="profile__header-text">Saved Articles</h1>
        </div>
        <div className="profile__header-greeting">
          <h2 className="profile__header-greeting-text">
            {name}, you have {cards.length} articles{' '}
          </h2>

          {savedKeywords.length > 0 && (
            <h3 className="profile__header-greeting-by-keyword_container">
              <span className="profile__header-greeting-text-by-keyword">
                By Keywords:
              </span>
              <span className="profile__header-greeting-keywords">
                {formattedKeywords}
              </span>
              {/* {`By keywords: ${savedArticlesKeywords}`} */}
            </h3>
          )}
        </div>
      </div>

      <div className="profile__news-card-container">
        {cards.length > 0 ? (
          cards.map((card) => (
            <NewsCardComponent
              key={card.id}
              cardData={card}
              isLoggedIn={isLoggedIn}
              onDeleteClick={() => handleRemoveNewsArticle(card)}
              handleSaveNewsArticle={handleSaveNewsArticle}
            />
          ))
        ) : (
          <p className="profile__no-results-message">
            You have no saved articles
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
