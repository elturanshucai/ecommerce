import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

export default function MaterialFilter() {
    const [data, setData] = useState([
        { title: 'Cotton', count: 124 },
        { title: 'Synthetics', count: 34 },
        { title: 'Nappa leather', count: 32 },
        { title: 'Leather', count: 18 },
        { title: 'Cashmere', count: 59 },
        { title: 'Denim', count: 16 }
    ])
    return (
        <>
            <div className='relative flex items-center border rounded-md overflow-hidden'>
                <input
                    type="text"
                    placeholder='Search the clothes type'
                    className='outline-none py-2 pl-3 pr-7 text-sm'
                />
                <CiSearch className='absolute right-2' />
            </div>

            <div className='flex flex-col gap-2'>
                {data.map((item, index) => (
                    <div className='flex gap-3' key={index}>
                        <input
                            type="checkbox"
                            className='accent-primary'
                            id={item.title}
                        />
                        <label htmlFor={item.title} className='text-sm flex gap-1 items-center'>
                            <span>{item.title}</span>
                            <span className='text-gray-400'>({item.count})</span>
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}
