import React from 'react'
import images from '../../../../images'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Newness() {
    return (
        <section className='px-3 sm:px-7 grid grid-cols-10 gap-4 mb-44'>
            <div className='col-span-10 lg:col-span-4 h-[500px] relative'>
                <div className='absolute top-5 left-5 sm:top-10 sm:left-10 z-10 '>
                    <p className='uppercase font-bold text-sm mb-3'>Summer Collections</p>
                    <h1 className='font-bold text-3xl mb-8'>Sale Up to 70%</h1>
                    <button className='py-3 px-8 text-primary border-2 font-semibold border-primary rounded-md'>Explore new prices</button>
                </div>
                <img
                    src={images.summerColl}
                    alt='image'
                    className='w-full h-full object-cover lg:object-none'
                />
            </div>
            <div className="col-span-10 lg:col-span-6 h-[500px] relative">
                <div className='absolute top-5 left-5 sm:top-10 sm:left-10 z-10'>
                    <p className='uppercase font-bold text-sm mb-3'>Deal of The Week</p>
                    <h1 className='font-bold text-3xl mb-8 w-4/5 sm:w-[300px]'>Stay Warm With Our New Sweaters</h1>
                    <button className='py-3 px-8 text-primary border-2 font-semibold border-primary rounded-md mb-20'>Shop now</button>
                    <div>
                        <p className='uppercase font-bold text-sm mb-3'>Limited time offer</p>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-xl font-semibold'>06</p>
                                <p className='font-semibold text-xs'>Days</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-xl font-semibold'>18</p>
                                <p className='font-semibold text-xs'>Hours</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-xl font-semibold'>24</p>
                                <p className='font-semibold text-xs'>Mins</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-xl font-semibold'>12</p>
                                <p className='font-semibold text-xs'>Sec</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={images.dealWeek}
                    alt='image'
                    className='w-full h-full object-cover sm:object-none'
                />
            </div>
            <div className='col-span-10 lg:col-span-6 relative h-[500px]'>
                <div className='absolute top-5 left-5 sm:top-10 sm:left-10 z-10'>
                    <p className='uppercase font-bold text-sm mb-3'>New Collection</p>
                    <h1 className='font-bold text-3xl mb-8 sm:w-[300px] w-4/5'>Shoes & Bags
                        autumn / winter 2020 </h1>
                    <button className='py-3 px-8 text-primary border-2 font-semibold border-primary rounded-md mb-20 flex items-center flex-nowrap justify-center gap-2'>
                        <span className='leading-none'>See offers</span> <FaArrowRightLong className='text-center' />
                    </button>
                </div>
                <img
                    src={images.newColl}
                    alt='image'
                    className='w-full h-full object-cover sm:object-none'
                />
            </div>
            <div className='col-span-10 lg:col-span-4 bg-gray-300 relative h-[500px]'>
                <div className='absolute top-5 left-5 sm:top-10 sm:left-10 z-10'>
                    <p className='uppercase font-bold text-sm mb-3 w-4/5'>For All new Email Subscribers</p>
                    <h1 className='font-bold text-3xl mb-8'>Get 5% Off & Free Delivery</h1>
                    <div className='flex flex-col gap-2 mb-5'>
                        <label htmlFor="mail">Email</label>
                        <div className='flex flex-col sm:flex-row rounded-md overflow-hidden w-4/5 gap-1 sm:gap-0'>
                            <input
                                placeholder='Your working email'
                                className='px-4 py-3 outline-none border border-gray-400 rounded-md sm:rounded-l-md sm:rounded-r-none'
                            />
                            <button className='text-white bg-primary px-3 sm:px-8 rounded-md sm:rounded-r-md sm:rounded-l-none py-3'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <p className='text-gray-800 w-2/3'>*Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.</p>
                </div>
                <img
                    src={images.forNewEmail}
                    alt="image"
                    className='absolute bottom-0 right-0 h-[300px] z-0 object-cover sm:object-none'
                />
            </div>
        </section>
    )
}
