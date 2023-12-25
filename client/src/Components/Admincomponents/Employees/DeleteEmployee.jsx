/* eslint-disable react/prop-types */
import { Transition, Dialog } from "@headlessui/react"
import { Button } from "@material-tailwind/react"
import { Fragment } from "react"
import toast, { Toaster } from "react-hot-toast"
import Services from "../../../Api/Services"

const DeleteEmployee = ({open, setOpen, cancelButtonRef, getData, data}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Services.deleteEmployee(data?.eid).then((response) => {
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
                            <span className="">Employee Deleted successFull !</span>
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
                                {error?.response?.status == 400 ? error?.response?.data : "Something went wrong "}
                            </span>
                        </div>
                    </div>
                </div>
            ));
        })
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
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                            <Dialog.Title as="h3" className="text-base font-semibold text-left  w-full leading-6 text-gray-900">
                                                Employee Delete
                                            </Dialog.Title>
                                            <hr className='text-[#f0f0f0] py-2' />
                                            <div className="">
                                                <p className="indent-4 font-poppins">Do you want to delete the employee?</p>
                                                <div className="flex flex-col w-full ">
                                                    <div className="flex ml-8 mt-2 items-center ">
                                                        <img className="rounded-full" src="https://wrraptheme.com/templates/lucid/hr/bs5/dist/assets/images/xs/avatar5.jpg" width="40" height="40" alt="Alex Shatov" />
                                                        <p className="uppercase align-top mx-4 font-semibold">{data?.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <Button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-md bg-[#fc5a69]  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={handleSubmit}
                                        >
                                            Delete Employee
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
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default DeleteEmployee