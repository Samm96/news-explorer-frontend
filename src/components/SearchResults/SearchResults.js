import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = ({ cards, hideResults, onSaveClick }) => {
  return (
    <div className={`results results${hideResults}`}>
      <div className="results__container">
        <p className="results__title">Search Results</p>
        <NewsCardList onSaveClick={onSaveClick} cards={cards} buttonType={"save"}/>
      </div>
    </div>
  );
};

export default SearchResults;
