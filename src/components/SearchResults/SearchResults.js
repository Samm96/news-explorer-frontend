import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = ({ cards, hideResults, imageLoading }) => {
  return (
    <div className={`results results${hideResults}`}>
      <div className="results__container">
        <p className="results__title">Search Results</p>
        <NewsCardList cards={cards} imageLoading={imageLoading} buttonType={"save"}/>
      </div>
    </div>
  );
};

export default SearchResults;
