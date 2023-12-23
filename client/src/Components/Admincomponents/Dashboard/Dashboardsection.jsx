import React from 'react'
import AdminNavbar from '../../Navbar/AdminNavbar'
import AdminSideBar from '../SideBar/AdminSideBar'
import Header from '../Header'

export const Dashboardsection = () => {
  return (
    <>
      <div className="font-ubuntu w-full">
        <AdminNavbar />
        <div className="flex w-full pt-20 bg-[#f9fbfd]">
          <AdminSideBar />
          <div className="flex w-full flex-col">
            <Header title={"Dashboard"} path={" / Dashboard"} />
          </div>
        </div>
      </div>
    </>
  )
}
