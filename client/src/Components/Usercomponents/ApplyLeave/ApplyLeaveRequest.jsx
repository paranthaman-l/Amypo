import { Button, Option, Select } from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'
import Services from '../../../Api/Services'
import EditLeave from './EditLeave';
import AddLeave from './AddLeave';
import DeleteLeave from './DeleteLeave';


const ApplyLeaveRequest = () => {
    const [status, setStatus] = useState("yettoapprove");
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(false)
    const [editData, setEditData] = useState({});
    const [deleteData, setDeleteData] = useState({});
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const cancelButtonDeleteRef = useRef(null)
    const [leaveData, setLeaveData] = useState([]);

    const getDataByStatus = async () => {
        await Services.getDataByStatusInUser(status).then((response) => {
            setLeaveData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getDataByStatus();
    }, [status])


    return (
        <main className="w-full px-10 font-ubuntu overflow-y-scroll h-[40em] mt-3 rounded-md shadow-xl">
            <AddLeave cancelButtonRef={cancelButtonRef} open={open} setOpen={setOpen} getData={getDataByStatus} />
            <EditLeave data={editData} setData={setEditData} cancelButtonRef={cancelButtonRef} open={editOpen} setOpen={setEditOpen} getData={getDataByStatus} />
            <DeleteLeave data={deleteData} setData={setDeleteData} cancelButtonRef={cancelButtonDeleteRef} open={deleteOpen} setOpen={setDeleteOpen} getData={getDataByStatus} />
            <section className="px-3">
                <div className="flex w-full justify-between  items-center h-20">
                    <p className='flex items-center text text-[#555555] font-bold'>Leave List</p>
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

                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Applied At     <svg
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
                                        <div className="font-semibold text-left">Leave Duration     <svg
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
                                    {status === "yettoapprove" &&
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Action </div>
                                        </th>
                                    }
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f0f0f0] text-sm">
                                {leaveData?.map((leave, i) => {
                                    return (
                                        <tr key={i} className='hover:bg-[#f0f0f0]  min-w-8 '>
                                            <td className="p-2 whitespace-nowrap py-5">
                                                <div className="text-left">{new Date(leave?.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left ">{leave?.leaveType}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left ">{leave?.leaveDuration}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{new Date(leave?.dateFrom).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} to {new Date(leave?.dateTo).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{leave?.reason}</div>
                                            </td>
                                            {status === "yettoapprove" &&
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left flex items-center justify-center">
                                                        <button onClick={() => { setEditOpen(true); setEditData(leave) }} className='h-8 w-9 mx-1 group flex justify-center items-center hover:bg-[#6c757d] duration-200 rounded'>
                                                            <i className="fa fa-edit  group-hover:text-white "></i>
                                                        </button>
                                                        <button onClick={() => { setDeleteOpen(true); setDeleteData(leave) }} className='h-8 w-9 mx-1 group flex justify-center items-center hover:bg-[#fc5a69] duration-200 rounded'>
                                                            <i className="fa-regular fa-trash-can text-[#fc5a69] group-hover:text-white"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            }
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

export default ApplyLeaveRequest