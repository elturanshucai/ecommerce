import React from 'react'
import images from '../../../../images'

export default function GetApp() {
    return (
        <section className='bg-gray-900 relative h-auto xl:h-[300px] md:h-[500px] p-10'>
            <div className='md:absolute -top-8 flex w-4/5 mx-auto gap-10 lg:gap-20 xl:gap-36 md:left-8 xl:left-[12%] md:right-8 xl:right-[12%]'>
                <img src={images.getapp1} alt="getapp" className='md:block hidden object-none h-[330px]' />
                <div className='mt-0 md:mt-20 text-3xl flex flex-col gap-12'>
                    <div className='font-bold text-white'>Enjoy mobile shopping with our Createx Store App!</div>
                    <div className='flex flex-col md:flex-col xl:flex-row gap-6'>
                        <img src={images.getappios} className='cursor-pointer h-10 lg:h-20 object-contain xl:w-1/2' alt='getios' />
                        <img src={images.getappand} className='cursor-pointer h-10 lg:h-20 object-contain xl:w-1/2' alt='getandroid' />
                    </div>
                </div>
            </div>

        </section>
    )
}
