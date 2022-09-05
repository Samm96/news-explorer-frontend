import React, { Children } from "react";
import "./SavedNews.css";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

const SavedNews = ({ cards, onDeleteClick, onSaveClick, user }) => {
  let articlesAmount = cards.length === 0 ? 0 : cards.length;
  let cardKeywords = [];

  cards.forEach((card) => {
    cardKeywords.push(
      card.keyword.charAt(0).toUpperCase() + card.keyword.slice(1)
    );
  });

  let findDuplicates = [...new Set(cardKeywords)];

  let keywords;

  switch (findDuplicates.length) {
    case (findDuplicates.length = 3):
      keywords =
        findDuplicates.slice(0, 2).toString().split(",").join(", ") +
        ` and ${findDuplicates.length - 2} other(s)`;
      break;
    case (findDuplicates.length = 2):
      keywords = findDuplicates.toString().split(",").join(" and ");
      break;
    case (findDuplicates.length = 1):
      keywords = findDuplicates.toString();
      break;
    case (findDuplicates.length = 0):
      keywords = "";
      break;
    case findDuplicates.length:
      keywords =
        findDuplicates.slice(0, 2).toString().split(",").join(", ") +
        ` and ${findDuplicates.length - 2} other(s)`;
      break;
    default:
      keywords = "";
  }

  return (
    <section className="saved-news">
      <div className="saved-news__text-container">
        <h1 className="saved-news__title">Saved articles</h1>
        <p className="saved-news__saved">
          {user}, you have {articlesAmount} saved article(s)
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
                <NewsCard
                  card={card}
                  buttonType={"delete"}
                  onDeleteClick={onDeleteClick}
                  onSaveClick={onSaveClick}
                />
              </>
            ))
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SavedNews;
