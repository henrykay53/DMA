import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// This function handles auth for secured routing

const PrivateRoute = () => {
  const authenticated = localStorage.getItem("accessToken");

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
