import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { likeProduct } from '../store/reducers/productReducers';

export default function ProductCard({ index, item, className, imageClass = 'max-w-[285px]' }) {
    const dispatch = useDispatch()
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

    return (
        <div
            key={index}
            className={`${className} relative`}
        >
            {
                item.rating &&
                <div className='absolute top-4 right-4 flex gap-1'>
                    {[...Array(5)].map((_, index) => (
                        <div key={index}>
                            {ratingRender(item.rating, index)}
                        </div>
                    ))}
                </div>
            }
            <button
                className='absolute right-4 bottom-28 bg-white rounded-full p-2'
                onClick={like}
            >
                {item.isLiked ?
                    <IoHeart color='red' />
                    :
                    <IoMdHeartEmpty />
                }
            </button>
            <img src={item.photo} alt="product" className={`max-h-80 h-80 w-full rounded-md ${imageClass}`} />
            <div className='p-4 bg-transparent'>
                <p className='text-gray-800 text-xl truncate'>{item.title}</p>
                <p className='text-gray-900 font-bold text-2xl'>${item.price.toLocaleString()}</p>
            </div>
        </div>
    )
}
