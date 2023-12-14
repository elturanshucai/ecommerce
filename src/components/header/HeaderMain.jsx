import React from 'react'
import images from '../../images'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function HeaderMain() {
    return (
        <div className='lg:px-40 px-5 text-gray-900 flex flex-col gap-y-4 justify-between items-center py-8 lg:flex-row z-10'>
            <div className='flex gap-10 sm:flex-row flex-col'>
                <Link to="/">
                    <img src={images.logo} alt='logo' className='min-w-fit mx-auto' />
                </Link>
                <ul className='flex flex-wrap font-semibold gap-6'>
                    <Link to='/'>Women</Link>
                    <Link to='/'>Men</Link>
                    <Link to='/'>Girls</Link>
                    <Link to='/'>Boys</Link>
                    <Link to='/' className='text-red-500'>Sale</Link>
                </ul>
            </div>
            <div>
                <div className='flex gap-5 sm:gap-12 items-center'>
                    <div className='flex border border-gray-400 w-3/5 rounded-sm items-center overflow-hidden px-4 py-3'>
                        <input
                            className='outline-none text-sm w-[90%]'
                            type="text"
                            placeholder='Search for products..'
                        />
                        <IoIosSearch className='mx-auto cursor-pointer w-[10%] min-w-[20px]' />
                    </div>
                    <div className='flex items-center gap-2 sm:gap-4 h-fit w-2/5'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <IoHeartOutline />
                            <span>2</span>
                        </div>
                        <div className='w-[1px] bg-gray-400 h-8'></div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <MdOutlineShoppingCart />
                            <span className='bg-emerald-500 text-white h-full px-2 rounded-lg'>4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
