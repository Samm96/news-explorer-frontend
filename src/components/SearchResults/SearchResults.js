import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = ({ cards }) => {
  return (
    <div className="results">
      <div className="results__container">
        <p className="results__title">Search Results</p>
        <NewsCardList cards={cards} buttonType={"save"}/>
        <button className="results__button">Show more</button>
      </div>
    </div>
  );
};

export default SearchResults;
