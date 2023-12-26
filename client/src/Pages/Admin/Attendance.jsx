import React from 'react'
import AdminNavbar from '../../Components/Navbar/AdminNavbar'
import AdminSideBar from '../../Components/Admincomponents/SideBar/AdminSideBar'
import Header from '../../Components/Admincomponents/Header'
import AttendanceView from '../../Components/Admincomponents/Attendance/AttendanceView'
const Attendance = () => {
  return (
    <div className='flex font-ubuntu w-full'> <AdminNavbar />
    <div className="flex w-full pt-20 bg-[#f9fbfd]">
        <AdminSideBar />
        <div className="flex w-full flex-col">
            <Header title={"Employee Attendance List"} path={" / Employee / Attendance"} />
            <div className="px-10 w-full">
                <AttendanceView />
            </div>
        </div>
    </div>
</div>
  )
}

export default Attendance