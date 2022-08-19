import "./Main.css";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

const Main = ({ isLoading, isNotFound, isFound, cards }) => {
  return (
    <div className="main">
      <SearchResults isFound={isFound} cards={cards} />
      <Preloader isLoading={isLoading} />
      <NothingFound isNotFound={isNotFound} />
    </div>
  );
};

export default Main;
