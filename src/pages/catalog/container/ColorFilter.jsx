import React, { useState } from 'react'

export default function ColorFilter() {
    const [selectedColor, setSelectedColor] = useState('')
    const colors = [
        'black',
        'blue',
        'yellow',
        'red',
        'brown',
        'purple',
        'green',
        'orange',
        'white',
        'gray'
    ]
    return (
        <div className='grid grid-cols-4 gap-2'>
            {colors.map((item, index) => (
                <div
                    key={index}
                    className='col-span-1 flex flex-col gap-1 cursor-pointer'
                    onClick={() => setSelectedColor(item)}
                >
                    <div className={`border ${selectedColor === item && 'border-primary'} rounded-full p-1 w-8 h-8 overflow-hidden`}>
                        <div className='w-full h-full rounded-full' style={{ backgroundColor: `${item}` }}></div>
                    </div>
                    <div className='text-gray-500'>{item}</div>
                </div>
            ))}
        </div>
    )
}
