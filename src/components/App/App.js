import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

const App = () => {
  // placeholder
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      {/* <SearchForm>
        <Header isLoggedIn={isLoggedIn} />
      </SearchForm>
      <About />
      <Footer /> */}
      <SavedNews />
    </div>
  );
};

export default App;
