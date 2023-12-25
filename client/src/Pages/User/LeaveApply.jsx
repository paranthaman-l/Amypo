import React from 'react'
import UserNavbar from '../../Components/Navbar/UserNavbar'
import UserSideBar from '../../Components/Usercomponents/SideBar/UserSideBar'
import Header from '../../Components/Admincomponents/Header'
import ApplyLeaveRequest from '../../Components/Usercomponents/ApplyLeave/ApplyLeaveRequest'

const LeaveApply = () => {
  return (
    <div className='flex font-ubuntu w-full'> <UserNavbar />
    <div className="flex w-full pt-20 bg-[#f9fbfd]">
        <UserSideBar />
        <div className="flex w-full flex-col">
            <Header title={"Apply Leave"} path={" / Apply Leave"} />
            <div className="px-10 w-full">
                <ApplyLeaveRequest/>
            </div>
        </div>
    </div>
</div>
  )
}

export default LeaveApply