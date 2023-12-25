import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UsersOptions = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const datas = [
        {
          label: "Dashboard",
          value: "dashboard",
          link: "/userDashboard",
          icon: "fa-solid fa-gauge-high",
        },
        {
          label: "Apply Leave",
          value: "applyLeave",
          link: "/applyLeave",
          icon: "fa-solid fa-gauge-high",
        }
      ]
  return (
    <div className='m-0'>
      <ul>
        {datas.map((data, i) => {
          return (
            <li onClick={() => { navigate(data.link) }} key={i} className={`${pathname === data.link && "bg-green1 text-white "} px-5 py-3  duration-300 rounded-r-md hover:bg-green1 hover:text-white cursor-pointer`} >
              <i className={data.icon + " mr-3"}></i>
              {data.label}

            </li>
          )
        })}
      </ul></div>
  )
}

export default UsersOptions