import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = () => {
  return (
    <div className="results">
      <div className="results__container">
        <p className="results__title">Search Results</p>
        <NewsCardList />
        <button className="results__button">Show more</button>
      </div>
    </div>
  );
};

export default SearchResults;
