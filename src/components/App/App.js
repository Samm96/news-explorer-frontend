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
import { submitErrorMsgs } from "../../utils/constants";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
  });
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [submitError, setSubmitError] = useState('');

  const [isLoading, setIsLoading] = useState("_hidden");
  const [isNotFound, setIsNotFound] = useState("_hidden");
  const [isResults, setResults] = useState("_hidden");
  const [isInternalIssue, setIsInternalIssue] = useState("_hidden");

  /******************************************************************************************** */
  /** **************************************** Modals *******************************************/

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  /******************************************************************************************** */
  /** ************************ Check for token & Get Saved Articles Info ********************** */

  const userHistory = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("jwt");
    if (userToken && isLoggedIn) {
      api
        .getAppInfo(userToken)
        .then(([userData, savedArticleData]) => {
          const user = userData.data;
          setCurrentUser(user.name);
          setSavedCards(savedArticleData.reverse());
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const userToken = localStorage.getItem("jwt");
    if (userToken) {
      auth
        .checkToken(userToken)
        .then((res) => {
          if (res) {
            setCurrentUser(res.data.name);
            setIsLoggedIn(true);
            userHistory({ "/": "/saved-news" });
          } else {
            localStorage.removeItem("jwt");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [userHistory]);

  /******************************************************************************************** */
  /** **************************************** News API **************************************** */

  const handleNewsSearch = (userKeyword) => {
    console.log(userKeyword);
    setIsLoading("");
    NewsApi.getNews(userKeyword)
      .then((cardData) => {
        cardData["keyword"] = userKeyword;
        localStorage.setItem("cards", JSON.stringify(cardData));
      })
      .then(() => {
        handleSearchSuccess();
      })
      .catch((err) => {
        if (err.status === 404) {
          handleNothingFound();
        } else {
          handleInternalIssue();
        }
        console.log(err);
      });
  };

  const handleSearchResults = () => {
    const cardData = JSON.parse(localStorage.getItem("cards"));
    const newsArticles = cardData.articles;
    newsArticles.forEach((article) => (article["keyword"] = cardData.keyword));
    setCards(newsArticles);
  };

  /******************************************************************************************** */
  /************************************* Handles `Main` behavior *******************************/

  const handleSearchSuccess = () => {
    setResults("");
    setIsLoading("_hidden");
    handleSearchResults();
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
    auth
      .register(email, password, name)
      .then((res) => {
        if (res.status === 201) {
          setIsRegisterOpen(false);
          setIsSuccessOpen(true);
          setSubmitError(null);
        }
      })
      .catch(() => {
        setSubmitError("Invalid email or password");
      });
  };

  const onLogin = ({ email, password }) => {
    auth
      .login(email, password)
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          setCurrentUser(res.data.name);
          closeAllPopups();
        }
      })
      .catch(() => {
          setSubmitError("Invalid email or password");
      });
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
          user={currentUser}
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
                    user={currentUser}
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
                  user={currentUser}
                />
                <SavedNews
                  onDeleteClick={onDelete}
                  onSaveClick={null}
                  cards={savedCards}
                  user={currentUser}
                />
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
          onRegister={onRegister}
          submitError={submitError}
          onClose={closeAllPopups}
        />
        <LoginModal
          isOpen={isLoginOpen}
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
