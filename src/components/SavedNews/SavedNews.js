import React, { Children, useContext } from "react";
import "./SavedNews.css";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const SavedNews = ({ cards, onDeleteClick, onSaveClick }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const placeholder = "Samantha";

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
    case findDuplicates.length > 2:
      keywords =
        findDuplicates.splice(0, 2).toString().split(",").join(", ") +
        ` and ${findDuplicates.length - 2} others`;
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
    default:
      keywords = "";
  }

  return (
    <section className="saved-news">
      <div className="saved-news__text-container">
        <h2 className="saved-news__title">Saved articles</h2>
        <p className="saved-news__saved">
          {currentUser || placeholder}, you have {articlesAmount} saved articles
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
