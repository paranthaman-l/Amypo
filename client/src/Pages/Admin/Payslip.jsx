import AdminNavbar from '../../Components/Navbar/AdminNavbar'
import AdminSideBar from '../../Components/Admincomponents/SideBar/AdminSideBar'
import Header from '../../Components/Admincomponents/Header'
import PaySlip from '../../Components/Admincomponents/PayRoll/PaySlip'

const Payslip = () => {
  return (
    <div className='flex font-ubuntu w-full'>
      <AdminNavbar />
      <div className="flex w-full pt-20 bg-[#f9fbfd]">
        <AdminSideBar />
        <div className="flex w-full flex-col">
          <Header title={"PaySlip"} path={" / PayRoll / PaySlip"} />
          <div className="px-10 w-full">
            <PaySlip />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payslip