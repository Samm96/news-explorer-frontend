import React, { useState, useEffect, Children } from 'react';
import "./SavedNews.css";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

const SavedNews = ({ userName, cards }) => {
  const placeholder = "Samantha";

  let articlesAmount = cards.length;
  let cardKeywords = [];

  cards.forEach((card) => cardKeywords.push(card.key));
  let keywordString = cardKeywords.toString().split(',').join(', ');

  console.log(keywordString)

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
          {placeholder || userName}, you have {articlesAmount}{" "}
          saved articles
        </p>
        <p className="saved-news__keywords">
          By keywords: <b>{placeholderData.keywords}</b>
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
