import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../Register-Modal/Register-Modal";
import LoginModal from "../Login-Modal/Login-Modal";
import RegisterSuccess from "../RegisterSuccess-Modal/RegisterSuccess-Modal";
import NavigationModal from "../NavigationModal/NavigationModal";
import { NewsApi } from "../../utils/NewsExplorerApi";
import Main from "../Main/Main";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import SomethingWentWrong from "../SomethingWentWrong/SomethingWentWrong";
import * as auth from "../../utils/auth";
import { api } from "../../utils/Api";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [username, setUsername] = useState("");

  const [isRegisterLoad, setIsRegisterLoad] = useState(false);
  const [isLoginLoad, setIsLoginLoad] = useState(false);

  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [submitError, setSubmitError] = useState("");

  const [isLoading, setIsLoading] = useState("_hidden");
  const [isNotFound, setIsNotFound] = useState("_hidden");
  const [isResults, setResults] = useState("_hidden");
  const [isInternalIssue, setIsInternalIssue] = useState("_hidden");

  const userHistory = useNavigate();

  /******************************************************************************************** */
  /** **************************************** Modals *******************************************/

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  /******************************************************************************************** */
  /** ************************ Check for token & Get Saved Articles Info ********************** */

  useEffect(() => {
    const userToken = localStorage.getItem("jwt");

    if (userToken) {
      auth
        .checkToken(userToken)
        .then((res) => {
          if (res) {
            setUsername(res.data.name);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }

    if (userToken && isLoggedIn) {
      api
        .getAppInfo(userToken)
        .then(([userData, savedArticleData]) => {
          const user = userData.data;
          setCurrentUser(user);
          setSavedCards(savedArticleData.reverse());
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  /******************************************************************************************** */
  /** **************************************** News API **************************************** */

  const handleNewsSearch = (userKeyword) => {
    console.log(userKeyword);
    setIsLoading("");
    NewsApi.getNews(userKeyword)
      .then((cardData) => {
        const newsArticles = cardData.articles;
        newsArticles.forEach((article) => (article["keyword"] = userKeyword));
        if (cardData.status === "ok") {
          setCards(newsArticles);
          handleSearchSuccess();
        }
      })
      .catch((err) => {
        setResults("_hidden");

        if (err.status === 404) {
          handleNothingFound();
        } else {
          handleInternalIssue();
        }
        console.log(err);
      });
  };

  /******************************************************************************************** */
  /************************************* Handles `Main` behavior *******************************/

  const handleSearchSuccess = () => {
    setResults("");
    setIsLoading("_hidden");
  };

  const handleNothingFound = () => {
    setIsLoading("_hidden");
    setIsNotFound("");
  };

  const handleInternalIssue = () => {
    setIsLoading("_hidden");
    setIsInternalIssue("");
  };

  /******************************************************************************************** */
  /** ***************************** Handles `Register` & `Login` Logic *************************** */

  const onRegister = ({ email, password, name }) => {
    setIsRegisterLoad(true);
    auth
      .register(email, password, name)
      .then((res) => {
        if (res.data) {
          setIsSuccessOpen(true);
          setIsRegisterOpen(false);
          setSubmitError(null);
        }
      })
      .catch((err) => {
        if (err) setSubmitError("Invalid email or password");
        setIsRegisterLoad(false);
      })
      .finally(() => {
        setIsRegisterLoad(false);
      })
  };

  const onLogin = ({ email, password }) => {
    setIsLoginLoad(true);
    auth
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          setUsername(res.data.name);
          setSubmitError("");
          closeAllPopups();
        }
      })
      .catch((err) => {
        if (err) setSubmitError("Invalid email or password");
        setIsLoginLoad(false);
      })
      .finally(() => {
        setIsLoginLoad(false);
      })
  };

  const onLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    userHistory("/");
    closeAllPopups();
  };

  /******************************************************************************************** */
  /******************************* Handles `Save` & `Delete` Cards ********************************/

  const onSave = (card) => {
    const userToken = localStorage.getItem("jwt");

    const existingCard = savedCards.find(
      (savedCard) => savedCard.link === card.link
    );

    if (existingCard) {
      api
        .deleteNewsCard(existingCard, userToken)
        .then((data) => {
          setSavedCards(() => savedCards.filter((c) => c._id !== data.data));
        })
        .catch((err) => console.log(err));
    } else {
      api
        .addSavedNews(card, userToken)
        .then((newSave) => {
          setSavedCards([newSave.data, ...savedCards]);
        })
        .catch((err) => console.log(err));
    }
  };

  const onDelete = useCallback(
    (card) => {
      const userToken = localStorage.getItem("jwt");
      api
        .deleteNewsCard(card, userToken)
        .then((data) => {
          setSavedCards(() => savedCards.filter((c) => c._id !== data.data));
        })
        .catch((err) => console.log(err));
    },
    [savedCards]
  );

  /******************************************************************************************** */
  /** ************************************ Closes `Modal`s ************************************** */

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
        e.target.className.includes("modal_overlay") ||
        e.target.className.includes("navigation__overlay")
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
          onLogout={onLogout}
          user={username}
          onClose={closeAllPopups}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchForm onSubmit={handleNewsSearch}>
                  <Header
                    isLoggedIn={isLoggedIn}
                    logoColor={"white"}
                    textColor={""}
                    openLoginModal={() => setIsLoginOpen(true)}
                    openMobileModal={() => setIsMobileNavOpen(true)}
                    onLogout={onLogout}
                    user={username}
                  />
                </SearchForm>
                <Main>
                  <SearchResults
                    hideResults={isResults}
                    cards={cards}
                    isLoggedIn={isLoggedIn}
                    onSaveClick={onSave}
                    onDeleteClick={onDelete}
                  />
                  <Preloader hideLoader={isLoading} />
                  <NothingFound hideNotFound={isNotFound} />
                  <SomethingWentWrong hideWentWrong={isInternalIssue} />
                </Main>
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
                  openLoginModal={() => setIsLoginOpen(true)}
                  openMobileModal={() => setIsMobileNavOpen(true)}
                  onLogout={onLogout}
                  user={username}
                />
                <SavedNews
                  onDeleteClick={onDelete}
                  onSaveClick={null}
                  cards={savedCards}
                  user={username}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <RegisterModal
          isOpen={isRegisterOpen}
          isLoading={isRegisterLoad}
          openModal={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
          onRegister={onRegister}
          submitError={submitError}
          onClose={closeAllPopups}
        />
        <LoginModal
          isOpen={isLoginOpen}
          isLoading={isLoginLoad}
          openModal={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
          onLogin={onLogin}
          submitError={submitError}
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
