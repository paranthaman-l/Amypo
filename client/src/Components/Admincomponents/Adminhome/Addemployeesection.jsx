import { Button, Option, Select } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react'
import AddEmployee from '../Employees/AddEmployee';
import Services from '../../../Api/Services';
import toast from 'react-hot-toast';
import EditEmployee from '../Employees/EditEmployee';
import DeleteEmployee from '../Employees/DeleteEmployee';

export const Addemployeesection = () => {
  const [role, setRole] = useState();
  const [open, setOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [editData, setEditData] = useState()
  const [data, setData] = useState()
  const cancelButtonRef = useRef(null)
  const cancelEditButtonRef = useRef(null)
  const cancelDeleteButtonRef = useRef(null)
  const [employees, setEmployees] = useState([]);
  const getData = async () => {
    await Services.getEmployees().then((response) => {
      setEmployees(response.data);
    }).catch((error) => {
      console.log(error.message);
    })
  }
  const getDataByRole = async () => {
    await Services.getEmployeesByRole(role).then((response) => {
      setEmployees(response.data);
    }).catch((error) => {
      console.log(error.message);
    })
  }
  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    getDataByRole();
  }, [role])

  return (
    <>
      <main className="w-full font-ubuntu h-[40em] mt-3 rounded-md shadow-xl">
        <AddEmployee getData={getData} cancelButtonRef={cancelButtonRef} open={open} setOpen={setOpen} />
        <EditEmployee getData={getData} cancelButtonRef={cancelEditButtonRef} open={editOpen} setOpen={setEditOpen} data={editData} setData={setEditData} />
        <DeleteEmployee getData={getData} cancelButtonRef={cancelDeleteButtonRef} open={deleteOpen} setOpen={setDeleteOpen} data={data} setData={setData} />
        <section className="px-3">
          <div className="flex w-full justify-between">
            <p className='flex items-center text text-[#555555] font-bold'>Employee List</p>
            <div className="flex items-center justify-center ">
              <Button onClick={() => setOpen(true)} className='border w-60 border-darkgray border-opacity-35 px-3 py-3 mx-2 rounded-lg bg-green1'>Add New Employee</Button>
              <Select label='Role' value={role || 'All'} className=''>
                <Option onClick={() => setRole("all")} className=''>All</Option>
                <Option onClick={() => setRole("contentdeveloper")} className=''>Content Developer</Option>
                <Option onClick={() => setRole("developer")} className=''>Developer</Option>
                <Option onClick={() => setRole("trainer")} className=''>Trainer</Option>
                <Option onClick={() => setRole("bdm")} className=''>BDM</Option>
              </Select>
            </div>
          </div>
          <div className="mt-8 ">
            <div className="overflow-x-auto">
              <table className=" w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 p-4  ">
                  <tr className='bg-[#f0f0f0]  rounded-t-lg'>
                    <th className=''>
                      <input type="checkbox" className='mr-2' name="" id="" />
                    </th>
                    <th className="p-2 whitespace-nowrap py-3">
                      <div className="font-semibold text-left">Name
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                          fill="currentColor"
                        >
                          {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                        </svg>
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Employee ID     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                        fill="currentColor"
                      >
                        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                      </svg></div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Phone     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                        fill="currentColor"
                      >
                        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                      </svg></div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Date of Birth     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                        fill="currentColor"
                      >
                        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                      </svg></div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Role     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                        fill="currentColor"
                      >
                        {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                      </svg></div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f0] text-sm">
                  {employees?.map((employee, i) => {
                    return (
                      <tr key={i} className='hover:bg-[#f0f0f0]  min-w-8'>
                        <td>
                          <input type="checkbox" name="" className='mr-2 ' id="" />
                        </td>
                        <td className="p-2 whitespace-nowrap py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3"><img className="rounded-full" src={employee?.profile} width="40" height="40" alt="Alex Shatov" /></div>
                            <div className="font-medium text-gray-800">
                              <p className='font-bold'>{employee?.name}</p>
                              <p className='text-sm  text-darkgray2'>{employee?.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{employee?.empId}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left ">+91 {employee?.phoneNumber}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{new Date(employee?.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{employee?.role}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left flex items-center justify-center">
                            <button onClick={() => { setEditOpen(true); setEditData(employee) }} className='h-8 w-9 mx-1 group flex justify-center items-center hover:bg-[#6c757d] duration-200 rounded'>
                              <i className="fa fa-edit  group-hover:text-white "></i>
                            </button>
                            <button onClick={() => { setDeleteOpen(true); setData(employee) }} className='h-8 w-9 mx-1 group flex justify-center items-center hover:bg-[#fc5a69] duration-200 rounded'>
                              <i className="fa-regular fa-trash-can text-[#fc5a69] group-hover:text-white"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
