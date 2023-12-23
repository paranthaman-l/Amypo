import React from 'react'
import AdminNavbar from '../../Navbar/AdminNavbar'
import AdminSideBar from '../SideBar/AdminSideBar'
import Header from '../Header'
import { Addemployeesection } from '../Adminhome/Addemployeesection'
const AllEmployees = () => {
    return (
        <div className='flex font-ubuntu w-full'> <AdminNavbar />
            <div className="flex w-full pt-20 bg-[#f9fbfd]">
                <AdminSideBar />
                <div className="flex w-full flex-col">
                    <Header title={"Employee List"} path={" / Employee / EmployeeList"} />
                    <div className="px-10 w-full">
                        <Addemployeesection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllEmployees