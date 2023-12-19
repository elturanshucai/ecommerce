import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../../../components/ProductCard';
import { useSelector } from 'react-redux';

export default function NewArrivals() {
    const [activePage, setActivePage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const { productDatabase } = useSelector(state => state.product)
    const [data, setData] = useState([])
    const arrivalsData = productDatabase.filter(item => item.type === 'arrival')

    const getNewArrivals = () => {
        let startIndex = 0 + activePage * 6
        let lastIndex = startIndex + 6
        setData(arrivalsData.slice(startIndex, lastIndex))
    }

    const calculatePages = () => {
        let arrayLength = Math.ceil(arrivalsData.length / 6)
        setTotalPages(arrayLength)
    }

    useEffect(() => {
        calculatePages()
    }, [])

    useEffect(() => {
        getNewArrivals()
    }, [activePage, productDatabase ])

    return (
        <div className='px-5 mt-[1000px] sm:mt-[400px] mb-44'>
            <div className='w-3/4 sm:w-1/3 mx-auto mb-14'>
                <p className='font-semibold text-2xl text-center mb-6'>New arrivals</p>
                <p className='text-gray-700 text-center'>Check out our latest arrivals for the upcoming season</p>
                <Link to='/' className='text-primary underline flex justify-center'>See the collection here</Link>
            </div>
            <div className='flex mb-20 overflow-x-auto'>
                {arrivalsData.map((_, index) => (
                    <section id={index} className={`${index === activePage ? 'flex' : 'hidden'} gap-7 w-full overflow-auto`} key={index}>
                        {data.map((item, index) => (
                            <ProductCard
                                index={index}
                                item={item}
                                className={'relative w-1/6 min-w-[285px]'}
                                likeFor="newArrivals"
                                key={index}
                            />
                        ))}
                    </section>
                ))}
            </div>
            <div className='flex gap-4 items-center justify-center'>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        onClick={() => setActivePage(index)}
                        className={`h-1 w-7 rounded-md ${index === activePage ? 'bg-gray-800' : 'bg-gray-400'} transition-colors duration-200`}
                        key={index}
                    ></button>
                ))}
            </div>
        </div>
    )
}
