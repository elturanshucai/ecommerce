import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import Subscribe from '../home/container/subscribe/Subscribe'
import { useParams } from 'react-router-dom'
import GeneralInfo from './container/generalinfo/GeneralInfo'
import ProductDetails from './container/details/ProductDetails'
import ProductReviews from './container/reviews/ProductReviews'
import { useSelector } from 'react-redux'

export default function SingleProductPage() {
    const { productName } = useParams()
    const [activeButton, setActiveButton] = useState('info')
    const { productDatabase } = useSelector(state => state.product)
    let product = productDatabase.filter(item => item.id === 22)[0]
    const handleChangeButton = (e) => {
        setActiveButton(e.target.id)
    }

    useEffect(() => {
        product = productDatabase.filter(item => item.id === 22)[0]
    }, [productDatabase])
    return (
        <MainLayout>
            <BreadCrumbs />
            <main className='lg:px-40 px-5 mx-auto py-8'>
                <div className='flex justify-between items-center mb-10'>
                    <h1 className='font-extrabold text-4xl'>{productName}</h1>
                    <p>
                        <span className='text-gray-500'>Art. No.</span>
                        <span className='text-gray-400'>183260098</span>
                    </p>
                </div>
                <div className='border-b pb-5 flex gap-8 font-bold'>
                    <button
                        id='info'
                        className={`transition-all duration-200 ${activeButton === 'info' ? 'text-primary border-primary border' : 'text-gray-400'} px-5 py-2 rounded-md `}
                        onClick={handleChangeButton}
                    >
                        General info
                    </button>
                    <button
                        id='detail'
                        className={`transition-all duration-200 ${activeButton === 'detail' ? 'text-primary border-primary border' : 'text-gray-400'} px-5 py-2 rounded-md `}
                        onClick={handleChangeButton}
                    >
                        Product details
                    </button>
                    <button
                        id='review'
                        className={`transition-all duration-200 relative ${activeButton === 'review' ? 'text-primary border-primary border' : 'text-gray-400'} px-5 py-2 rounded-md `}
                        onClick={handleChangeButton}
                    >
                        Reviews <span id='review' className='absolute text-xs top-2 right-2'>14</span>
                    </button>
                </div>
                {activeButton === 'info' && <GeneralInfo product={product} />}
                {activeButton === 'detail' && <ProductDetails product={product} />}
                {activeButton === 'review' && <ProductReviews product={product} />}
            </main>
            <Subscribe />
        </MainLayout>
    )
}
