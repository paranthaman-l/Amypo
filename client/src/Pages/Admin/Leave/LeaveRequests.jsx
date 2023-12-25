import AdminNavbar from '../../../Components/Navbar/AdminNavbar'
import AdminSideBar from '../../../Components/Admincomponents/SideBar/AdminSideBar'
import Header from '../../../Components/Admincomponents/Header'
import LeaveRequestTable from '../../../Components/Admincomponents/Employees/LeaveRequestTable'

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