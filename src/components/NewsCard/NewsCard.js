import React, { useState } from "react";

import "./NewsCard.css";

/** NewsCard Component
 * takes the data from the news API and places it in correct place.
 * card template.
 */

const NewsCard = ({
  buttonType,
  message,
  isLoggedIn,
  onSaveClick,
  onDeleteClick,
  isLoading,
  card,
}) => {
  const [isShown, setIsShown] = useState("_hidden");

  switch (buttonType) {
    case "save":
      message = "Sign in to save articles";
      break;
    case "delete":
      message = "Remove from saved";
      break;
    default:
      message = "Sign in to save articles";
  }

  const convertedPublishedDate = new Date(card.publishedAt).toLocaleString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const handleDeleteClick = () => {
    console.log("I should be deleted!");
    // onDeleteClick(cardData);
  };

  const handleSaveClick = () => {
    console.log("I'm saved!");
    //   onSaveClick(cardData);
  };

  return (
    <div className="news-card">
      <div className="news-card__container">
        <span className={`news-card__warning${isShown}`}>{message}</span>
        {isLoggedIn ? (
          <button
            onClick={
              buttonType === "save" ? handleSaveClick : handleDeleteClick
            }
            onMouseEnter={() => {
              buttonType === "save" ? setIsShown("_hidden") : setIsShown("");
            }}
            onMouseLeave={() => setIsShown("_hidden")}
            className={`${buttonType}-button`}
          ></button>
        ) : (
          <button
            onMouseEnter={() => setIsShown("")}
            onMouseLeave={() => setIsShown("_hidden")}
            className={`${buttonType}-button`}
          ></button>
        )}
        <span
          className={
            buttonType === "delete"
              ? "news-card__keyword"
              : "news-card__keyword news-card__keyword_hidden"
          }
        >
          {card.keyword}
        </span>
        <img className="news-card__image" src={card.urlToImage} alt="Card" />
        <div className="news-card__text-container">
          <p className="news-card__date">{convertedPublishedDate}</p>
          <p className="news-card__title">{card.title}</p>
          <p className="news-card__text">{card.description}</p>
          <p className="news-card__source">{card.source.name.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
