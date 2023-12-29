import { Button, Option, Select } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import Services from '../../../Api/Services';
import { TbAlphabetLatin } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';
const AttendanceView = () => {
  const [present, setPresent] = useState("all")

  const [date, setDate] = useState(`${new Date().getFullYear()}-${(new Date().getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`)
  const [attendances, setAttendances] = useState([]);
  const getData = async () => {
    await Services.getTodayAttendance().then((response) => {
      setAttendances(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    getData();
  }, [])

  const getDataByDate = async () => {
    await Services.getDayAttendance(date).then((response) => {
      setAttendances(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    getDataByDate();
  }, [date])

  const getDataByDateAndPresent = async () => {
    await Services.getDataByDateAndPresent(date,present).then((response) => {
      setAttendances(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    getDataByDateAndPresent();
  }, [present])

  const handleMakeAttendance = async () => {
    await Services.makeAttendance(date).then((response) => {
      console.log(response);
      getDataByDate();
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Services.markAttendance(attendances).then((response) => {
      toast.custom((t) => (
        <div
          className={`bg-toastGreen text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            } duration-300 ease-in-out`}>
          <div className="flex items-center gap-2 text-white">
            <span>
              <i className="fa-solid fa-circle-check"></i>
            </span>
            <div>
              <span className="">{response.data}</span>
            </div>
          </div>
        </div>
      ));
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='flex flex-col shadow-md p-4 rounded-lg'>
      <Toaster
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex w-full justify-between ">
        <p className='flex items-center text-2xl text-[#555555] font-bold'>Attendance</p>
        <div className="flex items-center justify-center">
            <div className="flex justify-end my-5">
              <Button onClick={handleMakeAttendance} className='text-white bg-green1 hover:bg-green-900 py-1'>Make Attendance</Button>
            </div>
          <input name='date' onChange={(e) => setDate(e.target.value)} value={date} className="appearance-none block w-full bg-[#f0f0f0] mx-3 text-grey-darker border border-gray rounded py-2 px-4 " id="dateFrom" type="date" placeholder="" />
          <Select label='Attendance' value={present || 'All'} className=''>
            <Option onClick={() => setPresent("all")} className=''>All</Option>
            <Option onClick={() => setPresent("Present")} className=''>Present</Option>
            <Option onClick={() => setPresent("Absent")} className=''>Absent</Option>
            <Option onClick={() => setPresent("Half Day")} className=''>Half Day</Option>
          </Select>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between shadow-md h-[600px] overflow-y-scroll p-4 rounded-lg my-5">
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
                <div className="font-semibold text-center">Action </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f0f0] text-sm">
            {attendances?.map((attendance, i) => {
              return (
                <tr key={i} className='hover:bg-[#f0f0f0]  min-w-8'>
                  <td className='text-center'>
                    <input type="checkbox" name="" className='mr-2 ' id="" />
                  </td>
                  <td className="p-2 whitespace-nowrap py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3"><img className="rounded-full" src={attendance?.profile} width="40" height="40" alt="Alex Shatov" /></div>
                      <div className="font-medium text-gray-800">
                        <p className='font-bold'>{attendance?.name}</p>
                        <p className='text-sm  text-darkgray2'>{attendance?.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{attendance?.empId}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left flex items-center justify-center">
                      <Button onClick={() => {
                        setAttendances(prevAttendances => {
                          const updatedAttendances = prevAttendances.map(att => {
                            if (att === attendance) {
                              return { ...att, isPresent: "Present" };
                            }
                            return att;
                          });
                          return updatedAttendances;
                        });
                      }} className={`h-12 w-20 mx-1 group flex justify-center items-center hover:bg-green1 duration-200 rounded hover:text-white text-black ${attendance?.isPresent === "Present" && "bg-green1 text-white"}`}>
                        Present
                      </Button>
                      <Button onClick={() => {
                        setAttendances(prevAttendances => {
                          const updatedAttendances = prevAttendances.map(att => {
                            if (att === attendance) {
                              return { ...att, isPresent: "Half Day" };
                            }
                            return att;
                          });
                          return updatedAttendances;
                        });
                      }} className={`h-12 w-20 mx-1 group flex justify-center items-center hover:bg-cyan-700 duration-200 rounded hover:text-white text-black ${attendance?.isPresent === "Half Day" && "bg-cyan-700 text-white"}`}>
                        Half Day
                      </Button>
                      <Button onClick={() => {
                        setAttendances(prevAttendances => {
                          const updatedAttendances = prevAttendances.map(att => {
                            if (att === attendance) {
                              return { ...att, isPresent: "Absent" };
                            }
                            return att;
                          });
                          return updatedAttendances;
                        });
                      }} className={`h-12 w-20 mx-1 group flex justify-center items-center hover:bg-[#fc5a69] duration-200 rounded hover:text-white text-black ${attendance?.isPresent === "Absent" && "bg-[#fc5a69] text-white"}`}>
                        Absent
                      </Button>
                      <Button onClick={() => {
                        setAttendances(prevAttendances => {
                          const updatedAttendances = prevAttendances.map(att => {
                            if (att === attendance) {
                              return { ...att, isPresent: "Leave" };
                            }
                            return att;
                          });
                          return updatedAttendances;
                        });
                      }} className={`h-12 w-20 mx-1 group flex justify-center items-center hover:bg-[#fc5a69] duration-200 rounded hover:text-white text-black ${attendance?.isPresent === "Leave" && "bg-[#fc5a69] text-white"}`}>
                        Leave
                      </Button>

                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>



        {/* <p className='flex items-center text-lg text-[#555555] font-bold'>Employee List</p>
        <div className="grid grid-flow-row grid-cols-3 gap-8 h-[400px] overflow-y-scroll">
          {attendances?.map((attendance, i) => {
            return (
              <div key={i} className="shadow-md flex">
                <img className='w-20 h-20 rounded-full ' src={attendance?.profile} alt="" />
                <div className="">

                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-end my-5">
          <Button className='text-white bg-green1 hover:bg-green-900'>Submit</Button>
        </div> 
        */}
      </div>
      <div className="flex justify-end my-5">
        <Button onClick={handleSubmit} className='text-white bg-green1 hover:bg-green-900'>Submit</Button>
      </div>
    </div>

  )
}

export default AttendanceView