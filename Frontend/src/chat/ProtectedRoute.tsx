import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); 

  if (!token) {
    // Token nahi mila — login pe redirect
    return <Navigate to="/login" replace />;
  }

  //  Token mila — page dikhado
  return children;
};

export default ProtectedRoute;
