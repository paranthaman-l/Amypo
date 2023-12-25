import React, { useState } from 'react'

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
} from "@material-tailwind/react";
import { useStates } from '../../../useContext/UseStates';
import UsersOptions from './UsersOptions';
const UserSideBar = () => {
    const [options, setOptions] = useState(1);
    const {user} = useStates();
    return (
        <div className='flex flex-col min-w-[260px] min-h-screen '>
            <div className="flex flex-col ">
                <div className="flex  items-center p-3">
                    <img className='w-14 h-14 rounded-md mx-3' src="https://wrraptheme.com/templates/lucid/hr/bs5/dist/assets/images/user.png" alt="" />
                    <div className="">
                        <p className='text-sm font-extralight'>Welcome,</p>
                        <Menu placement='bottom-start'>
                            <MenuHandler>
                                <Typography className='bg-none cursor-pointer'>
                                    <p className='font-bold text-sm flex items-center'>{user?.name} <i className="fa-solid fa-sort-down mx-1"></i></p>
                                </Typography>
                            </MenuHandler>
                            <MenuList className='' >
                                <MenuItem><i className="fa fa-user me-2"></i>My Profile</MenuItem>
                                <MenuItem><i className="fa fa-envelope-open me-2"></i>Messages</MenuItem>
                                <MenuItem><i className="fa fa-cog me-2"></i>Settings</MenuItem>
                                <MenuItem><i className="fa fa-power-off me-2"></i>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </div>
                <hr className='text-blue-gray-100 mx-6' />
                <div className="p-3 mx-3">
                    <ul className='flex w-full justify-between'>
                        <li>
                            <p className='font-bold text-xs'>5+</p>
                            <p className='font-thin text-[#8c9db5] tracking-tighter text-xs'>Experience</p>
                        </li>
                        <li>
                            <p className='font-bold text-xs'>400+</p>
                            <p className='font-thin text-[#8c9db5] tracking-tighter text-xs'>Employees</p>
                        </li>
                        <li>
                            <p className='font-bold text-xs'>80+</p>
                            <p className='font-thin text-[#8c9db5] tracking-tighter text-xs'>Clients</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-5 mr-3 px-3 flex flex-col">
                <ul className='flex justify-evenly w-full items-center cursor-pointer '>
                    <li onClick={()=>setOptions(1)} className={`rounded-t-md w-full text-center h-8 flex justify-center items-center pb-2 border-[1px]  ${options===1 ? "bg-white border-[1px] text-green1 border-[#e9ecef]":"border-none"} pt-2`}>{localStorage.getItem("role")}</li>
                    <li onClick={()=>setOptions(2)} className={`rounded-t-md px-2 w-full text-center h-8 flex justify-center items-center pb-2 border-[1px]  ${options===2 ? "bg-white border-[1px] text-green1 border-[#e9ecef]":"border-none"} pt-2`}>Project</li>
                    {/* <li onClick={()=>setOptions(3)} className={`rounded-t-md w-full text-center h-8 flex justify-center items-center pb-2 border-[1px]  ${options===3 ? "bg-white border-[1px] text-green1 border-[#e9ecef]":"border-none"} pt-2`}><i className="fa fa-th-large"></i></li>
                    <li onClick={()=>setOptions(4)} className={`rounded-t-md w-full text-center h-8 flex justify-center items-center pb-2 border-[1px]  ${options===4 ? "bg-white border-[1px] text-green1 border-[#e9ecef]":"border-none"} pt-2`} ><i className="fa fa-cog"></i></li> */}
                </ul>
                <hr className='text-textgray text-opacity-10' />
            </div>
            <div className="mt-5 flex flex-col">
                {options === 1 ? <UsersOptions/> :
                    options === 2 ? ("") :
                        options === 3 ? ("") :
                            options === 4 ? ("") :
                                ""}
            </div>
        </div>
    )
}

export default UserSideBar