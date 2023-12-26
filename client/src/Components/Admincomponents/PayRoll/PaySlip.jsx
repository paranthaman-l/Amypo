import React from 'react'
import logo from '../../../assets/logo/logo.png'
import { Button } from '@material-tailwind/react'
const PaySlip = () => {
    return (
        <div className='bg-white shadow-xl mx-3 p-3 rounded-lg mt-4'>
            <div className="flex justify-between items-center">
                <div className="h-20 flex items-center">
                    <img className='h-20' src={logo} alt="" />
                    <div className="ml-4">
                        <p className='font-semibold text-lg'>Amypo Technologies</p>
                        <p className='text-darkgray text-sm'>72/459, Indhuma Nagar</p>
                        <p className='text-darkgray text-sm'>Coimbatore | Banglore</p>
                    </div>
                </div>
                <div className="hover:bg-[#f0f0f0]">
                    <p className='text-2xl font-bold text-darkgray2'>Invoice #1069</p>
                    <p className='text-sm'>Salary Month: Dec, 2023</p>
                </div>
            </div>
            <hr className='text-[#f0f0f0] h-1' />
            <div className="flex items-center my-8 mx-5">
                <img className='w-16 h-16 rounded-full' src="https://wrraptheme.com/templates/lucid/hr/bs5/dist/assets/images/sm/avatar2.jpg" alt="" />
                <div className="text-[#757575] mx-3">
                    <p className='font-semibold'>Employee Name</p>
                    <div className="text-sm mt-2">
                        <p>Employee Role</p>
                        <p>Employee ID : DEV_01</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between my-5">
                <table className='w-1/2 mr-2'>
                    <tr className='bg-[#f0f0f0] uppercase'>
                        <th className='py-2 w-[40px]'>#</th>
                        <th className='text-start'>Earnings</th>
                        <th className='text-start'>Total</th>
                    </tr>
                    <tbody className='divide-y divide-[#f0f0f0]'>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>1</td>
                            <td>Basic Salary</td>
                            <td>$1,500</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>2</td>
                            <td>House Rent Allowance (H.R.A.)</td>
                            <td>$50</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>3</td>
                            <td>Bonus</td>
                            <td>$150</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>4</td>
                            <td>Conveyance</td>
                            <td>$80</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>5</td>
                            <td>Other Allowance</td>
                            <td>$80</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <th></th>
                            <th className='text-start py-3'>Total Earnings</th>
                            <th className='text-start'>$1,860</th>
                        </tr>
                    </tbody>
                </table>

                <table className='w-1/2 ml-2'>
                    <tr className='bg-[#f0f0f0] uppercase'>
                        <th className='py-2 w-[40px]'>#</th>
                        <th className='text-start'>Deductions</th>
                        <th className='text-start'>Total</th>
                    </tr>
                    <tbody className='divide-y divide-[#f0f0f0]'>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>1</td>
                            <td>Tax Deducted at Source (T.D.S.)</td>
                            <td>$10</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>2</td>
                            <td>ESI</td>
                            <td>$0</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>3</td>
                            <td>Provident Fund</td>
                            <td>$150</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>4</td>
                            <td>C/Bank Loan</td>
                            <td>$120</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <td className='py-3 text-center'>5</td>
                            <td>Other Deductions</td>
                            <td>$8</td>
                        </tr>
                        <tr className="hover:bg-[#f0f0f0]">
                            <th></th>
                            <th className='text-start py-3'>Total Deductions</th>
                            <th className='text-start'>$288</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mx-10 my-10">
                <div className="">
                    <Button className='shadow-md mx-4 border-[2px] border-[#f0f0f0]'><i className="fa fa-print text-black"></i></Button>
                    <Button className='bg-green1 hover:bg-green-900'>Submit </Button>
                </div>
            </div>
        </div>
    )
}

export default PaySlip