import React, { useState } from 'react'
import images from '../../../../images'

export default function Subscribe() {
    const [activeButton, setActiveButton] = useState('women')
    const selectGender = (e) => {
        setActiveButton(e.target.id)
    }
    const unselectedButtonCSS = 'text-gray-600 border-gray-400 bg-transparent'
    const selectedButtonCSS = 'text-white border-none bg-primary'
    return (
        <section className='py-24 bg-[#F4F5F6]'>
            <div className='w-[95%] md:w-4/5 mx-auto flex justify-between gap-10'>
                <form className='w-full sm:w-3/5'>
                    <h1 className='text-4xl font-extrabold text-gray-900 mb-6'>Subscribe for updates</h1>
                    <p className='text-xl text-gray-600'>Subscribe for exclusive early sale access and new arrivals.</p>
                    <div className='my-8 flex gap-3 text-sm flex-wrap'>
                        <button
                            type='button'
                            className={`border rounded-md px-3 py-1 transition-colors duration-200 ${activeButton === 'women' ? selectedButtonCSS : unselectedButtonCSS}  font-bold `}
                            id='women'
                            onClick={selectGender}
                        >Women</button>
                        <button
                            type='button'
                            className={`border rounded-md px-3 py-1 transition-colors duration-200 ${activeButton === 'men' ? selectedButtonCSS : unselectedButtonCSS} font-bold`}
                            id='men'
                            onClick={selectGender}
                        >Men</button>
                        <button
                            type='button'
                            className={`border rounded-md px-3 py-1 transition-colors duration-200 ${activeButton === 'girls' ? selectedButtonCSS : unselectedButtonCSS} font-bold`}
                            id='girls'
                            onClick={selectGender}
                        >Girls</button>
                        <button
                            type='button'
                            className={`border rounded-md px-3 py-1 transition-colors duration-200 ${activeButton === 'boys' ? selectedButtonCSS : unselectedButtonCSS} font-bold`}
                            id='boys'
                            onClick={selectGender}
                        >Boys</button>
                    </div>
                    <div>
                        <label htmlFor="email" className='block mb-2 text-gray-800'>Email</label>
                        <div className='overflow-hidden mb-6 w-full sm:w-fit flex flex-nowrap flex-col vsm:flex-row'>
                            <input
                                type="email"
                                placeholder='Your working email'
                                className='border outline-none w-full vsm:w-fit h-[52px] px-4 py-3 rounded-l-md rounded-r-md vsm:rounded-r-none'
                            />
                            <button className='bg-primary font-semibold w-full vsm:w-fit mt-2 vsm:mt-0 text-white px-10 leading-[52px] rounded-r-md rounded-l-md vsm:rounded-l-none' type='button'>Subscribe</button>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <input
                                type="checkbox"
                                className='accent-primary w-4 h-4'
                            />
                            <p className='text-gray-700'>I agree to receive communications from Createx Store.</p>
                        </div>
                    </div>
                </form>
                <img
                    src={images.subscribeImg}
                    alt="subscribe"
                    className='hidden sm:block w-[30%] object-contain'
                />
            </div>
        </section>
    )
}
