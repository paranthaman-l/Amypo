import React from 'react'
import AdminNavbar from '../../Components/Navbar/AdminNavbar'
import AdminSideBar from '../../Components/Admincomponents/SideBar/AdminSideBar'
import Header from '../../Components/Admincomponents/Header'
import AttendanceReport1 from '../../Components/Admincomponents/Attendance/AttendanceReport'
const AttendanceReport = () => {
  return (
    <div className='flex font-ubuntu w-full'>
    <AdminNavbar />
    <div className="flex w-full pt-20 bg-[#f9fbfd]">
      <AdminSideBar />
      <div className="flex w-full flex-col">
        <Header title={"Employee Attendance List"} path={" / Employee / Attendance Report"} />
        <div className="px-10 w-full">
          <AttendanceReport1 />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AttendanceReport