import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchForm>
                <Header
                  isLoggedIn={isLoggedIn}
                  logoColor={"white"}
                  textColor={""}
                />
              </SearchForm>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <>
              <Header
                isLoggedIn={true}
                logoColor={"black"}
                textColor={"black"}
              />
              <SavedNews />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
