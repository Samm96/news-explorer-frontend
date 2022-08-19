import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../Register-Modal/Register-Modal";
import LoginModal from "../Login-Modal/Login-Modal";
import RegisterSuccess from "../RegisterSuccess-Modal/RegisterSuccess-Modal";
import NavigationModal from "../NavigationModal/NavigationModal";
import { NewsApi } from "../../utils/NewsExplorerApi";
import placeholderCard from "../../utils/constants"; // only being used for testing
import Main from "../Main/Main";
import SearchResults from "../SearchResults/SearchResults";

const App = () => {
  // placeholder
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  // const [savedCards, setSavedCards] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [main, setMain] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [results, setResults] = useState(false);

  /******************************************************************************************** */
  /** **************************************** Modals *******************************************/

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  /******************************************************************************************** */
  /** *************************************************************************************** */

  const handleNewsSearch = (userKeyword) => {
    console.log(userKeyword);
    // NewsApi.getNews(userKeyword)
    //   .then((cardData) => {
    //     cardData['keyword'] = userKeyword;
    //     localStorage.setItem("cards", JSON.stringify(cardData));
    //   })
    //   .then(() => {
    //     handleSearchResults();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleSearchResults = () => {
    const cardData = JSON.parse(localStorage.getItem("cards"));
    const newsArticles = cardData.articles;
    newsArticles.forEach((article) => (article["keyword"] = cardData.keyword));
    setCards(newsArticles);
  };

  /******************************************************************************************** */
  /************************************* Handles `Main` behavior *******************************/

  const handleLoading = () => {
    setMain(true);
    setIsLoading(true);
  };

  const handleSearchSuccess = () => {
    setMain(true);
    setResults(true);
  };

  const handleNothingFound = () => {
    setMain(true);
    setIsNotFound(true);
  };

  const closeMain = () => {
    setMain(false);
    setIsNotFound(false);
    setResults(false);
    setIsLoading(false);
  };

  /******************************************************************************************** */
  /** *************************************************************************************** */

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
        <NavigationModal
          isOpen={isMobileNavOpen}
          isLoggedIn={isLoggedIn}
          openLoginModal={() => setIsLoginOpen(true)}
          onClose={closeAllPopups}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchForm onSubmit={handleSearchResults}>
                  <Header
                    isLoggedIn={isLoggedIn}
                    logoColor={"white"}
                    textColor={""}
                    openSigninModal={() => setIsRegisterOpen(true)}
                    openMobileModal={() => setIsMobileNavOpen(true)}
                  />
                </SearchForm>

                <SearchResults cards={cards} />
                {/* {main === true ? (
                  <Main
                    isLoading={isLoading}
                    isNotFound={isNotFound}
                    isFound={results}
                    cards={cards}
                  />
                ) : null} */}
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
                <SavedNews cards={placeholderCard} />{" "}
                {/** replace `placeholderCard` with `savedCards` */}
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
