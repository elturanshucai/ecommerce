import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function RightArrow({ setActiveIndex, activeIndex }) {
    const handleClick = () => {
        if (activeIndex === 3) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndex + 1)
        }
    }
    return (
        <button
            onClick={handleClick}
            className='absolute right-4 sm:right-8 top-[50%] bottom-[50%] w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-800'>
            <FaArrowRight />
        </button>
    )
}
