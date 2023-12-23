import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserHome } from "../Pages/User/UserHome";
import { Adminroutes } from "../Privateroutes/Adminroutes/Adminroutes";
import { Userroutes } from "../Privateroutes/Userroutes/Userroutes";
import { AdminHome } from "../Pages/Admin/AdminHome";
import { SignIn } from "../Pages/Auth/SignIn";
import { AddEmployee } from "../Pages/Admin/AddEmployee/AddEmployee";
import AdminNavbar from "../Components/Navbar/AdminNavbar";
import { Dashboardsection } from "../Components/Admincomponents/Dashboard/Dashboardsection";
import AllEmployees from "../Components/Admincomponents/Employees/AllEmployees";
import LeaveRequests from "../Components/Admincomponents/Employees/LeaveRequests";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* common routes
           */}
          <Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/Employeelist" element={<AddEmployee/>}/>
          </Route>
          {/* userroutes  */}
          <Route element={<Userroutes />}>
            <Route path="/" element={<UserHome />} />
          </Route>

          {/* adminroutes  */}

          <Route element={<Adminroutes />}>
            {/* <AdminNavbar/> */}
            <Route path="/" element={<AdminHome />} />
            <Route path="/adminDashboard" element={<Dashboardsection />} />
            <Route path="/allEmployees" element={<AllEmployees />} />
            <Route path="/leaveRequests" element={<LeaveRequests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
