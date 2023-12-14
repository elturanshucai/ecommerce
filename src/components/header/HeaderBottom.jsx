import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

export default function HeaderBottom() {
    return (
        <div className='bg-primary text-white py-2'>
            <div className='flex items-center mx-auto gap-3 w-fit'>
                <FaAngleLeft />
                <p>
                    <b>Up to 70% Off.</b>
                    <span className='underline ml-2'>Shop our latest sale styles</span>
                </p>
                <FaAngleRight />
            </div>
        </div>
    )
}
