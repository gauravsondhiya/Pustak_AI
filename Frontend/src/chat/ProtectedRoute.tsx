import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import UserContext from "../Context/User_Context";
const ProtectedRoute = ({ children }) => {
  // api calling se ho rhi ha
  const token_confirmation = true;
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    // Token nahi mila — login pe redirect

    return <Navigate to="/login" replace />;
  }

  //  Token mila — page dikhado
  return children;
};

export default ProtectedRoute;
