import React from 'react'
import { HiArrowSmLeft } from "react-icons/hi";
const Header = ({ title, path }) => {
  return (
    <div className='w-full px-10 flex justify-between items-center'>
      <div className="flex w-full flex-col">
        <p className='flex items-center text-xl text-[#555555] font-bold '><HiArrowSmLeft className='text-3xl text-green1' /> {title}</p>
        <p className='py-2 mx-3'><span className='text-green1 font-semibold'>amypo</span>{path}</p>
      </div>
      <div className="">
        Chart
      </div>
    </div>
  )
}

export default Header