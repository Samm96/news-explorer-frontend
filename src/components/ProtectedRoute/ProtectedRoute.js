import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children, ...props }) => {
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;