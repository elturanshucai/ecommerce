import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { HiMiniStar, HiOutlineStar } from "react-icons/hi2";
import SelectSize from './SelectSize';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { addBasketProduct } from '../../../../store/reducers/userReducers';
import { likeProduct } from '../../../../store/reducers/productReducers';
import InfoMenus from './InfoMenus';
import ProductImageSlider from './ProductImageSlider';

export default function GeneralInfo({ product }) {
  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState()
  const [activeColor, setActiveColor] = useState(product?.colors[0])
  const [productCount, setProductCount] = useState(1)

  const dispatch = useDispatch()

  const addToCart = () => {
    let addedProduct = {}
    addedProduct.id = product?.id
    addedProduct.rating = product?.rating
    addedProduct.isLiked = product?.isLiked
    addedProduct.photo = product?.photo
    addedProduct.title = product?.title
    addedProduct.price = product?.price
    addedProduct.discountPercent = product?.discountPercent
    addedProduct.type = product?.type
    addedProduct.color = activeColor
    addedProduct.size = selectedSize
    addedProduct.count = productCount
    dispatch(addBasketProduct(addedProduct))
  }

  const like = () => {
    dispatch(likeProduct(product.id))
  }

  return (
    <div className='py-8 grid grid-cols-2 gap-20 relative mb-40'>
      {/* images */}
      <ProductImageSlider
        activeImage={activeImage}
        imageList={product?.photo}
        setActiveImage={setActiveImage}
      />

      {/* right side */}
      <div className='col-span-1'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex gap-8 items-center'>
            {product.type === 'discount' ?
              <>
                <div className='flex gap-3 items-center'>
                  <div className='text-red-500 font-bold text-2xl'>
                    ${product.price - (product.price * product?.discountPercent / 100)}
                  </div>
                  <div className='relative text-gray-500'>
                    ${product.price}
                    <p className='w-full h-[1px] bg-gray-500 absolute bottom-2'></p>
                  </div>
                </div>
                <div className='text-center px-2 py-1 rounded-md bg-red-500 text-white font-bold'>
                  -{product?.discountPercent}%
                </div>
              </>
              :
              <div>{product.price}</div>
            }
          </div>
          <div>
            <div className='flex items-center gap-1 mb-1'>
              {product.rating && [...Array(5)].map((item, index) => (
                product.rating >= index + 1 ? <HiMiniStar className='text-yellow-400' /> : <HiOutlineStar />
              ))}
            </div>
            <p className='text-xs text-gray-400 flex justify-end'>12 reviews</p>
          </div>
        </div>
        <div className='mb-6'>
          <p className='text-gray-500 mb-3'>Color</p>
          <div className='flex gap-2'>
            {product?.colors.map((item, index) => (
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
          sizes={product?.sizes}
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
            className={`rounded-md px-6 py-2 font-bold ${product.isLiked ? 'text-white bg-primary' : 'text-primary'} border-primary border flex items-center justify-center transition-colors duration-200`}>
            <IoHeartOutline />
            <span>Favorite</span>
          </button>
        </div>
        <InfoMenus />
      </div>
    </div >
  )
}
