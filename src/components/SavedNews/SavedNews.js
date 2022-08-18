import React, { Children } from "react";
import "./SavedNews.css";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

const SavedNews = ({ userName, cards }) => {
  const placeholder = "Samantha";

  let articlesAmount = cards.length;
  let cardKeywords = [];
  cards.forEach((card) => cardKeywords.push(card.key));
  let findDuplicates = [...new Set(cardKeywords)];

  let keywords;

  switch (findDuplicates.length) {
    case findDuplicates.length > 2:
      keywords =
        findDuplicates.splice(0, 2).toString().split(",").join(", ") +
        ` and ${cardKeywords.length - 2} others`;
      break;
    case (findDuplicates.length = 2):
      keywords = findDuplicates.toString().split(",").join(" and ");
      break;
    case (findDuplicates.length = 1):
      keywords = findDuplicates.toString();
      break;
    case (findDuplicates.length = 0):
      keywords = "You do not have any saved articles";
      break;
    default:
      keywords = "You do not have any saved articles";
  }

  return (
    <div className="saved-news">
      <div className="saved-news__text-container">
        <p className="saved-news__title">Saved articles</p>
        <p className="saved-news__saved">
          {placeholder || userName}, you have {articlesAmount} saved articles
        </p>
        <p className="saved-news__keywords">
          By keywords: <b>{keywords}</b>
        </p>
      </div>
      <div className="saved-news__news-container">
        <div className="saved-news__cards">
          {Children.toArray(
            cards.map((card) => (
              <>
                <NewsCard card={card} buttonType={"delete"} />
              </>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedNews;
