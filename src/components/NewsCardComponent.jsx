import NewsCardButton from '../components/NewsCardButton';
import '../blocks/NewsCardComponent.css';
import imagePlaceholder from '../assets/news-card_image-placeholder.svg';
import { useLocation } from 'react-router-dom';

const NewsCardComponent = ({
  cardData,
  isLoggedIn,
  onBookmarkClick,
  onDeleteClick,
}) => {
  const { title, description, image, date, source, keyword } = cardData;
  const location = useLocation();
  const isProfilePage = location.pathname === '/saved-news';

  console.log('Raw date value:', date);

  const formattedDate = date ? new Date(date) : new Date();

  if (!date && isNaN(formattedDate)) {
    console.error('Invalid date format:', date);
    return <div>Error: Invalid Date Format</div>;
  }

  return (
    <article className="news-card">
      <figure className="news-card__image-container">
        <img className="news-card__image" src={image} alt={title} />
        <NewsCardButton
          isLoggedIn={isLoggedIn}
          onBookmarkClick={onBookmarkClick}
          onDeleteClick={onDeleteClick}
        ></NewsCardButton>
        {isProfilePage && (
          <div className="news-card__keyword">
            <p className="news-card__keyword-text">{keyword}</p>
          </div>
        )}
      </figure>
      <div className="news-card__details">
        <time className="news-card__date" dateTime={date}>
          {new Date(date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
};

export default NewsCardComponent;
