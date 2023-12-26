import AdminNavbar from '../Components/Navbar/AdminNavbar'
import AdminSideBar from '../Components/Admincomponents/SideBar/AdminSideBar'
import Header from '../Components/Admincomponents/Header'
import ProfileComponent from '../Components/Admincomponents/Profile'
import UserNavbar from '../Components/Navbar/UserNavbar'
import UserSideBar from '../Components/Usercomponents/SideBar/UserSideBar'
const Profile = () => {
    const role = localStorage.getItem('role');
    return (
        <div className='flex font-ubuntu w-full'>
            {role === "ADMIN" ? <AdminNavbar /> : <UserNavbar />}
            <div className="flex w-full pt-20 bg-[#f9fbfd]">
                {role === "ADMIN" ? <AdminSideBar /> : <UserSideBar />}
                <div className="flex w-full flex-col">
                    <Header title={"PaySlip"} path={" / Profile"} />
                    <div className="px-10 w-full my-10">
                        <ProfileComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile