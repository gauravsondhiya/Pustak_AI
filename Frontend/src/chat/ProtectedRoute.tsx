import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import UserContext from "../Context/User_Context";



const ProtectedRoute = ({ children }) => {
 
  const { user, setUser } = useContext(UserContext);
  
  if (!user) {
    // Token nahi mila — login pe redirect
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
