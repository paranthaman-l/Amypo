import React, { useRef, useState } from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from '@material-tailwind/react/'
import Selector from '../../Selection'
const AddEmployee = ({ open, setOpen, cancelButtonRef }) => {
    const datas = [
        {
            label: "Developer",
            value: "developer",
        },
        {
            label: "Content Developer",
            value: "content developer",
        }
    ]
    const bloodGroupData = [
        {
            label: "A+",
            value: "A+",
        },
        {
            label: "B+",
            value: "B+",
        }
    ]
    const profileRef = useRef(null);
    const [profile, setProfile] = useState();
    const [data, setData] = useState();
    const handleProfileChange = (e) => {
        e.preventDefault();
        console.log(e);
        setProfile(e.target.files[0])
    }
    return (
        <Transition.Root show={open} as={Fragment} >
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"

                >
                    <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center  sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden  rounded-lg  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6  sm:pb-4">
                                    <div className="sm:flex sm:items-start flex justify-center items-center  h-[500px] overflow-y-scroll  w-full">
                                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div> */}
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base fixed z-10 top-0 h-20 bg-white w-full flex items-center font-semibold leading-6 text-gray-900">
                                                Add New Employee
                                            </Dialog.Title>
                                            <hr className='text-[#f0f0f0] py-2' />
                                            <div className="-mx-3 md:flex mb-6 mt-12">
                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                        Name :
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Name" />
                                                </div>
                                                <div className="md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                        Employee ID :
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Employee ID" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Email :
                                                    </label>
                                                    <input rows={1} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-password" type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Mobile No :
                                                    </label>
                                                    <input rows={1} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Mobile No" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Emergency Contact No :
                                                    </label>
                                                    <input rows={1} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Emergency Contact No" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6 mt-12">
                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                        PAN Number :
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="PAN Number" />
                                                </div>
                                                <div className="md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                        DOB :
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4" id="grid-last-name" type="date" placeholder="DOB" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6 mt-12">
                                                <div className="md:w-1/2 mx-2  mb-6 md:mb-0">
                                                    <Selector title={"Role"} datas={datas} data={data} setData={setData} />
                                                </div>
                                                <div className="md:w-1/2 ">
                                                    <Selector title={"Blood Group"} datas={bloodGroupData} data={data} setData={setData} />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Address :
                                                    </label>
                                                    <textarea rows={2} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Address..." />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Aadhaar No :
                                                    </label>
                                                    <input rows={1} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Aadhaar No" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3 ">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Profile :
                                                    </label>
                                                    <span className='flex items-center'>
                                                        {profile ? <img className="h-16 w-16 text-gray-300 rounded-full" src={URL.createObjectURL(profile)} alt="" /> :
                                                            <svg className="h-16 w-16 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        }
                                                        <input onChange={handleProfileChange} type="file" ref={profileRef} className='' style={{ display: "none" }} name="" id="" />
                                                        <Button onClick={() => profileRef.current.click()} className='bg-green1 text-white mx-5 shadow-lg'>Upload</Button>
                                                    </span>

                                                </div>
                                            </div>
                                            <div className="md:w-full mb-5 w-full">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                                    Marital Status :
                                                </label>
                                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                                                    <label>
                                                        <input type="radio" value="1" className="peer hidden" name="maritalstatus" />
                                                        <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                                                            <h2 className="font-medium text-gray-700">Married</h2>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </label>

                                                    <label>
                                                        <input type="radio" value="1" className="peer hidden" name="maritalstatus" />
                                                        <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                                                            <h2 className="font-medium text-gray-700">Un Married</h2>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <Button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green1  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        Add New Employee
                                    </Button>
                                    <Button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default AddEmployee