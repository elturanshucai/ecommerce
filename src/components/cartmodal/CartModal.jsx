import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseOutline, IoTrashOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import HRDivider from '../HRDivider';
import { Link } from 'react-router-dom';
import { basketItemChangeCount, removeBasketProduct } from '../../store/reducers/userReducers';
import { likeProduct } from '../../store/reducers/productReducers';

export default function CartModal({ setOpen }) {
    const { userBasket } = useSelector(state => state.user)
    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()
    const handleClose = () => {
        setOpen(false)
    }

    const moveToLiked = (itemId, index) => {
        dispatch(removeBasketProduct(index))
        dispatch(likeProduct(itemId))
    }

    const moveItemFromBasker = (index) => {
        dispatch(removeBasketProduct(index))
    }

    const priceCounter = () => {
        let count = 0
        for (let i = 0; i < userBasket.length; i++) {
            if (userBasket[i].type === 'discount') {
                let itemPrice = (userBasket[i].price - (userBasket[i].price * userBasket[i].discountPercent / 100)) * userBasket[i].count
                count += itemPrice
            } else {
                count += userBasket[i].count * userBasket[i].price
            }
        }
        setTotalPrice(count.toFixed(2))
    }

    const changeCount = (index, count) => {
        dispatch(basketItemChangeCount({ index, count }))
    }

    useEffect(() => {
        priceCounter()
    }, [userBasket])
    return (
        <div className='flex h-screen w-full top-0 left-0 right-0 fixed'>
            <div className='w-[75%] bg-modal' onClick={handleClose}></div>
            <div className='w-[25%] bg-white overflow-y-auto py-8 relative'>
                <div className='flex justify-between items-center px-6'>
                    <p className='font-bold text-xl'>Your cart {`(${userBasket.length})`}</p>
                    <IoCloseOutline className='text-gray-600 cursor-pointer w-6 h-6' onClick={handleClose} />
                </div>
                <HRDivider className='my-4' />
                <div className='mb-20'>
                    {userBasket.map((item, index) => (
                        <>
                            <div className='px-6 flex gap-4 relative' key={index}>
                                <img src={item.photo[0]} className='w-20 h-20 object-cover' />
                                <div className='pr-2'>
                                    <p className='break-words font-bold text-sm mb-1'>{item.title}</p>
                                    {item.color && <p className='text-xs'>
                                        <span className='text-gray-400 mr-1'>Color:</span>
                                        <span>{item.color}</span>
                                    </p>}
                                    {item.size && <p className='text-xs'>
                                        <span className='text-gray-400 mr-1'>Size:</span>
                                        <span className='uppercase'>{item.size}</span>
                                    </p>}
                                    <div className='flex items-center gap-4 mt-3'>
                                        <input
                                            type="number"
                                            onWheel={e => e.target.blur()}
                                            className='border outline-none rounded-sm px-3 py-2 w-20'
                                            value={item.count}
                                            onChange={(e) => changeCount(index, e.target.value)}
                                        />
                                        {item.type === 'discount' ?
                                            <div className='flex gap-1 items-center'>
                                                <span className='font-bold text-red-500'>${item.price - (item.price * item.discountPercent / 100)}</span>
                                                <span className='text-xs relative text-gray-500'>${item.price} <div className='block w-full absolute top-2 left-0 h-[1px] bg-gray-500'></div> </span>
                                            </div>
                                            :
                                            <p>
                                                <span className='font-bold'>${item.price}</span>
                                            </p>
                                        }
                                    </div>
                                    {!item.isLiked &&
                                        <button
                                            onClick={() => moveToLiked(item.id, index)}
                                            className='text-xs leading-9 flex items-center gap-2'
                                        >
                                            Move to
                                            <IoMdHeartEmpty className='w-4 h-4' />
                                        </button>
                                    }
                                </div>
                                <IoTrashOutline onClick={() => moveItemFromBasker(index)} className='absolute top-0 right-1 text-gray-500 cursor-pointer' />
                            </div>
                            {index < userBasket.length - 1 && <HRDivider className='my-4' />}
                        </>
                    ))}
                </div>
                <div className='px-6 fixed bottom-0 bg-white py-5 border-t w-[25%]'>
                    <div className='flex justify-between mb-5'>
                        <p className='text-gray-500 '>Subtotal</p>
                        <p className='text-xl font-bold'>${totalPrice}</p>
                    </div>
                    <Link to='/checkout' className='bg-primary text-white font-bold w-full rounded-md px-10 py-3 flex items-center justify-center gap-2'>
                        <FaRegCreditCard />
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}
