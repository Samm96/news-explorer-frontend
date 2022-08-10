import React, { useState } from "react";

import "./NewsCard.css";
import placeholderImg from "../../images/card-placeholder.png";

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

  const handleDeleteClick = () => {
    console.log("I should be deleted!");
    // onDeleteClick(cardData);
  };

  const handleSaveClick = () => {
    console.log("I'm saved!");
    //   onSaveClick(cardData);
  };

  const placeholderCard = {
    image: placeholderImg,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: "TreeHugger",
    key: "Nature",
  };

  return (
    <div className="news-card">
      <div className="news-card__container">
        <span className={`news-card__warning${isShown}`}>{message}</span>
        <span className="news-card__keyword news-card__keyword_hidden">
          {placeholderCard.key}
        </span>
        {isLoggedIn ? (
          <button
            onClick={
              buttonType === "save" ? handleSaveClick : handleDeleteClick
            }
            onMouseEnter={() => {
              buttonType === "save" ? setIsShown("_hidden") : setIsShown("");
            }}
            onMouseLeave={() => setIsShown("_hidden")}
            className={"save-button" || `${buttonType}-button`}
          ></button>
        ) : (
          <button
            onMouseEnter={() => setIsShown("")}
            onMouseLeave={() => setIsShown("_hidden")}
            className={"save-button" || `${buttonType}-button`}
          ></button>
        )}
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
