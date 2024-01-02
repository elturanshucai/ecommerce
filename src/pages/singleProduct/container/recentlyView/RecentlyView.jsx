import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import ProductCard from '../../../../components/ProductCard';

export default function RecentlyView() {
    const [activePage, setActivePage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [data, setData] = useState([])
    const { productDatabase } = useSelector(state => state.product)
    const discountedProducts = productDatabase.filter(item => item.type === 'discount')

    const getDiscountedData = (page) => {
        let startIndex = 0 + page * 4
        let lastIndex = startIndex + 4
        setData(discountedProducts.slice(startIndex, lastIndex))
        calculatePages()
    }

    const calculatePages = () => {
        let arrayLength = Math.ceil(discountedProducts.length / 4)
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
        getDiscountedData(activePage)
    }, [activePage, productDatabase])
    return (
        <section className='py-20 z-0 pb-40'>
            <div className='w-4/5 md:w-3/4 mx-auto'>
                <div className='flex items-center justify-between mb-14'>
                    <h1 className='font-bold text-2xl'>Recently viewed</h1>
                    <div className='flex gap-6'>
                        <button onClick={getPrevPage}>
                            <FaArrowLeftLong />
                        </button>
                        <button onClick={getNextPage}>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-7'>
                    {data.map((item, index) => (
                        <ProductCard
                            index={index}
                            key={index}
                            type='discount'
                            item={item}
                            className={'col-span-4 sm:col-span-1'}
                            imageClass='w-4/5'
                        />))}
                </div>
            </div>
        </section>
    )
}
