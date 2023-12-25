import React from 'react'
import UserNavbar from '../../Components/Navbar/UserNavbar'
import Header from '../../Components/Admincomponents/Header'
import UserSideBar from '../../Components/Usercomponents/SideBar/UserSideBar'

const UserDashboard = () => {
    return (
        <div className='flex font-ubuntu w-full'> <UserNavbar />
            <div className="flex w-full pt-20 bg-[#f9fbfd]">
                <UserSideBar />
                <div className="flex w-full flex-col">
                    <Header title={"User DashBoard"} path={" / User Dashboard"} />
                    <div className="px-10 w-full">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard