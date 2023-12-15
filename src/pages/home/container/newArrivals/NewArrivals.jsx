import React, { useEffect, useState } from 'react'
import { getNewArrivals } from '../../../../services/homeServices'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

export default function NewArrivals() {
    const [activePage, setActivePage] = useState(0)
    const [pageArray, setPageArray] = useState([])
    let data = getNewArrivals(activePage)

    const calculatePages = () => {
        let array = []
        let arrayLength = Math.ceil(data.totalLength / 6)
        for (let i = 0; i < arrayLength; i++) {
            array[i] = i
        }
        setPageArray(array)
    }

    const ratingRender = (score, index) => {
        return <>
            {score >= index + 1 ?
                <FaStar color='orange' /> :
                <FaRegStar className='text-gray-600' />
            }
        </>
    }

    useEffect(() => {
        calculatePages()
    }, [])

    useEffect(() => {
        data = getNewArrivals(activePage)
    }, [activePage])

    return (
        <div className='px-5 mt-[1000px] sm:mt-[400px] mb-44'>
            <div className='w-3/4 sm:w-1/3 mx-auto mb-14'>
                <p className='font-semibold text-2xl text-center mb-6'>New arrivals</p>
                <p className='text-gray-700 text-center'>Check out our latest arrivals for the upcoming season</p>
                <Link to='/' className='text-primary underline flex justify-center'>See the collection here</Link>
            </div>
            <div className='flex mb-20 overflow-x-auto'>
                {pageArray.map((_, index) => (
                    <section id={index} className={`${index === activePage ? 'flex' : 'hidden'} gap-7 w-full overflow-auto`}>
                        {data.data.map((item, index) => (
                            <div
                                key={index}
                                className='relative w-1/6 min-w-[285px]'
                            >
                                {
                                    item.rating &&
                                    <div className='absolute top-4 right-4 flex gap-1'>
                                        {[...Array(5)].map((_, index) => (
                                            <>
                                                {ratingRender(item.rating, index)}
                                            </>
                                        ))}
                                    </div>
                                }
                                <button className='absolute right-4 bottom-28 bg-white rounded-full p-2'>
                                    {item.isLiked ?
                                        <IoHeart color='red' />
                                        :
                                        <IoMdHeartEmpty />
                                    }
                                </button>
                                <img src={item.photo} alt="product" className='max-h-80 h-80 max-w-[285px] w-full rounded-md' />
                                <div className='p-4'>
                                    <p className='text-gray-800 text-xl truncate'>{item.title}</p>
                                    <p className='text-gray-900 font-bold text-2xl'>${item.price.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                ))}
            </div>
            <div className='flex gap-4 items-center justify-center'>
                {pageArray.map(item => (
                    <button onClick={() => setActivePage(item)} className={`h-1 w-7 rounded-md ${item === activePage ? 'bg-gray-800' : 'bg-gray-400'} transition-colors duration-200`}></button>
                ))}
            </div>
        </div>
    )
}
