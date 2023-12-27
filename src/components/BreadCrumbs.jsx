import React from 'react'
import { IoChevronForwardOutline, IoHomeOutline, IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

export default function BreadCrumbs() {
    const navigate = useNavigate()
    const paramsArray = window.location.pathname.split('/')
    const querySearchParams = new URLSearchParams(window.location.search)
    const color = querySearchParams.get('color')
    const material = querySearchParams.get('material')
    const type = querySearchParams.get('type')

    const removeParams = (type) => {
        if (type === 'all') {
            navigate(`${window.location.pathname}`)
        } else {
            querySearchParams.delete(type)
            const newQuery = querySearchParams.toString()
            navigate(`${window.location.pathname}?${newQuery}`)
        }
    }
    console.log(paramsArray)
    return (
        <div className='bg-[#F4F5F6] flex lg:px-40 px-5 h-14 items-center justify-between'>
            <div className='flex items-center'>
                <Link to='/'>
                    <IoHomeOutline />
                </Link>
                {paramsArray.map((item, index) => (
                    item && <div className='flex items-center' key={index}>
                        <IoChevronForwardOutline className='text-gray-400 mx-2' />
                        <span className={`${index === paramsArray.length - 1 && 'text-gray-400'}`}>{item}</span>
                    </div>
                ))}
            </div>
            <div className='flex items-center gap-5'>
                {type && <div className='flex gap-2 items-center text-gray-400'>
                    <IoClose onClick={() => removeParams('type')} />
                    {type}
                </div>}
                {color && <div className='flex gap-2 items-center text-gray-400'>
                    <IoClose onClick={() => removeParams('color')} />
                    {color}
                </div>}
                {material && <div className='flex gap-2 items-center text-gray-400'>
                    <IoClose onClick={() => removeParams('material')} />
                    {material}
                </div>}
                {(material || type || color) && <div className='flex gap-2 items-center text-gray-700'>
                    <IoClose onClick={() => removeParams('all')} />
                    Close All
                </div>}
            </div>
        </div >
    )
}