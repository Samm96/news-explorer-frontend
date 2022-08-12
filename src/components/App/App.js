import React, { useEffect, useState } from "react";
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
import RegisterModal from "../Register-Modal/Register-Modal";
import LoginModal from "../Login-Modal/Login-Modal";
import RegisterSuccess from "../RegisterSuccess-Modal/RegisterSuccess-Modal";

const App = () => {
  // placeholder
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  /** Modals */
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const closeAllPopups = () => {
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
    setIsLoginOpen(false);
  };

  useEffect(() => {
    const closeByEsc = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    }

    document.addEventListener("keydown", closeByEsc);

    return () => document.removeEventListener("keydown", closeByEsc);
  }, []);

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
                    openSigninModal={() => setIsRegisterOpen(true)}
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
                <Header
                  isLoggedIn={isLoggedIn}
                  openSigninModal={() => setIsRegisterOpen(true)}
                  logoColor={"black"}
                  textColor={"black"}
                />
                <SavedNews />
              </ProtectedRoute>
            }
          />
        </Routes>

        <RegisterModal
          isOpen={isRegisterOpen}
          openModal={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
          onClose={closeAllPopups}
        />
        <LoginModal
          isOpen={isLoginOpen}
          openModal={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
          onClose={closeAllPopups}
        />
        <RegisterSuccess
          isOpen={isSuccessOpen}
          openModal={() => {
            setIsSuccessOpen(false);
            setIsLoginOpen(true);
          }}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
