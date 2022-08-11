import "./SavedNews.css";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

const SavedNews = ({ userName }) => {
  const placeholder = "Samantha";

  /** keywords is probably going to be an array */
  const placeholderData = {
    savedArticles: 5,
    keywords: "Nature, Yellowstone and 2 others",
  };

  return (
    <div className="saved-news">
      <div className="saved-news__text-container">
        <p className="saved-news__title">Saved articles</p>
        <p className="saved-news__saved">
          {placeholder || userName}, you have {placeholderData.savedArticles}{" "}
          saved articles
        </p>
        <p className="saved-news__keywords">
          By keywords: <b>{placeholderData.keywords}</b>
        </p>
      </div>
      <div className="saved-news__news-container">
        <div className="saved-news__cards">
          <NewsCard buttonType={"delete"}/>
          <NewsCard buttonType={"delete"}/>
          <NewsCard buttonType={"delete"}/>
          <NewsCard buttonType={"delete"}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedNews;
