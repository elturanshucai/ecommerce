import React, { useEffect, useState } from 'react'
import images from '../../images'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';

export default function HeaderMain() {
    const { productDatabase } = useSelector(state => state.product)
    const [likedProducts, setLikedProducts] = useState([])
    useEffect(() => {
        let array = productDatabase.filter(item => item.isLiked === true)
        setLikedProducts(array)
    }, [productDatabase])
    return (
        <div className='lg:px-40 px-5 text-gray-900 flex flex-col gap-y-4 gap-x-10 justify-between items-center py-8 lg:flex-row z-10'>
            <div className='flex gap-10 sm:flex-row flex-col w-fit sm:w-2/3'>
                <Link to="/">
                    <img src={images.logo} alt='logo' className='min-w-fit mx-auto' />
                </Link>
                <ul className='flex flex-wrap sm:flex-nowrap font-semibold gap-4'>
                    <Link to='/'>Women</Link>
                    <Link to='/'>Men</Link>
                    <Link to='/'>Girls</Link>
                    <Link to='/'>Boys</Link>
                    <Link to='/' className='text-red-500'>Sale</Link>
                </ul>
            </div>
            <div className='flex gap-3 sm:gap-12 items-center w-fit sm:w-1/3'>
                <div className='flex border border-gray-400 w-fit sm:w-4/5 rounded-sm items-center overflow-hidden px-4 py-3'>
                    <input
                        className='outline-none text-sm w-[90%]'
                        type="text"
                        placeholder='Search for products..'
                    />
                    <IoIosSearch className='mx-auto cursor-pointer w-[10%] min-w-[20px]' />
                </div>
                <div className='flex items-center gap-1 sm:gap-4 h-fit w-fit sm:w-1/5'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <IoHeartOutline />
                        <span>{likedProducts.length}</span>
                    </div>
                    <div className='w-[1px] bg-gray-400 h-8'></div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <MdOutlineShoppingCart />
                        <span className='bg-emerald-500 text-white h-full px-2 rounded-lg'>
                            4
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
