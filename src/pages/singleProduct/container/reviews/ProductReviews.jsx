import React, { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from "react-icons/fa6";
import ProductCard from '../../../../components/ProductCard';
import Comments from './Comments';

export default function ProductReviews({ product }) {
  const [reviews, setReviews] = useState(['5', '4', '3', '5', '2', '5', '4', '1', '4', '5', '5', '5', '5', '3'])
  const [fiveLength, setFiveLength] = useState(0)
  const [fiveWidth, setFiveWidth] = useState(0)
  const [fourLength, setFourLength] = useState(0)
  const [fourWidth, setFourWidth] = useState(0)
  const [threeLength, setThreeLength] = useState(0)
  const [threeWidth, setThreeWidth] = useState(0)
  const [twoLength, setTwoLength] = useState(0)
  const [twoWidth, setTwoWidth] = useState(0)
  const [oneLength, setOneLength] = useState(0)
  const [oneWidth, setOneWidth] = useState(0)
  const starCounter = (starCount) => {
    let count = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i] == starCount) {
        count++;
      }
    }
    return count;
  }
  useEffect(() => {
    setFiveLength(starCounter(5))
    setFourLength(starCounter(4))
    setThreeLength(starCounter(3))
    setTwoLength(starCounter(2))
    setOneLength(starCounter(1))
  }, [reviews])

  useEffect(() => {
    setFiveWidth(Math.round((fiveLength * 100 / reviews.length)))
  }, [fiveLength])

  useEffect(() => {
    setFourWidth(Math.round((fourLength * 100 / reviews.length)))
  }, [fourLength])

  useEffect(() => {
    setThreeWidth(Math.round((threeLength * 100) / reviews.length))
  }, [threeLength])

  useEffect(() => {
    setTwoWidth((Math.round((twoLength * 100) / reviews.length)))
  }, [twoLength])

  useEffect(() => {
    setOneWidth((Math.round((oneLength * 100) / reviews.length)))
  }, [oneLength])
  return (
    <div className='py-8 grid grid-cols-5 gap-20'>
      <div className='col-span-3'>
        <div className='flex gap-10 mb-20'>
          <div className='w-2/5'>
            <h1 className='font-extrabold text-3xl mb-5'>{reviews.length} reviews</h1>
            <div className='flex gap-[2px] mb-5'>
              {[...Array(5)].map((_, index) => (
                index + 1 > product.rating ?
                  <FaRegStar key={index} className='text-gray-400' />
                  :
                  <FaStar key={index} className='text-yellow-400' />
              ))}
            </div>
            <p className='text-gray-400 text-sm'>8 out of 10 (80%)
              Customers recommended this product</p>
          </div>

          <div className='w-3/5 flex flex-col gap-2'>
            <div className='flex gap-4 items-center'>
              <p className='text-gray-400 flex items-center gap-1'>5 <FaRegStar /></p>
              <div className='relative bg-gray-200 w-full h-1 rounded-lg overflow-hidden'>
                <div className={`absolute top-0 left-0 rounded-lg bg-[#03CEA4] h-1`} style={{ width: `${fiveWidth}%` }}></div>
              </div>
              <p className='text-gray-400'>{fiveLength}</p>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-gray-400 flex items-center gap-1'>4 <FaRegStar /></p>
              <div className='relative bg-gray-200 w-full h-1 rounded-lg overflow-hidden'>
                <div className={`absolute top-0 left-0 rounded-lg bg-[#1FDF58] h-1`} style={{ width: `${fourWidth}%` }}></div>
              </div>
              <p className='text-gray-400'>{fourLength}</p>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-gray-400 flex items-center gap-1'>3 <FaRegStar /></p>
              <div className='relative bg-gray-200 w-full h-1 rounded-lg overflow-hidden'>
                <div className={`absolute top-0 left-0 rounded-lg bg-[#F2EA2B] h-1`} style={{ width: `${threeWidth}%` }}></div>
              </div>
              <p className='text-gray-400'>{threeLength}</p>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-gray-400 flex items-center gap-1'>2 <FaRegStar /></p>
              <div className='relative bg-gray-200 w-full h-1 rounded-lg overflow-hidden'>
                <div className={`absolute top-0 left-0 rounded-lg bg-[#F89828] h-1`} style={{ width: `${twoWidth}%` }}></div>
              </div>
              <p className='text-gray-400'>{twoLength}</p>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-gray-400 flex items-center gap-1'>1 <FaRegStar /></p>
              <div className='relative bg-gray-200 w-full h-1 rounded-lg overflow-hidden'>
                <div className={`absolute top-0 left-0 rounded-lg bg-[#FF4242] h-1`} style={{ width: `${oneWidth}%` }}></div>
              </div>
              <p className='text-gray-400'>{oneLength}</p>
            </div>
          </div>
        </div>

        <Comments />
      </div>
      <div className="col-span-2">
        <ProductCard
          item={product}
          type={product.type}
          imageClass='w-full'
        />
      </div>
    </div>
  )
}
