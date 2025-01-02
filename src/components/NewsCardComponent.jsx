import "../blocks/NewsCardComponent.css";
import imagePlaceholder from "../assets/news-card_image-placeholder.svg";

const NewsCardComponent = ({ cardData }) => {
  const { title, description, image, Date } = cardData;

  return (
    <div className="news-card">
      <div className="news-card__list">
        <div className="news-card__item">
          <div className="news-card__image-container">
            <img
              className="news-card__image"
              src={image}
              alt="news-card image"
            />
            <button className="news-card__bookmark-button"></button>
          </div>
        </div>
        <div className="news-card__details">
          <h2 className="news-card__date">{Date} </h2>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCardComponent;
