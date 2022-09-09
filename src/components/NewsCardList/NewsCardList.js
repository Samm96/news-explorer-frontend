import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import React, { Children, useEffect, useState } from "react";

/** I think this is where I would map all of the cards coming in from the news api */

const NewsCardList = ({
  buttonType,
  cards,
  onSaveClick,
  onDeleteClick,
  isLoggedIn,
  openSignin
}) => {
  const [shownAmount, setShownAmount] = useState(3);
  const [hideButton, setHideButton] = useState("");

  let defaultShown = shownAmount;

  const threeCards = cards.filter((card, index) => index < defaultShown);

  const handleLoadMore = () => {
    setShownAmount(defaultShown + 3);
  };

  useEffect(() => {
    if (shownAmount > cards.length) {
      setHideButton("card-list__button_type_hidden");
    } else if (shownAmount === 100) {
      setHideButton("card-list__button_type_hidden");
    } else {
      setHideButton("");
    }
  }, [cards.length, shownAmount])

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
                openSignin={openSignin}
              />
            </>
          ))
        )}
      </div>
        <button className={`card-list__button ${hideButton}`} onClick={handleLoadMore}>
          Show more
        </button>
    </div>
  );
};

export default NewsCardList;
