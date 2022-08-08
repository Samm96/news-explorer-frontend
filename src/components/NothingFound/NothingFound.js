import "./NothingFound.css";
import notFoundIcon from "../../images/not-found_icon.png";

const NothingFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <img
          className="not-found__icon"
          src={notFoundIcon}
          alt="Not Found Icon"
        />
        <p className="not-found__text">Nothing found</p>
        <p className="not-found__subtext">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
};

export default NothingFound;
