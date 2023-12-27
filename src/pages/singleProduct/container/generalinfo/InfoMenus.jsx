import React, { useState } from 'react'
import { FaPlus, FaMinus, FaFacebookF, FaXTwitter, FaPinterestP } from "react-icons/fa6";
import images from '../../../../images';

export default function InfoMenus() {
    return (
        <div>
            <DeliveryMenu />
            <ReturnProduct />
            <div className='mt-5'>
                <div className='flex gap-4 items-center mb-14'>
                    <span className='font-bold'>Share:</span>
                    <FaFacebookF className='text-gray-500' />
                    <FaXTwitter className='text-gray-500' />
                    <FaPinterestP className='text-gray-500' />
                </div>
                <div className='flex gap-6'>
                    <img src={images.visa} alt="payment" />
                    <img src={images.mastercard} alt="payment" />
                    <img src={images.paypal} alt="payment" />
                </div>
            </div>
        </div>
    )
}

function DeliveryMenu() {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-b'>
            <p className='flex justify-between items-center mb-4'>
                <h1 className='font-bold'>Delivery</h1>
                <button onClick={() => setOpen(!open)}>
                    {open ?
                        <FaMinus className='text-primary cursor-pointer' />
                        :
                        <FaPlus className='text-primary cursor-pointer' />
                    }
                </button>
            </p>
            {open &&
                <div>
                    <p>Free standard shipping on orders <b>over $35</b> before tax, plus free returns.</p>
                    <div className='mt-6 px-5 pb-8'>
                        <table className='w-full'>
                            <tr className='border-b'>
                                <th className='font-light text-gray-500 uppercase py-3 text-start'>Type</th>
                                <th className='font-light text-gray-500 uppercase py-3 text-start'>How long</th>
                                <th className='font-light text-gray-500 uppercase py-3 text-start'>How much</th>
                            </tr>
                            <tr className='border-b'>
                                <td className='py-3 pr-5'>Standard delivery</td>
                                <td className='py-3 pr-5'>1-4 business days</td>
                                <td className='py-3 pr-5'>$4.50</td>
                            </tr>
                            <tr className='border-b'>
                                <td className='py-3 pr-5'>Express delivery</td>
                                <td className='py-3 pr-5'>1 business day</td>
                                <td className='py-3 pr-5'>$10.00</td>
                            </tr>
                            <tr>
                                <td className='py-3 pr-5'>Pick up in store</td>
                                <td className='py-3 pr-5'>1-3 business days</td>
                                <td className='py-3 pr-5'>Free</td>
                            </tr>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

function ReturnProduct() {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-b mt-5'>
            <p className='flex justify-between items-center mb-4'>
                <h1 className='font-bold'>Return</h1>
                <button onClick={() => setOpen(!open)}>
                    {open ?
                        <FaMinus className='text-primary cursor-pointer' />
                        :
                        <FaPlus className='text-primary cursor-pointer' />
                    }
                </button>
            </p>
            {open &&
                <div className='pb-5'>
                    <p>You have <b>60 days</b> to return the item(s) using any of the following methods:</p>
                    <ul className='list-disc marker:text-primary px-5 mt-3'>
                        <li>Free store return</li>
                        <li>Free returns via USPS Dropoff Service</li>
                    </ul>
                </div>
            }
        </div>
    )
}
