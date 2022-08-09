import "./NewsCard.css";
import placeholderImg from "../../images/card-placeholder.png";

/** NewsCard Component
 * takes the data from the news API and places it in correct place.
 * card template.
 */

const NewsCard = ({ buttonType }) => {
  const placeholderCard = {
    image: placeholderImg,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: "TreeHugger",
    key: "Nature",
  };

  /** write a handler that switches between these when the save button / trash button are hovered over */
  const signIn = "Sign in to save articles";
  const removeSaved = "Remove from saved";

  return (
    <div className="news-card">
      <div className="news-card__container">
        <span className="news-card__warning news-card__warning_hidden">
          {signIn || removeSaved}
        </span>
        <span className="news-card__keyword news-card__keyword_hidden">
          {placeholderCard.key}
        </span>
        <button className={`${buttonType}-button`}></button>
        <img
          className="news-card__image"
          src={placeholderCard.image}
          alt="Card"
        />
        <div className="news-card__text-container">
          <p className="news-card__date">{placeholderCard.date}</p>
          <p className="news-card__title">{placeholderCard.title}</p>
          <p className="news-card__text">{placeholderCard.text}</p>
          <p className="news-card__source">
            {placeholderCard.source.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
