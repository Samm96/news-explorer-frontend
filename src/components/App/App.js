import React, { useState } from "react";
import "./App.css";
import Header from '../Header/Header';

const App = () => {
  // placeholder
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <div className="page-wrapper">
        <Header isLoggedIn={isLoggedIn}/>
      </div>
    </div>
  );
};

export default App;
