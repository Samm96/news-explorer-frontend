import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = ({ cards }) => {
  return (
    <div className="results">
      <div className="results__container">
        <p className="results__title">Search Results</p>
        <NewsCardList cards={cards} buttonType={"save"}/>
      </div>
    </div>
  );
};

export default SearchResults;
