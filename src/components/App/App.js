import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from '../Navigation/Navigation';

const App = () => {
  return (
    <div className="page">
      <div className="page-wrapper">
        <Navigation />
      </div>
    </div>
  );
};

export default App;
