import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../images'
import { IoIosArrowDown } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";

export default function HeaderTop({ hamburger }) {
    return (
        <div className='bg-gray-900 w-full text-[#D9D9D9] flex items-center relative justify-between lg:px-40 px-5 py-4 text-xs'>
            <div>Available 24/7 at <b>(405) 555-0128</b></div>
            <div className="hidden gap-2 md:gap-8 sm:flex sm:flex-row">
                <Link to='/'>Delivery & returns</Link>
                <Link to='/'>Track order</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Contacts</Link>
            </div>
            <div className='hidden sm:flex flex-col items-center gap-2 md:flex-row'>
                <img src={images.usa} className='bg-contain w-5 h-3' alt='currency' />
                <p className='flex items-center cursor-pointer'>
                    <span>ENG / ${" "}</span>
                    <IoIosArrowDown />
                </p>
            </div>
            <div className='hidden sm:flex flex-col items-center gap-1 sm:flex-row'>
                <MdPersonOutline className='w-5 h-3' />
                <div className='flex items-center gap-1'>
                    <button>Log in</button>/
                    <button>Register</button>
                </div>
            </div>
            <div className={`absolute z-50 top-[45px] right-0 bg-gray-900 ${hamburger ? 'flex' : 'hidden'} sm:hidden flex-col gap-3 p-3 rounded-sm`}>
                <Link to='/'>Delivery & returns</Link>
                <Link to='/'>Track order</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Contacts</Link>
                <p className='flex items-center cursor-pointer gap-1'>
                    <img src={images.usa} className='bg-contain w-5 h-3' alt='currency' />
                    <span>ENG / ${" "}</span>
                    <IoIosArrowDown />
                </p>
                <div className='flex items-center gap-1'>
                    <button>Log in</button>/
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}
