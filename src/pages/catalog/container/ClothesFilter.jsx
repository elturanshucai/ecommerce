import React from 'react'
import { CiSearch } from 'react-icons/ci'

export default function ClothesFilter() {
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
                <div className='flex gap-3'>
                    <input
                        type="checkbox"
                        className='accent-primary'
                        id='coats'
                    />
                    <label htmlFor="coats" className='text-sm flex gap-1 items-center'>
                        <span>Coats</span>
                        <span className='text-gray-400'>(16)</span>
                    </label>
                </div>
                <div className='flex gap-3'>
                    <input
                        type="checkbox"
                        className='accent-primary'
                        id='jackets'
                    />
                    <label htmlFor="jackets" className='text-sm flex gap-1 items-center'>
                        <span>Jackets</span>
                        <span className='text-gray-400'>(16)</span>
                    </label>
                </div>
                <div className='flex gap-3'>
                    <input
                        type="checkbox"
                        className='accent-primary'
                        id='suits'
                    />
                    <label htmlFor="suits" className='text-sm flex gap-1 items-center'>
                        <span>Suits</span>
                        <span className='text-gray-400'>(16)</span>
                    </label>
                </div>
                <div className='flex gap-3'>
                    <input
                        type="checkbox"
                        className='accent-primary'
                        id='dresses'
                    />
                    <label htmlFor="dresses" className='text-sm flex gap-1 items-center'>
                        <span>Dresses</span>
                        <span className='text-gray-400'>(16)</span>
                    </label>
                </div>
                <div className='flex gap-3'>
                    <input
                        type="checkbox"
                        className='accent-primary'
                        id='cardigans'
                    />
                    <label htmlFor="cardigans" className='text-sm flex gap-1 items-center'>
                        <span>Cardigans & sweaters</span>
                        <span className='text-gray-400'>(16)</span>
                    </label>
                </div>
                <div className='flex gap-3'>
                    <input
                        type="checkbox"
                        className='accent-primary'
                        id='sweatshirts'
                    />
                    <label htmlFor="sweatshirts" className='text-sm flex gap-1 items-center'>
                        <span>Sweatshirts & hoodies</span>
                        <span className='text-gray-400'>(16)</span>
                    </label>
                </div>
            </div>
        </>
    )
}
