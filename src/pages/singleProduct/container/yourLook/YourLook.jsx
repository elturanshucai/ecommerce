import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import images from '../../../../images';
import { useSelector } from 'react-redux';
import ProductCard from '../../../../components/ProductCard';

export default function YourLook() {
    const { productDatabase } = useSelector(state => state.product)
    const yourLook = [
        {
            generalPhoto: images.look,
            products: productDatabase.filter(item => item.id === 23 || item.id === 24)
        },
        {
            generalPhoto: images.arrival4,
            products: productDatabase.filter(item => item.id === 10 || item.id === 11)
        }
    ]
    const [lookProducts, setLookProducts] = useState({
        generalPhoto: null,
        products: []
    })
    const [activePage, setActivePage] = useState(0)
    const [pageCount, setPageCount] = useState(1)

    const getData = () => {
        setLookProducts(yourLook[activePage])
        setPageCount(yourLook.length)
    }

    useEffect(() => {
        getData()
    }, [activePage, productDatabase])
    return (
        <section className='lg:px-40 px-5 mx-auto py-8'>
            <div className='flex justify-between items-center mb-14'>
                <h1 className='font-extrabold text-4xl'>Complete your look</h1>
                <div className='flex gap-4'>
                    <FaArrowLeftLong className='cursor-pointer' onClick={() => activePage > 0 && setActivePage(activePage - 1)} />
                    <FaArrowRightLong className='cursor-pointer' onClick={() => activePage < yourLook.length - 1 && setActivePage(activePage + 1)} />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-32'>
                <div className='col-span-1'>
                    <img src={lookProducts.generalPhoto} alt="general" />
                </div>
                <div className='col-span-1 grid grid-cols-2 gap-8'>
                    {lookProducts.products.map((item, index) => (
                        <div className='col-span-1' key={index}>
                            <ProductCard item={item} imageClass='object-full' />
                        </div>
                    ))}
                    <div className='w-full flex justify-center gap-2 col-span-2'>
                        {[...Array(pageCount)].map((_, index) => (
                            <button
                                onClick={() => setActivePage(index)}
                                className={`h-1 w-5 rounded-sm ${index === activePage ? 'bg-black' : 'bg-gray-400'}`}></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
