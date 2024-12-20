import "../blocks/NewsCardComponent.css";

const NewsCardComponent = ({}) => {
  return (
    <div className="news-card">
      <h1>Search results</h1>
      <div className="news-card__list">
        <div className="news-card__item">
          <div className="news-card__image-container">
            <img className="news-card__image" src="" alt="" />
          </div>
        </div>
        <div className="news-card__details">
          <h2 className="news-card__title">TitleSubForVariable</h2>
          <p className="news-card__description"></p>
        </div>
      </div>
    </div>
  );
};

export default NewsCardComponent;
