import React, { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { likeProduct } from '../store/reducers/productReducers';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { addBasketProduct } from '../store/reducers/userReducers';
import { Link } from 'react-router-dom';

export default function ProductCard({ index, item, className, imageClass = 'max-w-[285px]', type }) {
    const dispatch = useDispatch()
    const [selectedColor, setSelectedColor] = useState()
    const [selectedSize, setSelectedSize] = useState()
    const [activeImage, setActiveImage] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const ratingRender = (score, index) => {
        return <>
            {score >= index + 1 ?
                <FaStar color='orange' key={index} /> :
                <FaRegStar className='text-gray-600' key={index} />
            }
        </>
    }

    const like = () => {
        dispatch(likeProduct(item.id))
    }

    const checkDisabled = () => {
        if (item.colors && !item.sizes) {
            selectedColor ? setDisabled(false) : setDisabled(true)
        }
        else if (item.sizes && !item.colors) {
            selectedSize ? setDisabled(false) : setDisabled(true)
        }
        else if (item.sizes && item.colors) {
            (selectedColor && selectedSize) ? setDisabled(false) : setDisabled(true)
        }
    }

    const getNextImage = () => {
        if (activeImage === item?.photo.length - 1) {
            setActiveImage(0)
        } else {
            setActiveImage(activeImage + 1)
        }
    }

    const getPrevImage = () => {
        if (activeImage === 0) {
            setActiveImage(item?.photo.length - 1)
        } else {
            setActiveImage(activeImage - 1)
        }
    }

    const addToCart = () => {
        let addedProduct = {}
        addedProduct.id = item.id
        addedProduct.rating = item.rating
        addedProduct.isLiked = item.isLiked
        addedProduct.photo = item.photo
        addedProduct.title = item.title
        addedProduct.price = item.price
        addedProduct.discountPercent = item.discountPercent
        addedProduct.type = item.type
        addedProduct.color = selectedColor
        addedProduct.size = selectedSize
        addedProduct.count = 1
        dispatch(addBasketProduct(addedProduct))
    }

    useEffect(() => {
        checkDisabled()
    }, [selectedColor, selectedSize])
    return (
        <div
            key={index}
            className={`${className} relative group cursor-pointer ${type === 'discount' && 'hover:bg-white transition-colors hover:shadow-xl'} rounded-md`}
        >
            {
                item.rating &&
                <div className='absolute top-4 right-2 flex gap-1 text-xs sm:text-base'>
                    {[...Array(5)].map((_, index) => (
                        <div key={index}>
                            {ratingRender(item.rating, index)}
                        </div>
                    ))}
                </div>
            }
            {
                type === 'discount' &&
                <div className='absolute top-4 text-xs left-2 text-center p-1 bg-red-600 rounded-md text-white'>
                    -{item?.discountPercent}{" "}%
                </div>
            }
            <button
                className='absolute right-2 top-64 bg-white rounded-full p-2'
                onClick={like}
            >
                {item.isLiked ?
                    <IoHeart color='red' />
                    :
                    <IoMdHeartEmpty />
                }
            </button>
            {type === 'discount' && item?.photo.length > 1 &&
                <div className='absolute flex justify-between w-full bg-transparent h-20 items-center px-2 top-40 text-xl'>
                    <IoIosArrowBack className='cursor-pointer' onClick={getPrevImage} />
                    <IoIosArrowForward className='cursor-pointer' onClick={getNextImage} />
                </div>
            }
            <Link to={item.title}>
                <img src={type === 'discount' ? item.photo[activeImage] : item.photo} alt="product" className={`max-h-80 h-80 w-full rounded-md ${imageClass}`} />
            </Link>
            <div className='p-4 bg-transparent'>
                <Link to={item.title}>
                    <p className='text-gray-800 text-lg truncate'>{item.title}</p>
                </Link>

                {type === 'discount' ?
                    <>
                        {/* Price */}
                        <div className='flex gap-2 items-center'>
                            <p className='text-lg text-red-600 font-semibold'>${(item.price - (item.discountPercent * item.price) / 100).toLocaleString()}</p>
                            <div className=' relative'>
                                <p className='text-gray-500'>${(item.price).toLocaleString()}</p>
                                <p className='h-[1px] w-full bg-gray-800 absolute top-1/2'></p>
                            </div>
                        </div>

                        {/* product sizes and colors */}
                        <div className='my-4 items-center justify-between gap-4 hidden group-hover:flex'>
                            <div className='flex flex-wrap gap-1 w-3/5'>
                                {item?.sizes?.map((size, index) => (
                                    <button
                                        onClick={() => setSelectedSize(size)}
                                        key={index}
                                        className={`text-center text-xs p-1 rounded-md border-2 ${selectedSize == size ? 'border-primary' : 'border-gray-300'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <div className='group-hover:flex hidden flex-wrap gap-2 w-2/5'>
                                {item?.colors?.map((color, i) => (
                                    <button
                                        onClick={() => setSelectedColor(color)}
                                        className={`rounded-full p-1 w-6 h-6 border ${selectedColor === color ? 'border-primary' : 'border-gray-300'}`}>
                                        <div className='rounded-full w-full h-full' style={{
                                            backgroundColor: `${color}`
                                        }}></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={addToCart}
                            disabled={disabled}
                            className='group-hover:flex hidden items-center h-11 justify-center text-white text-center w-full bg-primary rounded-md disabled:opacity-75'>
                            <MdOutlineShoppingCart /> Add to cart
                        </button>
                    </> :
                    <p className='text-gray-900 font-bold text-xl'>${item.price.toLocaleString()}</p>
                }

            </div>
        </div >
    )
}
