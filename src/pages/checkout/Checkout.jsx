import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Link } from 'react-router-dom'
import { MdOutlinePersonOutline } from "react-icons/md";
import HRDivider from '../../components/HRDivider';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdHeartEmpty } from 'react-icons/io'
import { basketItemChangeCount, removeBasketProduct } from '../../store/reducers/userReducers';
import { likeProduct } from '../../store/reducers/productReducers';
import ShippingBilling from './container/Shipping&Billing';

export default function Checkout() {
    const { userBasket } = useSelector(state => state.user)
    const [subtotal, setSubTotal] = useState(0)
    const dispatch = useDispatch()

    const moveToLiked = (itemId, index) => {
        dispatch(removeBasketProduct(index))
        dispatch(likeProduct(itemId))
    }

    const moveItemFromBasker = (index) => {
        dispatch(removeBasketProduct(index))
    }

    const changeCount = (index, count) => {
        dispatch(basketItemChangeCount({ index, count }))
    }

    const calculateSubtotal = () => {
        let count = 0
        for (let i = 0; i < userBasket.length; i++) {
            if (userBasket[i].type === 'discount') {
                let itemPrice = (userBasket[i].price - (userBasket[i].price * userBasket[i].discountPercent / 100)) * userBasket[i].count
                count += itemPrice
            } else {
                count += userBasket[i].count * userBasket[i].price
            }
        }
        setSubTotal(count.toFixed(2))
    }

    useEffect(() => {
        calculateSubtotal()
    }, [userBasket])
    return (
        <MainLayout>
            <BreadCrumbs />
            <main className='grid grid-cols-3 px-5 lg:px-40'>
                <div className='col-span-2'>
                    <div className='flex items-center justify-between my-8'>
                        <p className='text-5xl font-extrabold'>Checkout</p>
                        <Link to="/" className='underline text-primary font-bold'>Back to shopping</Link>
                    </div>
                    <div className='rounded-md p-5 flex gap-4 items-center text-primary border border-primary bg-primary bg-opacity-5'>
                        <MdOutlinePersonOutline />
                        <span>Already have an account?  <span className='underline font-bold'>Sign in</span>  for faster checkout experience</span>
                    </div>
                    <HRDivider className='my-8' />
                    <div>
                        <h1 className='text-2xl font-bold mb-6'>1. Item review</h1>
                        {userBasket.map((item, index) => (
                            <>
                                <div key={index} className='grid grid-cols-8 p-6 bg-[#F4F5F6]'>
                                    <img src={item.photo[0]} alt="product" className='w-20 h-20 col-span-1 object-cover' />
                                    <div className='pl-5 pr-0 col-span-3'>
                                        <p className='mb-1'>{item.title}</p>
                                        {item.color && <p>
                                            <span className='text-gray-400'>Color: </span>
                                            <span>{item.color}</span>
                                        </p>}
                                        {item.size && <p>
                                            <span className='text-gray-400'>Size: </span>
                                            <span className='uppercase'>{item.size}</span>
                                        </p>}
                                    </div>
                                    <input
                                        type="number"
                                        value={item.count}
                                        className='col-span-1 w-[72px] px-3 py-2 block h-fit outline-none border-2 rounded-md'
                                        onWheel={e => e.target.blur()}
                                        onChange={e => changeCount(index, e.target.valueAsNumber)}
                                    />
                                    <div className='col-span-2 pl-5'>
                                        {item.type === 'discount' ?
                                            <>
                                                <span className='text-red-500 font-bold mr-1'>
                                                    ${item.price - (item.price * item.discountPercent / 100)}
                                                </span>
                                                <span className='text-gray-500 text-xs relative'>
                                                    ${item.price}
                                                    <span className='absolute w-full h-[1px] bg-gray-500 left-0 top-[10px]'></span>
                                                </span>
                                            </>
                                            :
                                            <span className='font-bold'>${item.price}</span>
                                        }
                                    </div>
                                    <div className='col-span-1'>
                                        <button
                                            onClick={() => moveItemFromBasker(index)}
                                            className='rounded-md border-2 border-primary py-2 px-3 text-primary w-full mb-1'>
                                            Delete
                                        </button>
                                        {!item.isLiked &&
                                            <button
                                                onClick={() => moveToLiked(item.id, index)}
                                                className='flex items-center gap-1 h-9 w-full'>
                                                <span className='text-sm'>Move to</span>
                                                <IoMdHeartEmpty />
                                            </button>
                                        }
                                    </div>
                                </div>
                                {index < userBasket.length - 1 && <HRDivider />}
                            </>
                        ))}
                        <div className='bg-[#F4F5F6] flex justify-end p-6 font-bold text-lg border-t'>Subtotal:{" $"}{subtotal}</div>
                    </div>
                    <HRDivider className='my-8' />
                    <ShippingBilling />
                    <HRDivider className='my-8' />
                </div>
                <div className='col-span-1'></div>
            </main>
        </MainLayout>
    )
}
