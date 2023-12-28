import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserHome } from "../Pages/User/UserHome";
import { Adminroutes } from "../Privateroutes/Adminroutes/Adminroutes";
import { Userroutes } from "../Privateroutes/Userroutes/Userroutes";
import { AdminHome } from "../Pages/Admin/AdminHome";
import { SignIn } from "../Pages/Auth/SignIn";
import { Dashboardsection } from "../Components/Admincomponents/Dashboard/Dashboardsection";
import AllEmployees from "../Pages/Admin/AddEmployee/AllEmployees";
import LeaveRequests from "../Pages/Admin/Leave/LeaveRequests";
import UserDashboard from "../Pages/User/UserDashboard";
import LeaveApply from "../Pages/User/LeaveApply";
import Attendance from '../Pages/Admin/Attendance'
import Payslip from "../Pages/Admin/Payslip";
import Profile from "../Pages/Profile";
export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* common routes
           */}
          <Route>
            <Route path="/signin" element={<SignIn />} />
          </Route>
          {/* userroutes  */}
          <Route element={<Userroutes />}>
            <Route path="/" element={<UserHome />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/applyLeave" element={<LeaveApply />} />
            <Route path="/userProfile" element={<Profile />} />
          </Route>

          {/* adminroutes  */}

          <Route element={<Adminroutes />}>
            {/* <AdminNavbar/> */}
            <Route path="/" element={<AdminHome />} />
            <Route path="/adminDashboard" element={<Dashboardsection />} />
            <Route path="/allEmployees" element={<AllEmployees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leaveRequests" element={<LeaveRequests />} />
            <Route path="/payslip" element={<Payslip />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
