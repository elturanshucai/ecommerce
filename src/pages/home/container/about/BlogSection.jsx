import React from 'react'
import images from '../../../../images'
import Divider from '../../../../components/Divider'
import { FaRegComments } from "react-icons/fa";

export default function BlogSection() {
    return (
        <section className='mt-44 mb-20'>
            <div className='flex justify-between items-center mb-14'>
                <h1 className='font-extrabold text-xl sm:text-5xl text-gray-900'>Fashion blog</h1>
                <button className='px-2 sm:px-8 py-2 rounded-md border border-primary text-primary font-bold'>View blog</button>
            </div>
            <div className='grid grid-cols-2 gap-7'>
                <div className='bg-white col-span-2 md:col-span-1 shadow-2xl'>
                    <img src={images.blog1} alt="blog" className='w-full' />
                    <div className='p-6'>
                        <p className='text-xl text-gray-900 font-bold mb-3'>Bag Trends for Summer 2020</p>
                        <div className='flex items-center mb-4 gap-3 text-gray-500'>
                            <div>Fashion</div>
                            <Divider className="h-6" />
                            <div>August 24, 2020</div>
                            <Divider className="h-6" />
                            <div className='flex items-center gap-2'>
                                <FaRegComments />
                                No comments
                            </div>
                        </div>
                        <p className='truncate'>Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...</p>
                    </div>
                </div>
                <div className='bg-white col-span-2 md:col-span-1 shadow-2xl'>
                    <img src={images.blog2} alt="blog" className='w-full' />
                    <div className='p-6'>
                        <p className='text-xl text-gray-900 font-bold mb-3'>Bag Trends for Summer 2020</p>
                        <div className='flex items-center mb-4 gap-3 text-gray-500'>
                            <div>Fashion</div>
                            <Divider className="h-6" />
                            <div>August 24, 2020</div>
                            <Divider className="h-6" />
                            <div className='flex items-center gap-2'>
                                <FaRegComments />
                                No comments
                            </div>
                        </div>
                        <p className='truncate'>Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
