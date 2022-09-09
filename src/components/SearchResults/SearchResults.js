import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = ({ isLoggedIn, cards, hideResults, onSaveClick, onDeleteClick, openSignin }) => {
  return (
    <section className={`results results${hideResults}`}>
      <div className="results__container">
        <h2 className="results__title">Search Results</h2>
        <NewsCardList
          isLoggedIn={isLoggedIn}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick}
          cards={cards}
          buttonType={"save"}
          openSignin={openSignin}
        />
      </div>
    </section>
  );
};

export default SearchResults;
