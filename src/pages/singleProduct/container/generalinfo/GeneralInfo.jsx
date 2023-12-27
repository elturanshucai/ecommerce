import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiMiniStar, HiOutlineStar } from "react-icons/hi2";
import SelectSize from './SelectSize';

export default function GeneralInfo() {
  const { productDatabase } = useSelector(state => state.product)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState()
  const data = productDatabase[productDatabase.length - 1]
  const [activeColor, setActiveColor] = useState(data?.colors[0])

  const getNextImage = () => {
    if (activeImage === data.photo.length - 1) {
      setActiveImage(0)
    } else {
      setActiveImage(activeImage + 1)
    }
  }

  const getPrevImage = () => {
    if (activeImage === 0) {
      setActiveImage(data.photo.length - 1)
    } else {
      setActiveImage(activeImage - 1)
    }
  }

  return (
    <div className='py-8 grid grid-cols-2 gap-20 relative'>
      <div className='col-span-1'>
        <div className='relative mb-5'>
          <img src={data.photo[activeImage]} alt="product" className='w-full h-full object-contain' />
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
          {data?.photo?.map((item, index) => (
            <div
              onClick={() => setActiveImage(index)}
              className={`rounded-md w-24 h-24 overflow-hidden ${index === activeImage && 'border border-primary'}`}>
              <img src={item} alt="image" className='w-full h-full object-contain' />
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-1'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex gap-8 items-center'>
            {data.type === 'discount' ?
              <>
                <div className='flex gap-3 items-center'>
                  <div className='text-red-500 font-bold text-2xl'>
                    ${data.price - (data.price * data?.discountPercent / 100)}
                  </div>
                  <div className='relative text-gray-500'>
                    ${data.price}
                    <p className='w-full h-[1px] bg-gray-500 absolute bottom-2'></p>
                  </div>
                </div>
                <div className='text-center px-2 py-1 rounded-md bg-red-500 text-white font-bold'>
                  -{data?.discountPercent}%
                </div>
              </>
              :
              <div>{data.price}</div>
            }
          </div>
          <div>
            <div className='flex items-center gap-1 mb-1'>
              {data.rating && [...Array(5)].map((item, index) => (
                data.rating >= index + 1 ? <HiMiniStar className='text-yellow-400' /> : <HiOutlineStar />
              ))}
            </div>
            <p className='text-xs text-gray-400 flex justify-end'>12 reviews</p>
          </div>
        </div>
        <div className='mb-6'>
          <p className='text-gray-500 mb-3'>Color</p>
          <div className='flex gap-2'>
            {data?.colors.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveColor(item)}
                className={`rounded-full border ${activeColor === item
                  && 'border-primary'} w-6 h-6 p-1 overflow-hidden cursor-pointer transition-all duration-200`}
              >
                <div
                  className='w-full h-full rounded-full'
                  style={{ backgroundColor: `${item}` }}></div>
              </div>
            ))}
            <span className='text-gray-500 ml-3'>{activeColor}</span>
          </div>
        </div>
        <SelectSize
          setSelectedSize={setSelectedSize}
          sizes={data?.sizes}
        />
      </div>
    </div >
  )
}
