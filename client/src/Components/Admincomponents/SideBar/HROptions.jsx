/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const HROptions = () => {
  const datas = [
    {
      label: "HR Dashboard",
      value: "hrDashboard",
      link: "/adminDashboard",
      icon: "fa-solid fa-gauge-high",
    },
    {
      label: "Holidays",
      value: "holidays",
      link: "/holidays",
      icon: "fa fa-list-ul"
    },
    {
      label: "Events",
      value: "events",
      link: "/events",
      icon: "fa fa-calendar"
    },
    {
      label: "Activities",
      value: "activities",
      link: "/activities",
      icon: "fa fa-file-text"
    },
    {
      label: "HR Social",
      value: "hrSocial",
      link: "/hrSocial",
      icon: "fa fa-globe"
    },
    {
      label: "Users",
      value: "users",
      link: "/users",
      icon: "fa fa-user"
    },
  ]
  const datas1 = [
    {
      label: "Employees",
      value: "employees",
      link: "/employees",
      icon: "fa fa-users",
      list: [
        {
          label: "All Employees",
          value: "allemployees",
          link: "/allEmployees",
        },
        {
          label: "Leave Requests",
          value: "leaveRequests",
          link: "/leaveRequests",
        },
        {
          label: "Attendance",
          value: "attendance",
          link: "/attendance",
        },
        {
          label: "Department",
          value: "department",
          link: "/department",
        },
      ]
    },
    {
      label: "Accounts",
      value: "accounts",
      link: "/accounts",
      icon: "fa fa-briefcase"
    },
    {
      label: "Payroll",
      value: "payroll",
      link: "/payroll",
      icon: "fa fa-credit-card",
      list: [
        {
          label: "PaySlip",
          value: "payslip",
          link: "/payslip",
        },
        {
          label: "Employee Salary",
          value: "employeeSalary",
          link: "/employeeSalary",
        },
      ]
    },
    {
      label: "Report",
      value: "report",
      link: "/report",
      icon: "fa fa-bar-chart"
    },

    {
      label: "Authentication",
      value: "authentication",
      link: "/authentication",
      icon: "fa fa-lock"
    },
  ]
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const CollapsibleItem = ({ item }) => {
    const [isCollapsed, setCollapsed] = useState(true);

    return (
      <div key={item.value}>
        <div
          onClick={() => setCollapsed(!isCollapsed)}
          className={`${!isCollapsed && "bg-green1 text-white "} relative px-5 py-2  duration-300 rounded-r-md hover:bg-green1 hover:text-white cursor-pointer`}
        // className="cursor-pointer flex items-center justify-between"
        >
          <i className={item.icon + " mr-3"}></i>
          {item.label}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            // src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-BLACK.png"
            className={`h-2 ${isCollapsed && "rotate-180"} right-3 top-[40%] absolute w-3 transition-all duration-500 group-focus:-rotate-180`}
          />
        </div>
        {!isCollapsed && (
          <div className='duration-500 transition-all'>
            <ul className=''>
              {item?.list.map((it, i) => {
                return (
                  <li key={i} onClick={() => { navigate(it.link) }} className={`${pathname === it.link && "bg-green1 text-white "} px-5 py-1  duration-300 rounded-r-md hover:bg-green1 hover:text-white cursor-pointer`}>
                    <span className='text-darkgray font-thin mx-3'>--  </span>{it.label}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    );
  };
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
      </ul>
      {datas1.map((data, i) => {
        return (
          <CollapsibleItem item={data} key={i} />
        )
      })}
    </div>
  )
}


export default HROptions;