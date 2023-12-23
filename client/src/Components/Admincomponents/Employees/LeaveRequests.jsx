import React from 'react'
import AdminNavbar from '../../Navbar/AdminNavbar'
import AdminSideBar from '../SideBar/AdminSideBar'
import Header from '../Header'
import LeaveRequestTable from './LeaveRequestTable'

const LeaveRequests = () => {
  return (
    <div className="font-ubuntu w-full">
    <AdminNavbar />
    <div className="flex w-full pt-20 bg-[#f9fbfd]">
      <AdminSideBar />
      <div className="flex w-full flex-col">
        <Header title={"Leave Request"} path={" / Leave Requests"} />
        <LeaveRequestTable/>
      </div>
    </div>
  </div>
  )
}

export default LeaveRequests