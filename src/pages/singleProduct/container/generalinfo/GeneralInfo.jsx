import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiMiniStar, HiOutlineStar } from "react-icons/hi2";
import SelectSize from './SelectSize';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { addBasketProduct } from '../../../../store/reducers/userReducers';
import { likeProduct } from '../../../../store/reducers/productReducers';
import InfoMenus from './InfoMenus';
import ProductImageSlider from './ProductImageSlider';

export default function GeneralInfo() {
  const { productDatabase } = useSelector(state => state.product)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState()
  let data = productDatabase[productDatabase.length - 1]
  const [activeColor, setActiveColor] = useState(data?.colors[0])
  const [productCount, setProductCount] = useState(1)

  const dispatch = useDispatch()

  const addToCart = () => {
    let addedProduct = {}
    addedProduct.id = data?.id
    addedProduct.rating = data?.rating
    addedProduct.isLiked = data?.isLiked
    addedProduct.photo = data?.photo
    addedProduct.title = data?.title
    addedProduct.price = data?.price
    addedProduct.discountPercent = data?.discountPercent
    addedProduct.type = data?.type
    addedProduct.color = activeColor
    addedProduct.size = selectedSize
    addedProduct.count = productCount
    dispatch(addBasketProduct(addedProduct))
  }

  const like = () => {
    dispatch(likeProduct(data.id))
  }

  useEffect(() => {
    data = productDatabase[productDatabase.length - 1]
  }, [productDatabase])

  return (
    <div className='py-8 grid grid-cols-2 gap-20 relative mb-40'>
      {/* images */}
      <ProductImageSlider
        activeImage={activeImage}
        imageList={data?.photo}
        setActiveImage={setActiveImage}
      />

      {/* right side */}
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
        <div className='flex gap-6 mt-8 flex-wrap mb-12'>
          <input
            type="number"
            onWheel={e => e.target.blur()}
            className='py-3 px-4 outline-none border rounded-sm w-20'
            min={1}
            value={productCount}
            onChange={e => setProductCount(e.target.valueAsNumber)}
          />
          <button
            onClick={addToCart}
            className='rounded-md bg-primary text-white font-bold px-6 py-2 flex items-center justify-center'>
            <MdOutlineShoppingCart />
            <span className='w-fit'>Add to cart</span>
          </button>
          <button
            onClick={like}
            className={`rounded-md px-6 py-2 font-bold ${data.isLiked ? 'text-white bg-primary' : 'text-primary'} border-primary border flex items-center justify-center transition-colors duration-200`}>
            <IoHeartOutline />
            <span>Favorite</span>
          </button>
        </div>
        <InfoMenus />
      </div>
    </div >
  )
}
