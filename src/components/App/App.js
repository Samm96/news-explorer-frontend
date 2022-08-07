import React, { useState } from "react";
import "./App.css";
import Navigation from '../Navigation/Navigation';

const App = () => {
  // placeholder
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <div className="page-wrapper">
        <Navigation isLoggedIn={isLoggedIn}/>
      </div>
    </div>
  );
};

export default App;
