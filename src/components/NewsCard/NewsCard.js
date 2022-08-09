import "./NewsCard.css";
import placeholderImg from "../../images/card-placeholder.png";

const NewsCard = () => {
  const placeholderCard = {
    image: placeholderImg,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: "TreeHugger",
  };

  return (
    <div className="news-card">
      <div className="news-card__container">
      <img
        className="news-card__image"
        src={placeholderCard.image}
        alt="Card"
      />
      <div className="news-card__text-container">
        <p className="news-card__date">{placeholderCard.date}</p>
        <p className="news-card__title">{placeholderCard.title}</p>
        <p className="news-card__text">{placeholderCard.text}</p>
        <p className="news-card__source">{placeholderCard.source}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
