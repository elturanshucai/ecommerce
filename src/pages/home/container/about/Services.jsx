import React from 'react'
import images from '../../../../images'
import Divider from '../../../../components/Divider'

export default function Services() {
    return (
        <div className='grid grid-cols-2 md:flex items-center w-full gap-x-2 gap-y-10 justify-center mb-44'>
            <div className='col-span-1'>
                <img src={images.icDelivery} alt="icon" className='w-fit mx-auto mb-6' />
                <p className='text-xl text-gray-900 font-bold mb-2 text-center'>Fast Worldwide Shipping</p>
                <p className='text-gray-500 text-center'>Get free shipping over $250</p>
            </div>
            <Divider className="h-[150px] mx-10 md:block hidden" />
            <div className='col-span-1'>
                <img src={images.icCallCenter} alt="icon" className='w-fit mx-auto mb-6' />
                <p className='text-xl text-gray-900 font-bold mb-2 text-center'>24/7 Customer Support</p>
                <p className='text-gray-500 text-center'>Friendly 24/7 customer support</p>
            </div>
            <Divider className="h-[150px] mx-10 md:block hidden" />
            <div className='col-span-1'>
                <img src={images.icShield} alt="icon" className='w-fit mx-auto mb-6' />
                <p className='text-xl text-gray-900 font-bold mb-2 text-center'>Money Back Guarantee</p>
                <p className='text-gray-500 text-center'>We return money within 30 days</p>
            </div>
            <Divider className="h-[150px] mx-10 md:block hidden" />
            <div className='col-span-1'>
                <img src={images.icCreditCard} alt="icon" className='w-fit mx-auto mb-6' />
                <p className='text-xl text-gray-900 font-bold mb-2 text-center'>Secure Online Payment</p>
                <p className='text-gray-500 text-center'>Accept all major credit cards</p>
            </div>
        </div>
    )
}