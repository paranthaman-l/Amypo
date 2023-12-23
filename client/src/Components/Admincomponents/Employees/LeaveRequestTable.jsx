import { Button } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import AddLeave from './AddLeave'

const LeaveRequestTable = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
  return (
    <main className="w-full px-10 font-ubuntu h-[40em] mt-3 rounded-md shadow-xl">
        <AddLeave cancelButtonRef={cancelButtonRef} open={open} setOpen={setOpen}/>
    <section className="px-3">
      <div className="flex w-full justify-between">
        <p className='flex items-center text text-[#555555] font-bold'>Employee List</p>
        <Button onClick={()=>setOpen(true)} className='border border-darkgray border-opacity-35 px-3 py-2 rounded-lg bg-green1'>Add Leave</Button>
      </div>
      <div className="mt-8 ">
        <div className="overflow-x-auto">
          <table className=" w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 p-4  ">
              <tr className='bg-[#f0f0f0]  rounded-t-lg'>
                <th className='font-semibold text-left p-2 whitespace-nowrap py-3'>
                    #
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
                  <div className="font-semibold text-left">Leave Type     <svg
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
                  <div className="font-semibold text-left">Date     <svg
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
                  <div className="font-semibold text-left">Reason     <svg
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
              <tr className='hover:bg-[#f0f0f0]  min-w-8'>
                <td className="p-2 whitespace-nowrap py-4">
                  <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3"><img className="rounded-full" src="https://wrraptheme.com/templates/lucid/hr/bs5/dist/assets/images/xs/avatar5.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap py-4">
                  <div className="flex items-center">
                      <p className='font-bold text-gray-800'>	
Frank Camly</p>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">EMP01</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left ">Casual Leave</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">01 Jan, 2023 to 03 Jan, 2023</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">Going to Holiday</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left flex items-center justify-center">
                    <button className='h-8 w-9 mx-1 group flex justify-center items-center bg-[#1b995e] hover:bg-[#157347] duration-200 rounded'>
                      <i className="text-white font-bold fa fa-check"></i>
                    </button>
                    <button className='h-8 w-9 mx-1 group flex justify-center items-center hover:bg-[#fc5a69] duration-200 rounded'>
                      <i className="group-hover:text-white text-[#fc5a69] fa fa-ban"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
  )
}

export default LeaveRequestTable