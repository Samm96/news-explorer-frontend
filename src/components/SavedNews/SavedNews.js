import React, { Children } from "react";
import "./SavedNews.css";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

const SavedNews = ({ cards, onDeleteClick, onSaveClick, user }) => {
  let articlesAmount = cards.length === 0 ? 0 : cards.length;
  let cardKeywords = [];

  /** takes each keyword from every card, capitalizes first letter and pushes 
   * the result into the initially empty `cardKeyowrds` array*/ 
  cards.forEach((card) => {
    cardKeywords.push(
      card.keyword.charAt(0).toUpperCase() + card.keyword.slice(1)
    );
  });

  /** takes the `cardKeywords` and goes through to see how many times each
   * word appears in the array and stores that result in a new, empty array,
   * `occurrences`. Result: an array of key:values. i.e. ["Dogs" : 3, "Celebrities" : 2, ....] */
  let occurrences = [];
  for (var i = 0; i < cardKeywords.length; ++i) {
    if (!occurrences[cardKeywords[i]]) occurrences[cardKeywords[i]] = 0;
    ++occurrences[cardKeywords[i]];
  }

  /** takes the `occurrences` and refactors it into an array of smaller arrays in order
   * to separate the numbers from the keywords. Result: an array of smaller arrays. i.e. [["Dogs", 3], ...] */
  let results = [];
  for (var count in occurrences) {
      results.push([count, occurrences[count]]);
  }

  
  /** reorders the values from highest to lowest count number (of which the keyword appeared)
   * of each keyword*/
  results.sort(function(a, b) {
      return b[1] - a[1];
  });

  /** creates a new array with the correct order of keywords based on how many times
   * they appeared in the initial array, `cardKeywords`. Result: an array of keywords. */
  const entriesArray = results.map(function(word) {
    return word[0];
  })

  let keywords;

  if (entriesArray.length > 3) {
    keywords =
      entriesArray.slice(0, 2).toString().split(",").join(", ") +
      ` and ${entriesArray.length - 2} other(s)`;
  } else if (entriesArray.length === 3) {
    keywords =
    entriesArray.slice(0, 2).toString().split(",").join(", ") +
      ` and ${entriesArray.length - 2} other(s)`;
  } else if (entriesArray.length === 3 || 2) {
    keywords = entriesArray.toString().split(",").join(" and ");
  } else if (entriesArray.length === 1) {
    keywords = entriesArray.toString();
  } else if (entriesArray.length === 0) {
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
