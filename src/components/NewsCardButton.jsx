import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../blocks/NewsCardComponent.css";

const NewsCardButton = ({ isLoggedIn, onBookmarkClick, onDeleteClick }) => {
  // const [hover, setHover] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const location = useLocation();
  const isProfilePage = location.pathname === "/saved-news";

  const handleBookmarkClick = () => {
    if (!isLoggedIn) return;
    setIsBookmarked((prevState) => !prevState);
    onBookmarkClick();
  };

  return (
    <div>
      {isProfilePage ? (
        <div className="news-card__delete-button--container">
          <button
            className="news-card__delete-button"
            aria-label="Delete this article"
            onClick={onDeleteClick}
          ></button>
        </div>
      ) : (
        <div
          className="news-card__bookmark-button--container"
          onClick={handleBookmarkClick}
        >
          <button
            className={`news-card__bookmark-button ${
              isBookmarked ? "bookmarked" : ""
            }`}
            aria-label="Bookmark this article"
          ></button>
        </div>
      )}

      {!isLoggedIn && !isProfilePage && (
        <div className="news-card__button--tooltip">
          <p className="news-card__button--tooltip--text">
            Sign in to save articles
          </p>
        </div>
      )}
      {isProfilePage && (
        <div className="news-card__button--tooltip">
          <p className="news-card__button--tooltip--text">Remove from saved</p>
        </div>
      )}
    </div>
  );
};

export default NewsCardButton;
