/* eslint-disable react/prop-types */
import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Button, Input } from '@material-tailwind/react/'
const AddLeave = ({ open, setOpen, cancelButtonRef }) => {
    // private Date datefrom;
    // private Date dateto;
    // private int numberofdays;
    // private String leavetype;
    // private String leaveduration;
    // private String description;
    // private String username;
    // private String email;
    // private String userimage;
    // private String status;

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
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start flex justify-center items-center w-full">
                                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div> */}
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Add Leave
                                            </Dialog.Title>
                                            <hr className='text-[#f0f0f0] py-2' />
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                        From Date :
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-first-name" type="date" placeholder="Jane" />
                                                </div>
                                                <div className="md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                        To Date :
                                                    </label>
                                                    <input className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4" id="grid-last-name" type="date" placeholder="Doe" />
                                                </div>
                                            </div>
                                            {/* <div className="md:w-full mb-5">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                                                    Leave Type
                                                </label>
                                                <div className="relative">
                                                    <select className="block appearance-none w-full bg-gray border border-gray text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                                                        <option className=''>New Mexico</option>
                                                        <option>Missouri</option>
                                                        <option>Texas</option>
                                                        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                        </div>
                                                    </select>
                                                </div>
                                            </div> */}
                                            <div className="md:w-full mb-5 w-full">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                                    Leave Type :
                                                </label>
                                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                                                    <label>
                                                        <input type="radio" value="1" className="peer hidden" name="leavetype" />
                                                        <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                                                            <h2 className="font-medium text-gray-700">Paid</h2>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </label>

                                                    <label>
                                                        <input type="radio" value="1" className="peer hidden" name="leavetype" />
                                                        <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                                                            <h2 className="font-medium text-gray-700">Un Paid</h2>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="md:w-full mb-5 w-full">
                                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                                    Leave Duration :
                                                </label>
                                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                                                    <label>
                                                        <input type="radio" value="1" className="peer hidden" name="leaveduration" />
                                                        <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                                                            <h2 className="font-medium text-gray-700">Full Day</h2>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </label>

                                                    <label>
                                                        <input type="radio" value="1" className="peer hidden" name="leaveduration" />
                                                        <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                                                            <h2 className="font-medium text-gray-700">Half Day</h2>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Reason :
                                                    </label>
                                                    <textarea rows={1} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Vacation..." />
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
                                        Add Leave
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

export default AddLeave