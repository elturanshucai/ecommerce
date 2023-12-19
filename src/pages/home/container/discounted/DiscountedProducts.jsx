import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import ProductCard from '../../../../components/ProductCard';

export default function DiscountedProducts() {
    const [activePage, setActivePage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [data, setData] = useState([])
    const { productDatabase } = useSelector(state => state.product)
    const discountedProducts = productDatabase.filter(item => item.type === 'discount')

    const getDiscountedData = (page) => {
        let startIndex = 0 + page * 3
        let lastIndex = startIndex + 3
        setData(discountedProducts.slice(startIndex, lastIndex))
        calculatePages()
    }

    const calculatePages = () => {
        let arrayLength = Math.ceil(discountedProducts.length / 3)
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
        <section className='py-20 bg-gray-100'>
            <div className='w-4/5 md:w-3/4 mx-auto'>
                <div className='flex items-center justify-between mb-14'>
                    <h1 className='font-bold text-2xl'>Sale up to 70%</h1>
                    <div className='flex gap-6'>
                        <button onClick={getPrevPage}>
                            <FaArrowLeftLong />
                        </button>
                        <button onClick={getNextPage}>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-7'>
                    {data.map((item, index) => (
                        <ProductCard
                            index={index}
                            key={index}
                            type='discount'
                            item={item}
                            className={'col-span-3 sm:col-span-1'}
                            imageClass='w-4/5'
                        />))}
                </div>
                <div className='w-fit mx-auto'>
                    <button className='mt-20 border-2 relative z-0 font-semibold rounded-md border-primary text-primary text-center h-12 px-10'>
                        See all sale products
                    </button>
                </div>
            </div>
        </section>
    )
}
