import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import React, { Children } from "react";

/** I think this is where I would map all of the cards coming in from the news api */

const NewsCardList = ({ buttonType, cards }) => {
  const threeCards = cards.filter((card, index) => index < 3);

  return (
    <div className="card-list">
      <div className="card-list__container">
        {Children.toArray(
          threeCards.map((card) => (
            <NewsCard card={card} buttonType={buttonType} />
          ))
        )}
      </div>
    </div>
  );
};

export default NewsCardList;
