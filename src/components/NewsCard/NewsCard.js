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
  card,
}) => {
  const [isShown, setIsShown] = useState("_hidden");
  const [isSaved, setIsSaved] = useState("");

  const convertedPublishedDate = new Date(card.publishedAt).toLocaleString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const keyword = card.keyword.charAt(0).toUpperCase() + card.keyword.slice(1);

  const newCard = {
    keyword: keyword,
    title: card.title,
    text: card.description,
    date: convertedPublishedDate,
    source: card.source.name || card.source.id,
    link: card.url,
    image: card.urlToImage,
  }

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

  const handleSaveClick = () => {
    console.log("I'm saved!");
    setIsSaved("save-button__active");
    onSaveClick(newCard);
  };

  const handleDeleteClick = () => {
    console.log("I should be deleted!");
    // onDeleteClick(newCard);
  };

  const toggleSaveButton = () => {
    if (isSaved === "") {
      handleSaveClick();
    } else {
      setIsSaved("");
      handleDeleteClick();
    }
  };

  return (
    <div className="news-card">
      <div className="news-card__container">
        <span className={`news-card__warning news-card__warning${isShown}`}>
          {message}
        </span>
        {isLoggedIn ? (
          <button
            onClick={
              buttonType === "save" ? toggleSaveButton : handleDeleteClick
            }
            onMouseEnter={() => {
              if (buttonType === "delete") {
                setIsShown("");
              }
            }}
            onMouseLeave={() => setIsShown("_hidden")}
            className={
              buttonType === "save"
                ? `${buttonType}-button ${isSaved}`
                : `${buttonType}-button`
            }
          ></button>
        ) : (
          <button
            onMouseEnter={() => setIsShown("")}
            onMouseLeave={() => setIsShown("_hidden")}
            className={`${buttonType}-button`}
            onClick={null}
          ></button>
        )}
        <span
          className={
            buttonType === "delete"
              ? "news-card__keyword"
              : "news-card__keyword news-card__keyword_hidden"
          }
        >
          {keyword}
        </span>
        <a href={newCard.link}>
          <img className="news-card__image" src={newCard.image} alt="Card" />
        </a>
        <div className="news-card__text-container">
          <p className="news-card__date">{newCard.date}</p>
          <h2 className="news-card__title">{newCard.title}</h2>
          <p className="news-card__text">{newCard.text}</p>
          <p className="news-card__source">{newCard.source.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
