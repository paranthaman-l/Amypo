import { Button, Option, Select } from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'
import AddLeave from './AddLeave'
import Services from '../../../Api/Services'
import ApproveLeave from './ApproveLeave'
import DeclineLeave from './DeclineLeave'

const LeaveRequestTable = () => {
  const [status, setStatus] = useState("yettoapprove");
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(false)
  const [approveOpen, setApproveOpen] = useState(false)
  const [declineOpen, setDeclineOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const cancelButtonApproveRef = useRef(null)
  const [leaveData, setLeaveData] = useState([]);
  const getData = async () => {
    if (status === "yettoapprove") {
      await Services.getPendingLeaves().then((response) => {
        setLeaveData(response.data);
      }).catch((error) => {
        console.log(error.message);
      })
    }
  }
  useEffect(() => {
    getData();
  }, [])
  const getDataByStatus = async () => {
    await Services.getDataByStatus(status).then((response) => {
      setLeaveData(response.data);
    }).catch((error) => {
      console.log(error.message);
    })
  }
  useEffect(() => {
    getDataByStatus();
  }, [status])


  return (
    <main className="w-full px-10 font-ubuntu overflow-y-scroll h-[40em] mt-3 rounded-md shadow-xl">
      <AddLeave cancelButtonRef={cancelButtonRef} open={open} setOpen={setOpen} getData={getData} />
      <ApproveLeave data={data} open={approveOpen} cancelButtonRef={cancelButtonApproveRef} setOpen={setApproveOpen} getData={getDataByStatus} />
      <DeclineLeave data={data} open={declineOpen} cancelButtonRef={cancelButtonApproveRef} setOpen={setDeclineOpen} getData={getDataByStatus} />
      <section className="px-3">
        <div className="flex w-full justify-between  items-center h-20">
          <p className='flex items-center text text-[#555555] font-bold'>Employee List</p>
          <div className="flex items-center justify-center ">
            <Button onClick={() => setOpen(true)} className='border w-32 border-darkgray border-opacity-35 px-3 py-3 mx-2 rounded-lg bg-green1'>Add Leave</Button>
            <Select label='Status' className=''>
              <Option onClick={() => setStatus("yettoapprove")} value='yettoapprove' className=''>Yet to Approve</Option>
              <Option onClick={() => setStatus("approved")} value='approved' className=''>Approved</Option>
              <Option onClick={() => setStatus("declined")} value='declined' className=''>Declined</Option>
            </Select>
          </div>

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
                {leaveData?.map((leave, i) => {
                  return (
                    <tr key={i} className='hover:bg-[#f0f0f0]  min-w-8'>
                      <td className="p-2 whitespace-nowrap py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3"><img className="rounded-full" src={leave?.profile} width="40" height="40" alt="Alex Shatov" /></div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap py-4">
                        <div className="flex items-center">
                          <p className='font-bold text-gray-800'>
                            {leave?.name}</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{leave?.empId}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left ">{leave?.leaveType}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{new Date(leave?.dateFrom).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} to {new Date(leave?.dateTo).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{leave?.reason}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        {status === "yettoapprove" ?
                          <div className="text-left flex items-center justify-center">
                            <button onClick={() => { setApproveOpen(true); setData(leave) }} className='h-8 w-9 mx-1 group flex justify-center items-center bg-[#1b995e] hover:bg-[#157347] duration-200 rounded'>
                              <i className="text-white font-bold fa fa-check"></i>
                            </button>
                            <button onClick={() => { setDeclineOpen(true); setData(leave) }} className='h-8 w-9 mx-1 group flex justify-center items-center hover:bg-[#fc5a69] duration-200 rounded'>
                              <i className="group-hover:text-white text-[#fc5a69] fa fa-ban"></i>
                            </button>
                          </div>
                          : status === "approved" ?
                            <button onClick={() => { setDeclineOpen(true); setData(leave) }} className='h-8 w-9 mx-1 group flex justify-center items-center hover:bg-[#fc5a69] duration-200 rounded'>
                              <i className="group-hover:text-white text-[#fc5a69] fa fa-ban"></i>
                            </button>
                            : <button onClick={() => { setApproveOpen(true); setData(leave) }} className='h-8 w-9 mx-1 group flex justify-center items-center bg-[#1b995e] hover:bg-[#157347] duration-200 rounded'>
                              <i className="text-white font-bold fa fa-check"></i>
                            </button>
                        }
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
  )
}

export default LeaveRequestTable