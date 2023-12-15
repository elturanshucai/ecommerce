import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

export default function LeftArrow({ setActiveIndex, activeIndex }) {
    const handleClick = () => {
        if (activeIndex === 0) {
            setActiveIndex(3)
        } else {
            setActiveIndex(activeIndex - 1)
        }
    }
    return (
        <button
            onClick={handleClick}
            className='absolute left-4 sm:left-8 top-[50%] bottom-[50%] w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-800'>
            <FaArrowLeft />
        </button>
    )
}
