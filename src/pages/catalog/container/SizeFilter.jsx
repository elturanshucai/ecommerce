import React from 'react'

export default function SizeFilter() {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-3'>
                <input
                    type="checkbox"
                    className='accent-primary'
                    id='xs'
                />
                <label htmlFor="xs" className='text-sm flex gap-1 items-center'>
                    <span>XS</span>
                    <span className='text-gray-400'>(16)</span>
                </label>
            </div>
            <div className='flex gap-3'>
                <input
                    type="checkbox"
                    className='accent-primary'
                    id='s'
                />
                <label htmlFor="s" className='text-sm flex gap-1 items-center'>
                    <span>S</span>
                    <span className='text-gray-400'>(16)</span>
                </label>
            </div>
            <div className='flex gap-3'>
                <input
                    type="checkbox"
                    className='accent-primary'
                    id='m'
                />
                <label htmlFor="m" className='text-sm flex gap-1 items-center'>
                    <span>M</span>
                    <span className='text-gray-400'>(16)</span>
                </label>
            </div>
            <div className='flex gap-3'>
                <input
                    type="checkbox"
                    className='accent-primary'
                    id='l'
                />
                <label htmlFor="l" className='text-sm flex gap-1 items-center'>
                    <span>L</span>
                    <span className='text-gray-400'>(16)</span>
                </label>
            </div>
            <div className='flex gap-3'>
                <input
                    type="checkbox"
                    className='accent-primary'
                    id='xl'
                />
                <label htmlFor="xl" className='text-sm flex gap-1 items-center'>
                    <span>XL</span>
                    <span className='text-gray-400'>(16)</span>
                </label>
            </div>
            <div className='flex gap-3'>
                <input
                    type="checkbox"
                    className='accent-primary'
                    id='plus'
                />
                <label htmlFor="plus" className='text-sm flex gap-1 items-center'>
                    <span>Plus Size</span>
                    <span className='text-gray-400'>(16)</span>
                </label>
            </div>
        </div>
    )
}
