import React from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function ProductImageSlider({ activeImage, setActiveImage, imageList }) {
    const getNextImage = () => {
        if (activeImage === imageList.length - 1) {
            setActiveImage(0)
        } else {
            setActiveImage(activeImage + 1)
        }
    }

    const getPrevImage = () => {
        if (activeImage === 0) {
            setActiveImage(imageList.length - 1)
        } else {
            setActiveImage(activeImage - 1)
        }
    }
    return (
        <div className='col-span-1'>
            <div className='relative mb-5'>
                <img src={imageList[activeImage]} alt="product" className='w-full h-full object-contain' />
                <div className='absolute top-1/2 flex justify-between w-full px-8'>
                    <button
                        onClick={getPrevImage}
                        className='flex items-center justify-center bg-white rounded-full w-12 h-12'>
                        <BsArrowLeft />
                    </button>
                    <button
                        onClick={getNextImage}
                        className='flex items-center justify-center bg-white rounded-full w-12 h-12'>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
            <div className='flex gap-5'>
                {imageList?.map((item, index) => (
                    <div
                        onClick={() => setActiveImage(index)}
                        className={`rounded-md w-24 h-24 overflow-hidden ${index === activeImage && 'border border-primary'}`}>
                        <img src={item} alt="image" className='w-full h-full object-contain' />
                    </div>
                ))}
            </div>
        </div>
    )
}
