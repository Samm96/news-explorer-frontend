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
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";

const App = () => {
  // placeholder
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact
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
            exact
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Header isLoggedIn={isLoggedIn} logoColor={"black"} textColor={"black"} />
                <SavedNews />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Register />
        <Login />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
