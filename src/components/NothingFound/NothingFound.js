import "./NothingFound.css";
import notFoundIcon from "../../images/Icons/not-found_icon.png";

const NothingFound = () => {
  return (
      <div className="not-found">
        <img
          className="not-found__icon"
          src={notFoundIcon}
          alt="Not Found Icon"
        />
        <p className="not-found__text">Nothing found</p>
        <p className="not-found__subtext">Sorry, but nothing matched</p>
        <p className="not-found__subtext">your search terms.</p>
      </div>
  );
};

export default NothingFound;
