import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import images from '../../../../images';

export default function Social() {
    return (
        <div className='flex flex-col sm:flex-row gap-7 w-4/5 mx-auto items-center'>
            <div className='w-full sm:w-2/5'>
                <h1 className='uppercase font-bold text-gray-900 mb-2'>Follow us on Instagram</h1>
                <p className='text-5xl font-extrabold text-gray-900 mb-14 break-words'>@createx_store</p>
                <button className='flex items-center h-14 px-10 text-center gap-2 font-bold rounded-md border border-primary text-primary'>
                    <FaInstagram />
                    Follow instagram
                </button>
            </div>
            <div className='grid grid-cols-3 gap-4 w-full sm:w-3/5'>
                <img src={images.social1} alt="image" className='col-span-3 sm:col-span-1 mx-auto' />
                <img src={images.social2} alt="image" className='col-span-3 sm:col-span-1 mx-auto' />
                <img src={images.social3} alt="image" className='col-span-3 sm:col-span-1 mx-auto' />
            </div>
        </div>
    )
}
