import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const Userroutes = () => {

  const usertoken=localStorage.getItem("token") !==null;
  const role=localStorage.getItem("role") === "USER";
  return usertoken && role ? <Outlet/> : <Navigate path="/signin"/>
}
