import React from 'react'

export default function ShippingMethod() {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-6'>3. Shipping Method</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <input
                            type="radio"
                            name='ship_method'
                            onChange={e => console.log(e.target.value)}
                            className='accent-primary w-4 h-4'
                            id='1'
                        />
                        <div>
                            <label htmlFor="1" className='block font-bold leading-none'>Courier to your address</label>
                            <p className='text-gray-400'>Estimated date: September 9</p>
                        </div>
                    </div>
                    <p>$25.00</p>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <input
                            type="radio"
                            name='ship_method'
                            onChange={e => console.log(e.target.value)}
                            className='accent-primary w-4 h-4'
                            id='2'
                        />
                        <div>
                            <label htmlFor="2" className='block font-bold leading-none'>Pick up from store</label>
                            <p className='text-gray-400'>Pick up on September 8 from 12:00</p>
                        </div>
                    </div>
                    <p>Free</p>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <input
                            type="radio"
                            name='ship_method'
                            onChange={e => console.log(e.target.value)}
                            className='accent-primary w-4 h-4'
                            id='3'
                        />
                        <div>
                            <label htmlFor="3" className='block font-bold leading-none'>UPS Ground Shipping</label>
                            <p className='text-gray-400'>Up to one week</p>
                        </div>
                    </div>
                    <p>$10.00</p>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <input
                            type="radio"
                            name='ship_method'
                            onChange={e => console.log(e.target.value)}
                            className='accent-primary w-4 h-4'
                            id='4'
                        />
                        <div>
                            <label htmlFor="4" className='block font-bold leading-none'>Pick up at Createx Locker</label>
                            <p className='text-gray-400'>Pick up on September 8 from 12:00</p>
                        </div>
                    </div>
                    <p>$8.50</p>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <input
                            type="radio"
                            name='ship_method'
                            onChange={e => console.log(e.target.value)}
                            className='accent-primary w-4 h-4'
                            id='5'
                        />
                        <div>
                            <label htmlFor="5" className='block font-bold leading-none'>Createx Global Export</label>
                            <p className='text-gray-400'>3-4 days</p>
                        </div>
                    </div>
                    <p>$15.00</p>
                </div>
            </div>
        </div>
    )
}
