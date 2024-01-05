import React, { useState } from 'react'
import images from '../../../images'

export default function PaymentMethod() {
    const [cardNumber, setCardNumber] = useState("")
    const [expireDate, setExpireDate] = useState("")
    const [cvc, setCVC] = useState("")

    const changeCardNumber = (number) => {
        setCardNumber(number)
    }
    const changeExpireDate = (date) => {
        setExpireDate(date)
    }

    const changeCVC = (code) => {
        setCVC(code)
    }
    return (
        <div className='w-fit'>
            <h1 className='text-2xl font-bold mb-6'>4. Payment Method</h1>
            <div className='flex flex-col gap-4'>
                <div className='rounded-sm border p-6'>
                    <div className='flex gap-5 mb-4'>
                        <div className='flex items-center gap-3'>
                            <input
                                type="radio"
                                name="pay_method"
                                id="creditcard"
                                className='w-4 h-4 accent-primary'
                            />
                            <label htmlFor="creditcard" className='font-bold'>Credit card</label>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={images.visa} alt="visa" className='w-12 h-7' />
                            <img src={images.mastercard} alt="mastercard" className='w-12 h-7' />
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="cardnumber" className='block mb-2'>Card number</label>
                        <input
                            type="text"
                            id='cardnumber'
                            className='border rounded-sm px-4 py-2 text-gray-400 outline-blue-300 w-full'
                            placeholder='0000 0000 0000 0000'
                            onChange={e=>changeCardNumber(e.target.value)}
                            value={cardNumber}
                        />
                    </div>
                    <div className='flex gap-5'>
                        <div>
                            <label htmlFor="expiredate" className='block mb-2'>Expire date</label>
                            <input
                                type="text"
                                id='expiredate'
                                className='mb-2 border rounded-sm px-4 py-2 text-gray-400 outline-blue-300'
                                placeholder='mm/yy'
                                onChange={e => changeExpireDate(e.target.value)}
                                value={expireDate}
                            />
                        </div>
                        <div>
                            <label htmlFor="cvc" className='block mb-2'>CVC</label>
                            <input
                                type="text"
                                id='cvc'
                                placeholder='000'
                                className='outline-blue-300 px-4 py-2 text-gray-400 rounded-sm border'
                                onChange={e=>changeCVC(e.target.value)}
                                value={cvc}
                            />
                        </div>
                    </div>
                </div>
                <div className='rounded-sm border p-6 flex items-center'>
                    <input
                        type="radio"
                        className='w-4 h-4 accent-primary mr-3'
                        id='paypal'
                        name='pay_method'
                    />
                    <label htmlFor="paypal" className='mr-5'>PayPal</label>
                    <img src={images.paypal} alt="paypal" className='w-12 h-7' />
                </div>
                <div className='rounded-sm border p-6 flex items-center'>
                    <input
                        type="radio"
                        className='w-4 h-4 accent-primary mr-3'
                        id='cash'
                        name='pay_method'
                    />
                    <label htmlFor="cash" className='mr-5'>Cash on delivery</label>
                </div>
            </div>
        </div>
    )
}
