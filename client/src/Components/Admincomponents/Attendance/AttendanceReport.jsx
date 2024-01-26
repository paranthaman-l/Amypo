/* eslint-disable no-constant-condition */
import { Button, Option, Select } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import Services from '../../../Api/Services';

const AttendanceReport = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [date, setDate] = useState([]);
  const [reports, setReports] = useState([])
  const [monthReports, setMonthReports] = useState([])
  const GetReport = async (e) => {
    e.preventDefault();
    await Services.getReport(startDate, endDate).then((response) => {
      setReports(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  const getMonthlyReport = async () => {
    const currentDate = new Date(); // Get current date
      const currentMonth = currentDate.getMonth(); // Get current month (0-indexed)
      const currentYear = currentDate.getFullYear(); // Get current year
    await Services.getMonthlyReport(currentMonth+1,currentYear).then((response) => {
      setMonthReports(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    const setDates = () => {
      const currentDate = new Date(); // Get current date
      const currentMonth = currentDate.getMonth(); // Get current month (0-indexed)
      const currentYear = currentDate.getFullYear(); // Get current year
      const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get number of days in current month

      const formattedDates = [];

      for (let day = 1; day <= numDaysInMonth; day++) {
        const formattedDate = `${currentYear}-${currentMonth + 1 < 10 ? '0' : ''}${currentMonth + 1}-${day < 10 ? '0' : ''}${day}`;
        formattedDates.push(formattedDate);
      }

      setDate(formattedDates);
    }
    setDates();
    getMonthlyReport();
  }, [])

  return (
    <div className='flex flex-col shadow-md p-4 rounded-lg'>
      <div className="flex w-full justify-between ">
        <p className='flex items-center text-2xl text-[#555555] font-bold'>Attendance Report</p>
        {/* <div className="flex items-center justify-center">
          <input name='startDate' onChange={(e) => setStartDate(e.target.value)} value={startDate} className="appearance-none block w-full bg-[#f0f0f0] mx-3 text-grey-darker border border-gray rounded py-2 px-4 " id="dateFrom" type="date" placeholder="" />
          <input name='endDate' onChange={(e) => setEndDate(e.target.value)} value={endDate} className="appearance-none block w-full bg-[#f0f0f0] mx-3 text-grey-darker border border-gray rounded py-2 px-4 " id="dateFrom" type="date" placeholder="" />
          <div className="flex justify-end my-5">
            <Button onClick={GetReport} className='text-white bg-green1 hover:bg-green-900 py-1'>Get Report</Button>
          </div>
          <Select label='Attendance' value={present || 'All'} className=''>
          <Option onClick={() => setPresent("all")} className=''>All</Option>
          <Option onClick={() => setPresent("Present")} className=''>Present</Option>
          <Option onClick={() => setPresent("Absent")} className=''>Absent</Option>
          <Option onClick={() => setPresent("Half Day")} className=''>Half Day</Option>
        </Select>
        </div> */}
      </div>

      <div className="flex w-full flex-col justify-between shadow-md h-[600px] overflow-y-scroll p-4 rounded-lg my-5">
        {/* <table className=" w-full">
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
                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                  </svg>
                </div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Present     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                  fill="currentColor"
                >
                  <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                </svg></div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Half Day     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                  fill="currentColor"
                >
                  <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                </svg></div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Absent     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                  fill="currentColor"
                >
                  <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                </svg></div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Leave     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-[0.75rem] h-[0.75rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
                  fill="currentColor"
                >
                  <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                </svg></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f0f0] text-sm">
            {reports?.map((report, i) => {
              return (
                <tr key={i} className='hover:bg-[#f0f0f0]  min-w-8'>
                  <td className='text-center'>
                    <input type="checkbox" name="" className='mr-2 ' id="" />
                  </td>
                  <td className="p-2 whitespace-nowrap py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3"><img className="rounded-full" src={report?.profile} width="40" height="40" alt="Alex Shatov" /></div>
                      <div className="font-medium text-gray-800">
                        <p className='font-bold'>{report?.name}</p>
                        <p className='text-sm  text-darkgray2'>{report?.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{report?.countOfPresent}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{report?.countOfHalfDay}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{report?.countOfAbsent}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{report?.countOfLeave}</div>
                  </td>

                </tr>
              )
            })}
          </tbody>
        </table> */}
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
                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                  </svg>
                </div>
              </th>
              {date?.map((date, i) => {
                return (
                  <th key={i}>
                    {date.substring(date.length - 2)}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f0f0] text-sm">
            {Object.values(monthReports)?.map((report, i) => {
              return (
                <tr key={i} className='hover:bg-[#f0f0f0]  min-w-8'>
                  <td className='text-center'>
                    <input type="checkbox" name="" className='mr-2 ' id="" />
                  </td>
                  <td className="whitespace-nowrap py-3">
                    <div className="flex w-[11vw]">
                      <div className="w-10 h-10 flex-shrink-0 mr-5 sm:mr-3"><img className="rounded-full" src={report[0]?.profile} width="40" height="40" alt="profile" /></div>
                      <div className="font-medium text-gray-800">
                        <p className='font-bold'>{report[0]?.name}</p>
                        <p className='text-sm  text-darkgray2'>{report[0]?.email}</p>
                      </div>
                    </div>
                  </td>
                  {date?.map((dateString, i) => {
                    const presentReport = report.find(rep => rep.date === dateString && rep.isPresent === "Present");
                    const check = report.find(rep => rep.date === dateString);
                    return (
                      <th key={i}>
                        {check ? 
                        (
                          presentReport ? (
                            <i className='fa fa-check text-green1 font-bold' ></i>
                          ) : (
                            <i className='fa fa-close text-red font-bold'></i>
                          ))
                        :
                        "" 
                        }
                      </th>
                    );
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default AttendanceReport