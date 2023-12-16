import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

export default function ProductCard({ index, item, }) {

    const ratingRender = (score, index) => {
        return <>
            {score >= index + 1 ?
                <FaStar color='orange' /> :
                <FaRegStar className='text-gray-600' />
            }
        </>
    }

    return (
        <div
            key={index}
            className='relative w-1/6 min-w-[285px]'
        >
            {
                item.rating &&
                <div className='absolute top-4 right-4 flex gap-1'>
                    {[...Array(5)].map((_, index) => (
                        <>
                            {ratingRender(item.rating, index)}
                        </>
                    ))}
                </div>
            }
            <button className='absolute right-4 bottom-28 bg-white rounded-full p-2'>
                {item.isLiked ?
                    <IoHeart color='red' />
                    :
                    <IoMdHeartEmpty />
                }
            </button>
            <img src={item.photo} alt="product" className='max-h-80 h-80 max-w-[285px] w-full rounded-md' />
            <div className='p-4'>
                <p className='text-gray-800 text-xl truncate'>{item.title}</p>
                <p className='text-gray-900 font-bold text-2xl'>${item.price.toLocaleString()}</p>
            </div>
        </div>
    )
}
