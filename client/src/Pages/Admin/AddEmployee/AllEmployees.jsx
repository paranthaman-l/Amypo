import React from 'react'
import AdminNavbar from '../../../Components/Navbar/AdminNavbar'
import AdminSideBar from '../../../Components/Admincomponents/SideBar/AdminSideBar'
import Header from '../../../Components/Admincomponents/Header'
import { Addemployeesection } from '../../../Components/Admincomponents/Adminhome/Addemployeesection'
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