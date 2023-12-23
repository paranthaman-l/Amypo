import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Adminroutes = () => {
  const admintoken = localStorage.getItem("token") !== null;
  const role = localStorage.getItem("role") === "ADMIN";
  return admintoken && role ? <Outlet /> : <Navigate path="/signin" />;
};
