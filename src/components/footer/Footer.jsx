import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaPinterestP, FaRegCopyright } from "react-icons/fa6";
import images from '../../images'
import { CiHeart } from "react-icons/ci";

export default function Footer() {
    return (
        <footer className='bg-[#1E212C] text-white'>
            <div className='w-[95%] md:w-4/5 mx-auto grid grid-cols-4 sm:grid-cols-10 gap-6 sm:gap-4 pt-14 pb-10'>
                <div className='col-span-2'>
                    <h2 className='uppercase font-bold mb-3'>Help</h2>
                    <div className='flex flex-col gap-1 opacity-60'>
                        <Link>Delivery & returns</Link>
                        <Link>FAQ</Link>
                        <Link>Track order</Link>
                        <Link>Contacts</Link>
                        <Link>Blog</Link>
                    </div>
                </div>

                <div className='col-span-2'>
                    <h2 className='uppercase font-bold mb-3'>Shop</h2>
                    <div className='flex flex-col gap-1 opacity-60'>
                        <Link>New arrivals</Link>
                        <Link>Trending now</Link>
                        <Link>Sales</Link>
                        <Link>Brands</Link>
                    </div>
                </div>

                <div className='col-span-2 sm:col-span-3'>
                    <h2 className='uppercase font-bold mb-3'>Get in touch</h2>
                    <div className='flex flex-col gap-1 mb-6'>
                        <p>
                            Call: <span className='opacity-60'>(405) 555-0128</span>
                        </p>
                        <p>
                            Email: <span className='opacity-60'>hello@createx.com</span>
                        </p>
                    </div>
                    <div className='flex gap-3 text-white flex-wrap'>
                        <Link className='bg-gray-700 p-2 rounded-md'>
                            <FaFacebookF />
                        </Link>
                        <Link className='bg-gray-700 p-2 rounded-md'>
                            <FaInstagram />
                        </Link>
                        <Link className='bg-gray-700 p-2 rounded-md'>
                            <FaXTwitter />
                        </Link>
                        <Link className='bg-gray-700 p-2 rounded-md'>
                            <FaYoutube />
                        </Link>
                        <Link className='bg-gray-700 p-2 rounded-md'>
                            <FaPinterestP />
                        </Link>
                    </div>
                </div>

                <div className='col-span-2 sm:col-span-3'>
                    <h2 className='uppercase font-bold mb-3'>Download our app</h2>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <img src={images.getappios} alt="get" className='object-contain' />
                        <img src={images.getappand} alt="get" />
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700'>
                <div className='w-[95%] md:w-4/5 mx-auto flex justify-between py-4'>
                    <div className='flex flex-wrap items-center gap-1'>
                        © All rights reserved. Made with
                        <CiHeart className='text-primary' />
                        by Createx Studio
                    </div>
                    <Link className='opacity-60'>Go to top</Link>
                </div>
            </div>
        </footer>
    )
}
