import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import React, { Children, useState } from "react";

/** I think this is where I would map all of the cards coming in from the news api */

const NewsCardList = ({
  buttonType,
  cards,
  onSaveClick,
  onDeleteClick,
  isLoggedIn,
}) => {
  const [shownAmount, setShownAmount] = useState(3);

  let defaultShown = shownAmount;

  const threeCards = cards.filter((card, index) => index < defaultShown);

  const handleLoadMore = () => {
    setShownAmount(defaultShown + 3);
  };

  return (
    <div className="card-list">
      <div className="card-list__container">
        {Children.toArray(
          threeCards.map((card) => (
            <>
              <NewsCard
                isLoggedIn={isLoggedIn}
                card={card}
                onSaveClick={onSaveClick}
                onDeleteClick={onDeleteClick}
                buttonType={buttonType}
              />
            </>
          ))
        )}
      </div>
      {defaultShown === 100 ? (
        ""
      ) : (
        <button className="card-list__button" onClick={handleLoadMore}>
          Show more
        </button>
      )}
    </div>
  );
};

export default NewsCardList;
