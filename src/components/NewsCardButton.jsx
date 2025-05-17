import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './blocks/NewsCardComponent.css';

const NewsCardButton = ({
  isLoggedIn,
  onBookmarkClick,
  onDeleteClick,
  isSaved,
}) => {
  // const [hover, setHover] = useState(false);
  const location = useLocation();
  const isProfilePage = location.pathname === '/saved-news';

  // const handleBookmarkClick = () => {
  //   if (!isLoggedIn) return;
  //   setIsBookmarked((prevState) => !prevState);
  //   onBookmarkClick();
  // };

  return (
    <div>
      {isProfilePage ? (
        <div className="news-card__delete-button-container">
          <button
            className="news-card__delete-button"
            aria-label="Delete this article"
            onClick={onDeleteClick}
          ></button>
          <div className="news-card__delete-button-tooltip">
            <p className="news-card__button-tooltip-text">Remove from saved</p>
          </div>
        </div>
      ) : (
        <div className="news-card__bookmark-button-container">
          <button
            className={`news-card__bookmark-button ${
              isSaved ? 'bookmarked' : ''
            }`}
            aria-label={
              isLoggedIn
                ? isSaved
                  ? 'Remove Bookmark'
                  : 'Bookmark this article'
                : 'Sign in to save articles'
            }
            onClick={
              isLoggedIn ? (isSaved ? onDeleteClick : onBookmarkClick) : null
            }
          ></button>
        </div>
      )}

      {!isLoggedIn && !isProfilePage && (
        <div className="news-card__button-tooltip">
          <p className="news-card__button-tooltip-text">
            Sign in to save articles
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsCardButton;
