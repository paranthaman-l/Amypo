/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from '@material-tailwind/react/'
import Selector from '../../Selection'
import Services from '../../../Api/Services'
import toast, { Toaster } from "react-hot-toast";
const EditEmployee = ({ open, setOpen, cancelButtonRef, data, setData, getData }) => {
    const datas = [
        {
            label: "Trainer",
            value: "trainer"
        },
        {
            label: "Developer",
            value: "developer",
        },
        {
            label: "Content Developer",
            value: "contentdeveloper",
        },
        {
            label: "BDM",
            value: "bdm"
        },
    ]
    const bloodGroupData = [
        {
            label: "A+",
            value: "A+",
        },
        {
            label: "A-",
            value: "A-",
        },
        {
            label: "B+",
            value: "B+",
        },
        {
            label: "B-",
            value: "B-",
        },
        {
            label: "AB+",
            value: "AB+",
        },
        {
            label: "AB-",
            value: "AB-",
        },
        {
            label: "O+",
            value: "O+",
        },
        {
            label: "O-",
            value: "O-",
        },
    ]
    const profileRef = useRef(null);
    const [profile, setProfile] = useState("");
    const [role, setRole] = useState(data?.role);
    const [bloodGroup, setBloodGroup] = useState(data?.bloodGroup);
    console.log(data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        if (name === "maritalStatus")
            setData({ ...data, [name]: JSON.parse(value) });
    }
    useEffect(() => {
        setData({ ...data, "role": role })
    }, [role])
    useEffect(() => {
        setData({ ...data, "bloodGroup": bloodGroup })
    }, [bloodGroup])
    const handleProfileChange = (e) => {
        e.preventDefault();
        // setData({...data, "profile": e.target.files[0]});
        setProfile(e.target.files[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Services.EditEmployee(data).then((response) => {
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
                            <span className="">Update successFull!</span>
                        </div>
                    </div>
                </div>
            ));
            setTimeout(() => {
                getData();
                setOpen(false);
                toast.remove();
            }, 1500);
        }).catch((error) => {
            console.log(error);
            toast.custom((t) => (
                <div
                    className={`bg-[#ff5e5b] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                        } duration-300 ease-in-out`}>
                    <div className="flex items-center gap-2 text-white">
                        <span>
                            <i className="fa-solid text-xl fa-circle-xmark"></i>
                        </span>
                        <div>
                            <span className="">
                                {error.response.status == 400 ? error?.response?.data : "Something went wrong "}
                            </span>
                        </div>
                    </div>
                </div>
            ));
        })
        setTimeout(() => {
            toast.remove();
        }, 1500);
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
                                <form onSubmit={handleSubmit} className="bg-white px-4 pb-4 pt-5 sm:p-6  sm:pb-4">
                                    <div className="sm:flex sm:items-start flex justify-center items-center  h-[500px] overflow-y-scroll  w-full">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base fixed z-10 top-0 h-20 bg-white w-full flex items-center font-semibold leading-6 text-gray-900">
                                                Edit Employee
                                            </Dialog.Title>
                                            <hr className='text-[#f0f0f0] py-2' />
                                            <div className="-mx-3 md:flex mb-6 mt-12">
                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                                                        Name :
                                                    </label>
                                                    <input value={data?.name} name='name' onChange={handleChange} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Name" />
                                                </div>
                                                <div className="md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="empId">
                                                        Employee ID :
                                                    </label>
                                                    <input value={data?.empId} name='empId' onChange={handleChange} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4" id="empId" type="text" placeholder="Employee ID" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="email">
                                                        Email :
                                                    </label>
                                                    <input disabled value={data?.email} name='email' onChange={handleChange} rows={1} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="email" type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="phoneNumber">
                                                        Mobile No :
                                                    </label>
                                                    <input value={data?.phoneNumber} name='phoneNumber' onChange={handleChange} rows={1} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="phoneNumber" type="text" placeholder="Mobile No" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="emergencyContact">
                                                        Emergency Contact No :
                                                    </label>
                                                    <input value={data?.emergencyContact} name='emergencyContact' onChange={handleChange} rows={1} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="emergencyContact" type="text" placeholder="Emergency Contact No" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6 mt-12">
                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="panNumber">
                                                        PAN Number :
                                                    </label>
                                                    <input value={data?.panNumber} name='panNumber' onChange={handleChange} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="panNumber" type="text" placeholder="PAN Number" />
                                                </div>
                                                <div className="md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="dob">
                                                        DOB :
                                                    </label>
                                                    <input value={data?.dob?.substring(0, 10)} name='dob' onChange={handleChange} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4" id="dob" type="date" placeholder="DOB" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6 mt-12">
                                                <div className="md:w-1/2 mx-2  mb-6 md:mb-0">
                                                    <Selector title={"Role"} datas={datas} data={data?.role} setData={setRole} />
                                                </div>
                                                <div className="md:w-1/2 ">
                                                    <Selector title={"Blood Group"} datas={bloodGroupData} data={data?.bloodGroup} setData={setBloodGroup} />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="address">
                                                        Address :
                                                    </label>
                                                    <textarea value={data?.address} name='address' onChange={handleChange} rows={2} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="address" type="text" placeholder="Address..." />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="aadhaarNumber">
                                                        Aadhaar No :
                                                    </label>
                                                    <input value={data?.aadhaarNumber} name='aadhaarNumber' onChange={handleChange} className="appearance-none block w-full bg-gray text-grey-darker border border-gray rounded py-3 px-4 mb-3" id="aadhaarNumber" type="text" placeholder="Aadhaar No" />
                                                </div>
                                            </div>
                                            <div className="-mx-3 md:flex mb-6">
                                                <div className="md:w-full px-3 ">
                                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="profile">
                                                        Profile :
                                                    </label>
                                                    <span className='flex items-center'>
                                                        {profile ? <img className="h-16 w-16 text-gray-300 rounded-full" src={URL.createObjectURL(profile)} alt="" /> :
                                                            <svg className="h-16 w-16 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                        }
                                                        <input value={data?.profile} name='profile' onChange={handleProfileChange} type="file" accept='image/*' ref={profileRef} className='' style={{ display: "none" }} id="profile" />
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
                                                        <input checked={data?.maritalStatus} value={true} onChange={handleChange} type="radio" className="peer hidden" name="maritalStatus" />
                                                        <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
                                                            <h2 className="font-medium text-gray-700">Married</h2>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </label>

                                                    <label>
                                                        <input checked={!data?.maritalStatus} value={false} onChange={handleChange} type="radio" className="peer hidden" name="maritalStatus" />
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
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <Button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-md bg-green1  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={handleSubmit}
                                        >
                                            Update Employee
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
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default EditEmployee