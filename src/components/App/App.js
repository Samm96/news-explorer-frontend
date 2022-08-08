import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

const App = () => {
  // placeholder
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <SearchForm>
        <Header isLoggedIn={isLoggedIn} />
      </SearchForm>
      <Footer />
    </div>
  );
};

export default App;
