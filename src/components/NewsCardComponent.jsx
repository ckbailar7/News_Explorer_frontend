import "../blocks/NewsCardComponent.css";
import imagePlaceholder from "../assets/news-card_image-placeholder.svg";
import { useLocation } from "react-router-dom";

const NewsCardComponent = ({ cardData }) => {
  const { title, description, image, Date, source } = cardData;
  const location = useLocation();
  const isProfilePage = location.pathname === "/saved-news";

  const renderActionButton = () => {
    if (isProfilePage) {
      return (
        <button
          className="news-card__delete-button"
          aria-label="Delete this article"
        ></button>
      );
    }
    return (
      <button
        className="news-card__bookmark-button"
        aria-label="Bookmark this article"
      ></button>
    );
  };

  return (
    <article className="news-card">
      <figure className="news-card__image-container">
        <img className="news-card__image" src={image} alt={title} />
        <div className="news-card__bookmark-button--container">
          <button
            className="news-card__bookmark-button"
            aria-label="Bookmark this article"
          ></button>
        </div>
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

    // <div className="news-card">
    //   <div className="news-card__list">
    //     <div className="news-card__item">
    //       <div className="news-card__image-container">
    //         <img
    //           className="news-card__image"
    //           src={image}
    //           alt="news-card image"
    //         />
    //         <div className="news-card__bookmark-button--container">
    //           <button className="news-card__bookmark-button"></button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="news-card__details">
    //       <h2 className="news-card__date">{Date} </h2>
    //       <h3 className="news-card__title">{title}</h3>
    //       <p className="news-card__description">{description}</p>
    //       <p className="news-card__source">{source}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NewsCardComponent;
