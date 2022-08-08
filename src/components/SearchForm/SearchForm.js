import "./SearchForm.css";

const SearchForm = ({ handleSubmit, children }) => {
  return (
    <div className="search-form">
      {children}
      <div className="search-form__container">
        <p className="search-form__text">What's going on in the world?</p>
        <p className="search-form__subtext">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form name="search" onSubmit={handleSubmit}>
          <div className="search-form__bar">
            <input
              className="search-form__input"
              type="text"
              placeholder="Enter topic"
            ></input>
            <button
              className="search-form__button"
              type="search"
              id="search-button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
