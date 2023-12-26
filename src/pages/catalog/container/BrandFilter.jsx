import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

export default function BrandFilter() {
    const [data, setData] = useState([
        { title: 'Adidas', count: 162 },
        { title: 'Ann Taylor', count: 12 },
        { title: 'Armani', count: 26 },
        { title: 'Banana Republic ', count: 5 },
        { title: 'Calvin Klein', count: 41 },
        { title: 'Columbia', count: 48 }
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
