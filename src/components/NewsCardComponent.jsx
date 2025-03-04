import NewsCardButton from "../components/NewsCardButton";
import "../blocks/NewsCardComponent.css";
import imagePlaceholder from "../assets/news-card_image-placeholder.svg";
import { useLocation } from "react-router-dom";

const NewsCardComponent = ({
  cardData,
  isLoggedIn,
  onBookmarkClick,
  onDeleteClick,
}) => {
  const { title, description, image, Date, source } = cardData;
  const location = useLocation();
  const isProfilePage = location.pathname === "/saved-news";

  // const renderActionButton = () => {
  //   if (isProfilePage) {
  //     return (
  //       <button
  //         className="news-card__delete-button"
  //         aria-label="Delete this article"
  //       ></button>
  //     );
  //   }
  //   return (
  //     <button
  //       className="news-card__bookmark-button"
  //       aria-label="Bookmark this article"
  //     ></button>
  //   );
  // };

  return (
    <article className="news-card">
      <figure className="news-card__image-container">
        <img className="news-card__image" src={image} alt={title} />
        <NewsCardButton
          isLoggedIn={isLoggedIn}
          onBookmarkClick={onBookmarkClick}
          onDeleteClick={onDeleteClick}
        ></NewsCardButton>
      </figure>
      <div className="news-card__details">
        <time className="news-card__date" dateTime={Date}>
          {Date}
        </time>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
};

export default NewsCardComponent;
