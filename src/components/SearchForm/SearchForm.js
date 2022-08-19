import "./SearchForm.css";
import React, { useState, useEffect } from "react";

const SearchForm = ({ onSubmit, children }) => {
  /** the handleSubmit will transfer to App.js and that is where you'd probably get
   * the information from the NewsApi.
   */

  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userKeyword = {
      keyword,
    };
    onSubmit(userKeyword);
  };

  const handleInputReset = () => {
    setKeyword("");
  };

  useEffect(() => {
    handleInputReset();
  }, []);

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
              name="keyword"
              id="keyword"
              placeholder="Enter topic"
              onChange={(e) => setKeyword(e.target.value)}
            ></input>
            <button
              className="search-form__button"
              type="submit"
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
