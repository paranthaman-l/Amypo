import React from 'react'
import logo from '../../assets/logo/logo.svg'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { FaCaretDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { adminApi } from '../../Api/axios';
const AdminNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        localStorage.removeItem("uid");
        if (localStorage.getItem("role") === "ADMIN") {
            adminApi.interceptors.request.clear();
        }
        toast.custom((t) => (
            <div
                className={`bg-toastGreen text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                    } duration-300 ease-in-out`}>
                <div className="flex items-center gap-2 text-white">
                    <span>
                        <i className="fa-solid fa-circle-check"></i>
                    </span>
                    <div>
                        <span className="">Logout successFull !</span>
                    </div>
                </div>
            </div>
        ));
        setTimeout(() => {
            toast.remove();
            navigate("/signin");
        }, 2000);
    }
    return (
        <div className='bg-white fixed w-full px-5 h-16 flex justify-between items-center shadow-lg z-20'>
            <Toaster
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="flex items-center">
                <img className="w-32 object-fill " src={logo} alt="" />
                <div className="">
                    <Menu>
                        <MenuHandler>
                            <Button className='bg-green1 bg-opacity-90 mx-10 px-5 py-2 flex items-center'>Menu Version<FaCaretDown className='text-lg ml-1' /></Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>Sidebar menu</MenuItem>
                            <MenuItem>Horizontal menu</MenuItem>
                            <MenuItem>Sidebar mini</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 right-2  flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full  py-2 ps-4 px-4 text-sm text-gray-900 border border-blue-gray-200 rounded-lg  outline-none " placeholder="Search..." required />
                    {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
            </div>
            <div className="flex items-center w-[45%] justify-end">
                <ul className='flex items-center w-1/2 justify-evenly text-lg'>
                    <li className='cursor-pointer '>
                        <SlCalender className='' />
                    </li>
                    <li className='cursor-pointer '>
                        <LuMessagesSquare />
                    </li>
                    <li className='cursor-pointer '>
                        <IoMail />
                    </li>
                    <li className='cursor-pointer '>
                        <IoIosNotifications />
                    </li>
                    <li className='cursor-pointer '>
                        <HiAdjustmentsHorizontal />
                    </li>
                    <li className='cursor-pointer '>
                        <IoSettings />
                    </li>
                    <li onClick={handleLogout} className='cursor-pointer '>
                        <IoLogOut />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminNavbar