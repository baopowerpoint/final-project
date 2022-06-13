import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { authIsReady } = useAuthContext();
  return authIsReady ? <Navigate to="/" /> : children;
};

export default PrivateRoute;
