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
import NavigationModal from "../NavigationModal/NavigationModal";
import Modal from "../Modal/Modal";
import RegisterSuccessModal from "../RegisterSuccess-Modal/RegisterSuccess-Modal";

const App = () => {
  // placeholder
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  /** Modals */
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeAllPopups = () => {
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
    setIsLoginOpen(false);
    setIsMobileNavOpen(false);
  };

  /** closes modal using esc and if clicked outside of modal */
  useEffect(() => {
    const closeByEsc = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    const clickClose = (e) => {
      if (
        e.target.className.includes("modal__overlay") ||
        e.target.className.includes("nav-modal__overlay")
      ) {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEsc);
    document.addEventListener("mousedown", clickClose);

    return () => {
      document.removeEventListener("keydown", closeByEsc);
      document.removeEventListener("mousedown", clickClose);
    };
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <LoginModal isOpen={true}/>
        <NavigationModal isOpen={isMobileNavOpen} onClose={closeAllPopups} />
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
                    openSigninModal={() => setIsRegisterOpen(true)}
                    openMobileModal={() => setIsMobileNavOpen(true)}
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
                  logoColor={"black"}
                  textColor={"black"}
                  openSigninModal={() => setIsRegisterOpen(true)}
                  openMobileModal={() => setIsMobileNavOpen(true)}
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
