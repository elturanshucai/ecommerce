import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProductCard from '../../../../components/ProductCard';
import { useSelector } from 'react-redux';

export default function Trending() {
    const [activePage, setActivePage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [data, setData] = useState([])
    const { productDatabase } = useSelector(state => state.product)
    const trendingData = productDatabase.filter(item => item.type === 'trend')

    const getTrendingNowData = (page) => {
        let startIndex = 0 + page * 3
        let lastIndex = startIndex + 3
        setData(trendingData.slice(startIndex, lastIndex))
        calculatePages()
    }

    const calculatePages = () => {
        let arrayLength = Math.ceil(trendingData.length / 3)
        setTotalPages(arrayLength)
    }

    const getNextPage = () => {
        if (activePage < totalPages - 1) {
            setActivePage(activePage + 1)
        }
    }

    const getPrevPage = () => {
        if (activePage > 0) {
            setActivePage(activePage - 1)
        }
    }

    useEffect(() => {
        getTrendingNowData(activePage)
    }, [activePage, productDatabase])
    return (
        <section className='bg-gray-300 py-20'>
            <div className='w-4/5 sm:w-3/4 md:w-2/3 mx-auto'>
                <div className='flex items-center justify-between mb-14'>
                    <h1 className='font-bold text-2xl'>Trending now</h1>
                    <div className='flex items-center gap-3'>
                        <button
                            onClick={getPrevPage}
                            disabled={activePage === 0}
                            className={`bg-primary rounded-full p-3 text-white disabled:bg-gray-300 disabled:text-black`}>
                            <FaArrowLeftLong />
                        </button>
                        <button
                            onClick={getNextPage}
                            disabled={activePage === totalPages - 1}
                            className={`bg-primary rounded-full p-3 text-white disabled:bg-gray-300 disabled:text-black`}>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-7 overflow-x-auto'>
                    {data?.map((item, index) => (
                        <ProductCard
                            item={item}
                            index={index}
                            key={index}
                            className={'col-span-3 sm:col-span-1'}
                            imageClass='w-4/5'
                            likeFor='trendingNow'
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
